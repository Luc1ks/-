import React, { useState, useEffect } from 'react';
import useService from '../../hooks/useService';
import ProfileService from '../../services/ProfileService/ProfileService';
import PreLoader from '../../components/PreLoader/PreLoader';

export default function Profile({ username = null }) {
	const [profile, setProfile] = useState(null);
	const { request, isLoading } = useService();

	useEffect(() => {
		if (username) {
			request(() => ProfileService.GetProfileByUsername(username), true).then((profile) => {
				console.log(profile);
				if (profile) {
					setProfile(profile);
				} else {
					window.location.href = '/';
				}
			});
		} else {
			request(ProfileService.GetOwnProfie, true).then((profile) => {
				console.log(profile);

				setProfile(profile);
			});
		}
	}, [request, username]);

	if (isLoading) {
		return <PreLoader />;
	} else if (profile) {
		return (
			<div className="profile">
				<div className="media">
					{/* <div className="banner">{profile.banner}</div> */}
					{/* <div className="avatar">{profile.avatar}</div> */}
				</div>
				<div className="info">
					<p className="username">{profile.username}</p>
					<p className="bio">{profile.bio}</p>
					<p className="rating">{profile.rating}</p>
				</div>
			</div>
		);
	} else {
        return <PreLoader />
    }
}
