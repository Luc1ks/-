import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import SocketContext from '../../context/SocketContext';

export default function Redirects() {
    const { socket } = useContext(SocketContext);
    const [redirect, setRedirect] = useState(null)

    useEffect(() => {
        socket.on('redirect', (context) => {
            switch (context.type) {
                case 'game':
                    setRedirect(<Redirect to="/game/lobby" />);
                    break;
                default:
                    break;
            }
        });

        return () => {
            socket.off('redirect')
        }
    }, [socket])

    return redirect;
}