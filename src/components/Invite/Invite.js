import React, { useContext, useState, useEffect } from 'react';
import SocketContext from '../../context/SocketContext';
import { CancelBtn, SubmitBtn } from '../btns/btns';
import PartyService from '../../services/PartyService/PartyService';

import './Invite.scss'

export default function Invite({ invite,  destroy }) {
	const [isRemoving, setIsRemoving] = useState('')

	function cancel() {
		setIsRemoving('remove')
		setTimeout(() => {
			destroy();
		}, 340)
	}

	function accept(from) {
		setIsRemoving('remove')
		setTimeout(() => {
			destroy();
		}, 340)
		PartyService.acceptInvite(from);
	}

	return (
		<div className={"notification invite " + isRemoving}>
			<p>Инвайт от {invite}</p>
			<div className="controls">
				<CancelBtn onClick={() => cancel()}>Отмена</CancelBtn>
				<SubmitBtn onClick={() => accept(invite)}>Принять</SubmitBtn>
			</div>
		</div>
	);
}
