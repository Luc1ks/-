import React, { useState, useEffect } from 'react';
import ProfileService from '../../services/ProfileService/ProfileService';

export default function ProfileData() {
	const [profile, setProfile] = useState({
		username: '',
		rating: 0,
	});

	useEffect(() => {
		ProfileService.GetProfie().then((profile) => {
			if (profile) {
				setProfile(profile);
			} else {
				window.location.href = '/auth';
			}
		});
	}, []);

	return (
		<div className="userData">
			<div className="username">{profile.username}</div>
			<div className="rating">{profile.rating}</div>
		</div>
	);
}
