import React, { useState, useEffect } from 'react';
import useService from '../../hooks/useService';
import ModerService from '../../services/ModerService/ModerService';
import PreLoader from '../../components/PreLoader/PreLoader';
import baseUrl from '../../urls/baseUrl';

import './Moder.scss';
import { v4 as uuid } from 'uuid';

const statuses = {
    MAP_VOTING: 0,
    CANCELED: 1,
    UNDECIDED: 2,
    WAIT_MODER: 3,
    WINNER_1: 4,
    WINNER_2: 5,
    DRAW: 6
}

export default function Moder() {
    const { request, isLoading } = useService();
    const [lobies, setLobies] = useState([])
    const [lobby, setLobby] = useState(null);
    const [imgPaths, setImgPaths] = useState({
        team1: [],
        team2: []
    })
    useEffect(() => {
        request(ModerService.getLobbies, true).then(data => {
            if (data) {
                setLobies(data)
            } else {
                window.location.replace(window.location.hostname)
            }
        })
    }, [request])

    function moderate(lobby) {
        setLobby(lobby)
    }

    useEffect(() => {
        if (lobby) {
            const imgPaths = {
                team1: [],
                team2: []
            }
            lobby.players.map(player => {
                const team = player.team;
                const imgUrl = baseUrl + `/api/uploads/lobbies/${lobby.id}/${player.userId}.png`;
                imgPaths[`team${team}`].push(imgUrl);
            });
            setImgPaths(imgPaths);
        }
    }, [lobby])

    function setWinner(lobby, status) {
        ModerService.setWinner(lobby, status);
    }

    if (isLoading) {
        return (
            <PreLoader />
        )
    } else if (!lobby) {
        return (
            <div className="moders">
                {lobies.map(lobby => {
                    return (
                        <div key={uuid()} className="lobby">
                            <p className="craeted">{lobby.createdAt}</p>
                            <button onClick={() => moderate(lobby)}>Модерировать</button>
                        </div>
                    )
                })}
            </div>
        )
    } else {
        console.log(lobby)
        return (
            <div className="lobby">
                <div className="user_pics">
                    <div className="team1">
                        {imgPaths.team1.map(path => {
                            return (
                                <a key={uuid()} href={path} target="_blanked">
                                    <img src={path} alt="" />
                                </a>
                            )
                        })}
                    </div>
                    <div className="team2">
                        {imgPaths.team2.map(path => {
                            return (
                                <a key={uuid()} href={path} target="_blanked">
                                    <img src={path} alt="" />
                                </a>
                            )
                        })}
                    </div>
                </div>

                <div className="controls">
                    <button onClick={() => setWinner(lobby, statuses.WINNER_1)}>Голубые</button>
                    <button onClick={() => setWinner(lobby, statuses.WINNER_2)}>Красные</button>
                    <button onClick={() => setWinner(lobby, statuses.DRAW)}>Ничья</button>
                </div>
            </div>
        )
    }
}