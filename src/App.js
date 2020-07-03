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
import { BrowserRouter } from 'react-router-dom';

function App() {
	const [socket, setSocket] = useState(null);
	const [showPreloader, setShowPreloader] = useState(true);
	const [isAuthed, setIsAuthed] = useState(true);

	useEffect(() => {
		if (TokenService.getAccessToken()) {
			AuthService.authorize(TokenService.getRefreshToken(), TokenService.getAccessToken()).then(
				(socket) => {
					console.log(socket);
					if (socket) {
						console.log(socket);
						setTimeout(() => {
							if (!socket.disconnected) {
								setSocket(socket);
								setShowPreloader(false);
								setIsAuthed(true);
							} else {
								setShowPreloader(false);
								setIsAuthed(false);
							}
						}, 2000);
					} else {
						setIsAuthed(false);
						setShowPreloader(false);
					}
				}
			);
		} else {
			setIsAuthed(false);
			setShowPreloader(false);
		}
	}, []);

	useEffect(() => {
		setTimeout(() => {
			if (socket !== null && !socket.disconnected) {
				setIsAuthed(true);
			} else {
				setIsAuthed(false)
			}
		}, 1000);
	}, [socket]);

	if (showPreloader) {
		return <PreLoader />;
	} else if (isAuthed) {
		return (
			<div className="App">
				<SocketContext.Provider value={{ socket: socket }}>
					<BrowserRouter>
						<Switch>
							<PrivateRoute path="/" setSocket={setSocket} exact>
								<MatchMaking />
							</PrivateRoute>
							<Route path={frontAuthUrl}>
								<Auth setSocket={setSocket} />
							</Route>
						</Switch>
					</BrowserRouter>
				</SocketContext.Provider>
			</div>
		);
	} else {
		return (
			<div className="App">
				<Auth setSocket={setSocket} />
			</div>
		);
	}
}

export default App;
