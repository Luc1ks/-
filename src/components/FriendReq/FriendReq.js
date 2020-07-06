import React, { useState } from 'react';
import { CancelBtn, SubmitBtn } from '../btns/btns';
import FriendsService from '../../services/FriendsService/FriendsService';

export default function FriendReq({ from, destroy }) {
	const [removing, setRemoving] = useState('');

	function cancel(username) {
		setRemoving('remove')
		setTimeout(() => {
			destroy()
		}, 340)
	}

	function accept(username) {
		setRemoving('remove')
		setTimeout(() => {
			destroy()
		}, 340)
        FriendsService.addFriend(username)
	}

	return (
		<div className={"notification invite " + removing}>
			<p>Приглашение в друзья от {from.username}</p>
			<div className="controls">
				<CancelBtn onClick={() => cancel(from.username)}>Отмена</CancelBtn>
				<SubmitBtn onClick={() => accept(from.username)}>Принять</SubmitBtn>
			</div>
		</div>
	);
}
