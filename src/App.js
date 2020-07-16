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
import Redirects from './components/Redirects/Redirects';
import Game from './views/Game/Game';
import Profile from './views/Profile/Profile';
import Moder from './views/Moder/Moder';
import PickachuService from './services/PickachuService/PickachuService';
import ProfileContext from './context/ProfileContext';
import ProfileService from './services/ProfileService/ProfileService';

PickachuService.drawPickachu();

function App() {
	const [socket, setSocket] = useState(null);
	const [showPreloader, setShowPreloader] = useState(true);
	const [profile, setProfile] = useState({
		username: '',
		id: -1,
	});

	//#region auth
	useEffect(() => {
		if (TokenService.getAccessToken()) {
			AuthService.authorize().then((socket) => {
				socket.on('connect', () => console.log('connected'));

				socket.on('disconnect', () => {
					console.log('disconnected');
					setShowPreloader(false);
				});

				socket.on('auth', () => {
					console.log('authed');
					setSocket(socket);
					setShowPreloader(false);
					ProfileService.GetOwnProfie().then((profile) => {
						setProfile(profile);
					});
				});

				socket.on('unauth', () => {
					console.log('unauth');
					setShowPreloader(false);
				});
			});
		} else {
			setShowPreloader(false);
		}
	}, []);
	//#endregion

	if (showPreloader) {
		return <PreLoader />;
	} else if (socket) {
		return (
			<div className="App">
				<ProfileContext.Provider value={{ profile: profile }}>
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
								<PrivateRoute path="/game/lobby" setSocket={setSocket} exact>
									<Game />
								</PrivateRoute>
								<PrivateRoute path="/profile/:username" setSocket={setSocket}>
									<Profile />
								</PrivateRoute>
								<PrivateRoute path="/profile/" setSocket={setSocket} exact>
									<Profile />
								</PrivateRoute>
								<PrivateRoute setSocket={setSocket} path="/moder" exact>
									<Moder />
								</PrivateRoute>
								<Route path="/profile/:username" exact>
									<Profile />
								</Route>
								<Route path={frontAuthUrl}>
									<Auth setSocket={setSocket} />
								</Route>
							</Switch>
							<Navbar />
							<Redirects />
						</BrowserRouter>
					</SocketContext.Provider>
				</ProfileContext.Provider>
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
