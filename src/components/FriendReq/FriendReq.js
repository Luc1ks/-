import React, { useContext, useState, useEffect } from 'react';
import SocketContext from '../../context/SocketContext';
import { CancelBtn, SubmitBtn } from '../btns/btns';
import InviteService from '../../services/InviteService/InviteService';
import UserService from '../../services/UserService/UserService';

export default function FriendReq({ from, destroy }) {
	function cancel(id) {
		destroy()
	}

	function accept(id) {
		destroy()
        UserService.addFriend(id)
	}

	return (
		<div className="invite">
			<p>Приглашение в друзья от {from.username}</p>
			<div className="controls">
				<CancelBtn onClick={() => cancel(from.id)}>Отмена</CancelBtn>
				<SubmitBtn onClick={() => accept(from.id)}>Принять</SubmitBtn>
			</div>
		</div>
	);
}
