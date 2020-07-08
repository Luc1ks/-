import React from 'react';

import './Team.scss'

export default function Teams({ game }) {
    return (
        <div className="teams">
            <div className="team1">{
                game.team1.map(player => {
                    return (
                        <div className="player">
                            <div className="nickname">{player.gamesInfo.SO2.nickname}</div>
                            <div className="id">{player.gamesInfo.SO2.id}</div>
                        </div>
                    )
                })
            }</div>
            <div className="team2">{
                game.team2.map(player => {
                    return (
                        <div className="player">
                            <div className="nickname">{player.gamesInfo.SO2.nickname}</div>
                            <div className="id">{player.gamesInfo.SO2.id}</div>
                        </div>
                    )
                })
            }</div>
        </div>
    )
}