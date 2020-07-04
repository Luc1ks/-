import React, { useContext, useState, useEffect } from 'react';
import SocketContext from '../../context/SocketContext';
import { CancelBtn, SubmitBtn } from '../btns/btns';
import InviteService from '../../services/InviteService/InviteService';

export default function Invite({ invite, destroy }) {
	function cancel(from) {
		destroy()
	}

	function accept(from) {
		destroy()

		InviteService.acceptInvite(from);
	}

	return (
		<div className="invite">
			<p>Инвайт от {invite}</p>
			<div className="controls">
				<CancelBtn onClick={() => cancel(invite)}>Отмена</CancelBtn>
				<SubmitBtn onClick={() => accept(invite)}>Принять</SubmitBtn>
			</div>
		</div>
	);
}
