import React, { useState, useEffect } from 'react';

import './GameData.scss';
import { v4 as uuid } from 'uuid';
import maps from '../../data/maps/maps';

export default function GameData({ game }) {
    const [map, setMap] = useState(maps[0]);

    useEffect(() => {
        setMap(maps.find(map => map.name === game.map))
    }, [game])

    return (
        <div className="GameData">
            <div className="teams">
                <div className="team1">
                    {game.team1.map((player) => {
                        return (
                            <div className="player" key={uuid()}>
                                <div className="nickname">{player.gamesInfo.SO2.nickname}</div>
                                <div className="id">{player.gamesInfo.SO2.id}</div>
                            </div>
                        );
                    })}
                </div>

                <div className="team2">
                    {game.team2.map((player) => {
                        return (
                            <div className="player" key={uuid()}>
                                <div className="nickname">{player.gamesInfo.SO2.nickname}</div>
                                <div className="id">{player.gamesInfo.SO2.id}</div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="map" style={{ backgroundImage: `url(${map.url})` }}>{map.name}</div>
        </div>

    );
}
