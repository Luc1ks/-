import React, { useState, useEffect } from 'react';
import FriendsService from '../../services/FriendsService/FriendsService';
import { SubmitBtn, CancelBtn } from '../../components/btns/btns';
import Overlay from '../../components/Overlay/Overlay';

import './Friends.scss'
import Friend from '../../components/Friend/Friend';

export default function Friends() {
    const [friends, setFriends] = useState([]);
    const [target, setTarget] = useState('');

    const [showOverlay, setShowOverlay] = useState(false);
    
    useEffect(() => {
        FriendsService.getFriends().then(friends => {
            if (friends) {
                console.log(friends[0])
                setFriends(friends);
            }
        })
    }, [])

    function sendReq() {
        setShowOverlay(false);
        FriendsService.addFriend(target);
        setTarget('');
    }

    function destroy(index) {
        setFriends(prevState => {
            const friends = [...prevState];
            friends.splice(index);
            return friends;
        })
    }

    return (
        <div className="friends">
            <div className="controls">
                <SubmitBtn onClick={() => setShowOverlay(true)}>Добавить</SubmitBtn>
            </div>
            <Overlay show={showOverlay}>
                <div className="addFriend">
                    <input type="target" onChange={(e) => setTarget(e.target.value)} value={target} />
                    <div className="controls">
                        <CancelBtn onClick={() => setShowOverlay(false)}>Отмена</CancelBtn>
                        <SubmitBtn onClick={() => sendReq()}>Отправить</SubmitBtn>
                    </div>
                </div>
            </Overlay>
            {friends.map((friend, index) => {
                return (
                    <Friend key={friend.username} data={friend} destroy={() => destroy(index)}/>
                )
            })}
        </div>
    )
} 