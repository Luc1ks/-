import React, { useEffect, useState, useContext } from 'react';

import './Game.scss';

import GameService from '../../services/GameService/GameService';
import ProfileService from '../../services/ProfileService/ProfileService';
import Voting from '../../components/Voting/Voting';
import Chat from '../../components/Chat/Chat';
import Teams from '../../components/Teams/Teams';
import SocketContext from '../../context/SocketContext';

const statuses = {
    MAP_VOTING: 0,
    CANCELED: 1,
    UNDECIDED: 2,
    WINNER_1: 3,
    WINNER_2: 4,
    DRAW: 5
}

export default function Game() {
    const [profile, setProfile] = useState({
        id: -1
    });
    const [game, setGame] = useState({
        status: -1
    });
    const {socket} = useContext(SocketContext);

    const [showChat, setShowChat] = useState(false);

    useEffect(() => {
        ProfileService.GetOwnProfie().then(profileData => {
            if (profileData) {
                setProfile(profileData);
            }
        })

        GameService.GetGame().then(game => {
            if (game) {
                setGame(game)
                console.log(game, 'game')
            }
        })
    }, [])


    useEffect(() => {
        socket.on('game/update', context => {
            if (context.data) {
                setGame(context.data);
            }
        })
    })

    return (
        <div className="game">
            {
                game.status === statuses.MAP_VOTING
                    ? <Voting profile={profile} game={game} />
                    : ''
            }
            {
                game.status === statuses.UNDECIDED
                    ? <Teams game={game} />
                    : ''
            }
            <div className="chatBtn" onClick={() => setShowChat(true)}>Chat</div>
            <Chat profile={profile} setShow={setShowChat} show={showChat} />
        </div>
    )


}