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
import Navbar from './components/Navbar/Navbar';
import Friends from './views/Friends/Friends';
import Notifications from './components/Notifications/Notifications';
import NotificationsView from './views/NotificationsView/NotificationsView';

function App() {
	const [socket, setSocket] = useState(null);
	const [showPreloader, setShowPreloader] = useState(true);
	const [isAuthed, setIsAuthed] = useState(true);
	//#region auth
	useEffect(() => {
		if (TokenService.getAccessToken()) {
			AuthService.authorize().then((socket) => {
				socket.on('connect', () => console.log('connected'));

				socket.on('disconnect', () => {
					console.log('disconnected');
					setShowPreloader(false);
					setIsAuthed(false);
				});

				socket.on('auth', () => {
					console.log('authed');
					setSocket(socket);
					setShowPreloader(false);
					setIsAuthed(true);
				});

				socket.on('unauth', () => {
					console.log('unauth');
					setShowPreloader(false);
					setIsAuthed(false);
				});
			});
		} else {
			setIsAuthed(false);
			setShowPreloader(false);
		}
	}, []);
	//#endregion

	if (showPreloader) {
		return <PreLoader />;
	} else if (isAuthed) {
		return (
			<div className="App">
				<SocketContext.Provider value={{ socket: socket }}>
					<BrowserRouter>
						<Notifications />
						<Switch>
							<PrivateRoute path="/" setSocket={setSocket} exact>
								<MatchMaking />
							</PrivateRoute>
							<PrivateRoute path="/friends" setSocket={setSocket} exact>
								<Friends />
							</PrivateRoute>
							<PrivateRoute path="/notifications" setSocket={setSocket} exact>
								<NotificationsView />
							</PrivateRoute>
							<Route path={frontAuthUrl}>
								<Auth setSocket={setSocket} />
							</Route>
						</Switch>
						<Navbar />
					</BrowserRouter>
				</SocketContext.Provider>
			</div>
		);
	} else {
		console.log('not auhed');
		return (
			<div className="App">
				<Auth setSocket={setSocket} />
			</div>
		);
	}
}

export default App;
