import React, { useState, useEffect } from 'react';
import useService from '../../hooks/useService';
import ProfileService from '../../services/ProfileService/ProfileService';
import PreLoader from '../../components/PreLoader/PreLoader';

import './Profile.scss'
import { useParams } from 'react-router';
import { v4 as uuid } from 'uuid';
import ModerService from '../../services/ModerService/ModerService';
import FriendsService from '../../services/FriendsService/FriendsService';

export default function Profile() {
    const [profile, setProfile] = useState(null);
    const { request, isLoading } = useService();
    const { username } = useParams();

    useEffect(() => {
        console.log(username)
    }, [username])

    useEffect(() => {
        if (username) {
            request(() => ProfileService.GetProfileByUsername(username), true).then((profile) => {
                console.log(profile);
                if (profile) {
                    setProfile(profile);
                } else {
                    // window.location.href = '/';
                }
            });
        } else {
            request(ProfileService.GetOwnProfie, true).then((profile) => {
                console.log(profile);

                setProfile(profile);
            });
        }
    }, [request, username]);

    function unwarn(id) {
        ModerService.unwarn(id);
    }

    function addFriend() {
        FriendsService.addFriend(username);
    }

    function editProfile() {
        
    }

    if (isLoading) {
        return <PreLoader />;
    } else if (profile) {
        return (
            <div className="profile">
                <div className="media">
                    <div className="banner"></div>
                    <div className="avatar"></div>
                </div>
                <div className="info">
                    <p className="username">Username: {profile.username}</p>
                    <p className="bio">Bio: {profile.bio}</p>
                    <p className="rating">Rating: {profile.rating}</p>
                    {
                        profile.warns
                            ? profile.warns.map((warn) => {
                                return (
                                    <div className="warn" key={uuid()}>
                                        <p className="craeted">{warn.createdAt}</p>
                                        <p className="from">Moder: {warn.moderator}</p>
                                        <p className="reason">Reason: {warn.reason}</p>
                                        <div className="unwarn" onClick={() => unwarn(warn.id)}>Unwarn</div>
                                    </div>
                                )
                            })
                            : ''
                    }
                </div>
                <div className="controls">
                    {
                        username
                            ? <button onClick={() => addFriend()}>Добавить в друзья</button>
                            : <button onClick={() => editProfile()}>Редактировать</button>
                    }
                </div>
            </div>
        );
    } else {
        return <PreLoader />;
    }
}
