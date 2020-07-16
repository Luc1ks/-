import React, { useContext, useState, useCallback } from 'react';

import './Navbar.scss';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import User from './user.svg';
import News from './news.svg';
import Vs from './VS.svg';
import baseUrl from '../../urls/baseUrl';
import ProfileContext from '../../context/ProfileContext';

export default function Navbar() {
	const location = useLocation();
	const { profile } = useContext(ProfileContext);


	const [routes, setRoutes] = useState([
		{
			url: '/feed',
			name: 'Friends',
			content: News,
		},
		{
			url: '/',
			name: 'MM',
			content: Vs,
		},
		{
			url: '/profile',
			name: 'Profile',
			content: baseUrl + `/api/uploads/user/${profile.id}/avatar.png`,
		},
	]);
	

	return (
		<div className="navbar">
			{routes.map((route) => {
				return (
					<Link
						className={location.pathname === route.url ? 'navLink active' : 'navLink'}
						to={route.url}
						key={v4()}
					>
						<img className={route.name === 'Profile' ? 'profile' : ''} src={route.content} alt="" />
					</Link>
				);
			})}
		</div>
	);
}

// {routes.map((route) => {
// 	return (
// 		<Link
// 			className={location.pathname === route.url ? 'navLink active' : 'navLink'}
// 			to={route.url}
// 			key={v4()}
// 		>
// 			{() => {
// 				console.log(route.content);
// 				return '';
// 			}}
// 		</Link>
// 	);
// })}

