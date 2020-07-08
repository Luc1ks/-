import React, { useState, useEffect } from 'react';
import ProfileService from '../../services/ProfileService/ProfileService';

import './ProfileData.scss';

export default function ProfileData({ profileData = null }) {
	const [profile, setProfile] = useState({
		username: '',
		rating: 0,
		bio: '',
	});

	useEffect(() => {
		if (profileData) {
			setProfile(profileData);
		} else {
			ProfileService.GetOwnProfie().then((profile) => {
				if (profile) {
					setProfile(profile);
				}
			});
		}
	}, [profileData]);

	return (
		<div className="userData">
			<div className="avatar"></div>
			<div className="textData">
				<div className="username">{profile.username}</div>
				<div className="rating">{profile.rating}</div>
			</div>
			<div className="bio">{profile.bio}</div>
		</div>
	);
}
