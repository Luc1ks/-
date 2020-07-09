import React, { useContext, useEffect, useState } from 'react';
import { CancelBtn } from '../btns/btns';

import './CancelMatch.scss'
import SocketContext from '../../context/SocketContext';
import num2str from '../../utils/num2str';
import GameService from '../../services/GameService/GameService';

export default function CancelMatch({game = null}) {
    const [counter, setCounter] = useState('0 голосов');
    const { socket } = useContext(SocketContext);

    useEffect(() => {
        socket.on('game/cancel', (context) => {
            console.log(context)
            setCounter(context.data.length + ' ' + num2str(context.data.length, ['голос', 'голоса', 'голосов']));
        });

        return () => {
            socket.off('game/cancel');
        }
    }, [socket])

    useEffect(() => {
        // console.log(game)
        if (game && game.cancelVotes) {
            console.log(game.cancelVotes.length + ' ' + num2str(game.cancelVotes.length, ['голос', 'голоса', 'голосов']))
            setCounter(game.cancelVotes.length + ' ' + num2str(game.cancelVotes.length, ['голос', 'голоса', 'голосов']))
        }
    }, [game])

    function vote() {
        GameService.CancelationVote().then(data => {
            console.log(data)
        });
    }

    return (
        <div className="cancelMatch">
            <CancelBtn onClick={() => vote()}>Голосовать за отмену</CancelBtn>
            <div className="counter">{counter}</div>
        </div>
    )
}