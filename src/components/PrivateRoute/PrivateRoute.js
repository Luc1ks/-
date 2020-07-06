import React, { useContext } from 'react';
import SocketContext from '../../context/SocketContext';
import { Route } from 'react-router';
import Auth from '../../views/Auth/Auth';

export default function PrivateRoute({ path, setSocket, children, ...rest }) {
	const { socket } = useContext(SocketContext);
	
	if (!socket) {
		return <Auth setSocket={setSocket} />;
	} else {
		return (
		<Route path={path} {...rest} >
			{children}
		</Route>
		);
	}
}
