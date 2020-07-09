import React, { useContext, useState, useEffect } from 'react';

import './Voting.scss';
import SocketContext from '../../context/SocketContext';

import GameService from '../../services/GameService/GameService';

import maps from '../../data/maps/maps';


export default function Voting({ profile, game }) {
    const { socket } = useContext(SocketContext);
    const [votes, setVotes] = useState([]);
    const [lastFetch, setLastFetch] = useState(new Date().getTime() - 5000);
    const [timer, setTimer] = useState(30);

    useEffect(() => {
        const interval = setInterval(() => {
            if (game) {
                const newTime = (new Date(game.voteStartAt).getTime() - new Date().getTime()) / 1000 * -1;
                setTimer(30 - Math.round(newTime))
            }
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [game]);


    function vote(index) {
        if (new Date().getTime() - lastFetch > 3000) {
            GameService.vote(index).then((data) => {
                if (data) {
                    console.log(data, 'fetch votes');
                    setVotes(data);
                    setLastFetch(new Date().getTime());
                }
            });
        }
    }

    useEffect(() => {
        socket.on('game/vote', (context) => {
            console.log(context.data, 'votes')
            setVotes(context.data);
        });

        return () => {
            socket.off('game/vote');
        }
    }, [socket]);

    return (
        <div className="voting">
            {
                maps.map((map, index) => {
                    const mapVotes = votes.filter(
                        vote =>
                            vote.userVote.index === index
                            &&
                            vote.userVote.state === 1
                    );

                    const isVoted = mapVotes.find(vote => vote.userId === profile.id);

                    return (
                        <div className={isVoted ? "map selected" : "map"} onClick={() => vote(index)} style={{ backgroundImage: `url(${map.url})` }}>
                            {map.name}
                            <div className="amount">{mapVotes.length}</div>
                        </div>
                    )
                })
            }
            <div className="timer">{timer} S</div>
        </div>
    )
}