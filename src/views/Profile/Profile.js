import React, { useState, useEffect, useRef } from 'react';
import useService from '../../hooks/useService';
import ProfileService from '../../services/ProfileService/ProfileService';
import PreLoader from '../../components/PreLoader/PreLoader';

import './Profile.scss'
import { useParams } from 'react-router';
import { v4 as uuid } from 'uuid';
import ModerService from '../../services/ModerService/ModerService';
import FriendsService from '../../services/FriendsService/FriendsService';
import baseUrl from '../../urls/baseUrl';

const validateName = /^.*\.(jpg|JPG|png|PNG|jpeg|JPEG)$/;

export default function Profile() {
    const [profile, setProfile] = useState(null);
    const { request, isLoading } = useService();
    const { username } = useParams();
    const [isEditing, setIsEditing] = useState(false);

    const [avatar, setAvatar] = useState(null);
    const [banner, setBanner] = useState(null);

    const [avatarUrl, setAvatarUlr] = useState('');
    const [bannerUrl, setBannerUrl] = useState('');

    const avatarRef = useRef();
    const bannerRef = useRef();

    const [oldPass, setOldPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [so2Nickname, setSo2Nickname] = useState('');
    const [so2Id, setSo2Id] = useState('');
    const [bio, setBio] = useState('');

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
                setAvatarUlr(URL.createObjectURL(file));
            }
        }
    }

    function handleBanner(e) {
        const file = e.currentTarget.files.item(0);
        if (file && file.name.match(validateName)) {
            if (file.size < 8 * 1024 * 1024) {
                setBanner(file);
                setBannerUrl(URL.createObjectURL(file));
            }
        }
    }


    function handleEdit() {
        ProfileService.EditProfile(oldPass, newPass, so2Nickname, so2Id, bio, avatar, banner).then((data) => {
            console.log(data)
        })
    }

    if (isLoading) {
        return <PreLoader />;
    } else if (isEditing) {
        return (
            <div className="profileEditor">
                <label htmlFor="">
                    Старый пароль:<br /> <input type="text" placeholder="Старый пароль" onChange={e => setOldPass(e.target.value)} />
                </label>
                <label htmlFor="">
                    Новый пароль:<br /> <input type="text" name="" placeholder="Новый пароль" id="" onChange={e => setNewPass(e.target.value)} />
                </label>
                <label htmlFor="">
                    So2 никнейм:<br /> <input type="text" placeholder="So2 никнейм" onChange={e => setSo2Nickname(e.target.value)} defaultValue={profile.gamesInfo.SO2.nickname} />
                </label>

                <label htmlFor="">
                    So2 id: <br />
                    <input type="text" placeholder="So2 id" onChange={e => setSo2Id(e.target.value)} defaultValue={profile.gamesInfo.SO2.id} />
                </label>

                <label htmlFor="">
                    Статус:
                    <textarea name="bio" id="" maxLength={72} cols={30} rows={10} onChange={e => setBio(e.target.value)} placeholder="Статус" defaultValue={profile.bio}>

                    </textarea>
                </label>


                <input ref={avatarRef} onChange={handleAvatar} type="file" name="" id="" />
                <input ref={bannerRef} onChange={handleBanner} type="file" name="" id="" />

                <div className="banner" onClick={() =>
                    // @ts-ignore
                    avatarRef.current.click()} style={{ backgroundImage: `url(${bannerUrl})` }}>
                    Установить баннер
                    </div>
                <div className="avatar" onClick={() =>
                    // @ts-ignore
                    bannerRef.current.click()} style={{ backgroundImage: `url(${avatarUrl})` }}>
                    Установить аватар
                    </div>

                <div className="controls">
                    <button onClick={() => handleEdit()}>Отпарвить</button>
                    <button className="exit" onClick={() => setIsEditing(false)}>Отмена</button>
                </div>

            </div>
        )
    } else if (profile) {
        return (
            <div className="profile">
                <div className="media">
                    <div className="banner" style={{ backgroundImage: ` url(${baseUrl}/api/uploads/user/${profile.id}/banner.png), url(${baseUrl}/api/uploads/user/-1/banner.png)` }}></div>
                    <div className="avatar" style={{ backgroundImage: `url(${baseUrl}/api/uploads/user/${profile.id}/avatar.png), url(${baseUrl}/api/uploads/user/-1/avatar.png)` }}></div>
                </div>
                <div className="info">
                    <p className="username">{profile.username}</p>
                    <p className="bio">{profile.bio}</p>
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
                <div className="ratings">
                    <div className="rating">
                        <p className="value elo">{profile.rating}</p>
                        <p className="name elo">ELO</p>
                    </div>
                    <div className="rating">
                        <p className="value wins">{profile.wins}</p>
                        <p className="name wins">WINS</p>
                    </div>
                    <div className="rating">
                        <p className="value loses">{profile.total_games - profile.wins}</p>
                        <p className="name loses">LOSE</p>
                    </div>
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
