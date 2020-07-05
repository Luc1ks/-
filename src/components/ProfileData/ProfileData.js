import React, { useState, useEffect } from 'react';
import ProfileService from '../../services/ProfileService/ProfileService';

import './ProfileData.scss';

export default function ProfileData() {
	const [profile, setProfile] = useState({
		username: '',
		rating: 0,
		bio: ''
	});

	useEffect(() => {
		ProfileService.GetOwnProfie().then((profile) => {
			console.log(profile)
			if (profile) {
				setProfile(profile);
			} else {
				window.location.href = '/auth';
			}
		});
	}, []);

	return (
		<div className="userData">
			<div className="avatar"></div>
			<div className="textData">
				<div className="username">{profile.username}</div>
				<div className="rating">{profile.rating}</div>
			</div>
			<div className="bio">
				{profile.bio}
			</div>
		</div>
	);
}
