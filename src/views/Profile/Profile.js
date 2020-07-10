import React, { useState, useEffect, useRef } from 'react';
import useService from '../../hooks/useService';
import ProfileService from '../../services/ProfileService/ProfileService';
import PreLoader from '../../components/PreLoader/PreLoader';

import './Profile.scss'
import { useParams } from 'react-router';
import { v4 as uuid } from 'uuid';
import ModerService from '../../services/ModerService/ModerService';
import FriendsService from '../../services/FriendsService/FriendsService';

const validateName = /^.*\.(jpg|JPG|png|PNG|jpeg|JPEG)$/;

export default function Profile() {
    const [profile, setProfile] = useState(null);
    const { request, isLoading } = useService();
    const { username } = useParams();
    const [isEditing, setIsEditing] = useState(false);

    const [avatar, setAvatar] = useState(null);
    const [banner, setBanner] = useState(null);

    const avatarRef = useRef();
    const bannerRef = useRef();

    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [so2Nickname, setSo2Nickname] = useState('');
    const [so2Id, setSo2Id] = useState('');

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
        setIsEditing(true)
    }

    function handleAvatar(e) {
        const file = e.currentTarget.files.item(0);
        if (file && file.name.match(validateName)) {
            if (file.size < 8 * 1024 * 1024) {
                setAvatar(file);
            }
        }
    }

    function handleBanner(e) {
        const file = e.currentTarget.files.item(0);
        if (file && file.name.match(validateName)) {
            if (file.size < 8 * 1024 * 1024) {
                setBanner(file);
            }
        }
    }


    function handleEdit() {
        ProfileService.EditProfile(oldPass, newPass, so2Nickname, so2Id, avatar, banner).then((data) => {
            console.log(data)
        })
    }

    if (isLoading) {
        return <PreLoader />;
    } else if (isEditing) {
        return (
            <div className="profileEditor">
                <input type="text" placeholder="old password" onChange={e => setOldPass(e.target.value)}/>
                <input type="text" name="" placeholder="oldPAssword" id="" onChange={e => setNewPass(e.target.value)}/>
                <input type="text" placeholder="so2 nickname" onChange={e => setSo2Nickname(e.target.value)} value={profile.gamesInfo.SO2.nickname} />
                <input type="text" placeholder="so2 id" onChange={e => setSo2Id(e.target.value)} value={profile.gamesInfo.SO2.id} />

                <input ref={avatarRef} onChange={handleAvatar} type="file" name="" id="" />
                <input ref={bannerRef} onChange={handleBanner} type="file" name="" id="" />

                <button onClick={() => handleEdit()}>Отпарвить</button>
            </div>
        )
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
        return <PreLoader />
    }
}
