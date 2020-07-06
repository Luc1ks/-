import React, { useState, useEffect, useContext } from 'react';
import SocketContext from '../../context/SocketContext';
import NotificationsService from '../../services/NotificationsService/NotificationsService';
import { v4 } from 'uuid';
import FriendReq from '../../components/FriendReq/FriendReq';
import Invite from '../../components/Invite/Invite';

import './notificationsView.scss'

export default function NotificationsView() {
    const [nots, setNots] = useState({
        party: [],
        friends: []
    });

    useEffect(() => {
        NotificationsService.get().then((nots) => {
            if (nots) {
                setNots(nots);
            }
        })
    }, [])

    function destroyFriendReq(index) {
        setNots(prevState => {
            const nots = {
                ...prevState
            };
            nots.friends.splice(index, 1);
            return nots;
        })
    }

    function destroyPartyReq(index) {
        setNots(prevState => {
            const nots = {
                ...prevState
            };
            nots.party.splice(index, 1);
            return nots;
        })
    }

    return (
        <div className="notificationsView">
            {
                nots.friends.map((friend, index) => {
                    return (
                        <FriendReq from={friend.username} destroy={() => destroyFriendReq(index)}/>
                    )
                })
            }
            {
                nots.party.map((party, index) => {
                    return (
                        <Invite from={party.players[0].username} invite={party.id} destroy={() => destroyPartyReq(index)}/>
                    )
                })
            }
        </div>
    );
}