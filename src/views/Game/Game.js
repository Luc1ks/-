import React, { useEffect, useState, useContext } from 'react';

import './Game.scss';

import map1 from './map1.png';
import map2 from './map2.png';
import map3 from './map3.png'
import SocketContext from '../../context/SocketContext';
import GameService from '../../services/GameService/GameService';
import ProfileService from '../../services/ProfileService/ProfileService';

const maps = [
    {
        name: 'map1',
        url: map1
    },
    {
        name: 'map2',
        url: map2
    },
    {
        name: 'map3',
        url: map3
    }
]

export default function Game() {
    const { socket } = useContext(SocketContext);
    const [votes, setVotes] = useState([]);
    const [profile, setProfile] = useState({
        id: -1
    });
    const [lastFetch, setLastFetch] = useState(new Date().getTime() - 5000);
    const [game, setGame] = useState(null);
    const [timer, setTimer] = useState(30);

    useEffect(() => {
        ProfileService.GetOwnProfie().then((profileData) => {
            if (profileData) {
                setProfile(profileData);
            }
        });
    }, [])

    useEffect(() => {

        const interval = setInterval(() => {
            if (game) {
                const newTime = (new Date(game.voteStartAt).getTime() - new Date().getTime()) / 1000 * -1;
                console.log(30 - Math.round(newTime))
                setTimer(30 - Math.round(newTime))
            }
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [game])

    function vote(index) {
        if (new Date().getTime() - lastFetch > 3000) {
            GameService.vote(index).then((data) => {
                if (data) {
                    console.log(data);
                    setVotes(data);
                    setLastFetch(new Date().getTime());
                }
            });
        }
    }

    useEffect(() => {
        GameService.GetGame().then(game => {
            if (game) {
                console.log(game, 'game')
                setGame(game)
            }
        })
    }, [])

    useEffect(() => {
        socket.on('game', (context) => {
            if (context.type === 'vote') {
                console.log(context.data, 'votes')
                setVotes(context.data);
            }
        });

        return () => {
            socket.off('game');
        }
    }, [socket])

    return (
        <div className="game">
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
            </div>
            <div className="timer">{timer} S</div>
            <div className="chat"></div>
        </div>
    )
}