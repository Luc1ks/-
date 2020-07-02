import React, { useContext } from 'react'
import SocketContext from '../../context/SocketContext'
import { Redirect, Route } from 'react-router';
import { frontAuthUrl } from '../../frontUrls/frontAuthUrl';

export default function PrivateRoute({path, setSocket, children}) {
    const {socket} = useContext(SocketContext);

    if (!socket || socket.disconnected) {
        return <Redirect to={frontAuthUrl} />
    } else {
        return <Route path={path} />
    }
}