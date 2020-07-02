import React, { useEffect, useState } from 'react';
import './App.scss';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SocketContext from './context/SocketContext';
import AuthService from './services/AuthService/AuthService';
import TokenService from './services/TokenService/TokenService';
import PreLoader from './components/PreLoader/PreLoader';
import { Switch, Route } from 'react-router';
import Auth from './views/Auth/Auth';
import { frontAuthUrl } from './frontUrls/frontAuthUrl';
import MatchMaking from './views/MathMaking/MatchMaking';

function App() {
	const [socket, setSocket] = useState(null);
	const [showPreloader, setShowPreloader] = useState(true);
	const [isAuthed, setIsAuthed] = useState(true);

	useEffect(() => {
		(async () => {
			
			if (TokenService.getAccessToken()) {
        console.log(true)
				const socket = await AuthService.authorize(
					TokenService.getRefreshToken(),
					TokenService.getAccessToken()
				);
				console.log(socket);

				if (socket) {
					setSocket(socket);
					setShowPreloader(false);
				} else {
					setIsAuthed(false);
					setShowPreloader(false);
				}
			} else {
        setIsAuthed(false)
        setShowPreloader(false)
      }
		})();
	}, []);

	if (showPreloader) {
		return <PreLoader />;
	} else if (isAuthed) {
		return (
			<div className="App">
				<SocketContext.Provider value={{ socket: socket }}>
					<Switch>
						<PrivateRoute path="/" setSocket={setSocket}>
							<MatchMaking />
						</PrivateRoute>
						<Route path={frontAuthUrl}>
							<Auth setSocekt={setSocket} />
						</Route>
					</Switch>
				</SocketContext.Provider>
			</div>
		);
	} else {
		return (
			<div className="App">
				<Auth setSocekt={setSocket} />
			</div>
		);
	}
}

export default App;
