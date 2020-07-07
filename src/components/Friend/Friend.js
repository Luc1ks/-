import React from 'react';

import './Friend.scss';
import { SubmitBtn, DeleteBtn } from '../btns/btns';
import PartyService from '../../services/PartyService/PartyService';
import FriendsService from '../../services/FriendsService/FriendsService';

export default function Friend({data, destroy = () => {}}) {

    function RemoveFriend() {
        FriendsService.removeFriend(data.id)
        destroy();
    }

    function InviteToParty() {
        PartyService.sendInvite(data.username);
    }

    return (
        <div className="friend">
            <div className="data">
                <div className="username">{data.username}</div>
            </div>
            <div className="controls">
                <SubmitBtn onClick={() => InviteToParty()}>Пригласить</SubmitBtn>
                <DeleteBtn onClick={() => RemoveFriend()} />
            </div>
        </div>
    )
}