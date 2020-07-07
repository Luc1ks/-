import React, { useState } from 'react';
import { CancelBtn, SubmitBtn } from '../btns/btns';
import PartyService from '../../services/PartyService/PartyService';

import './Invite.scss'

export default function Invite({ id, from,  destroy }) {
	const [isRemoving, setIsRemoving] = useState('')

	function cancel(id) {
		setIsRemoving('remove')
		setTimeout(() => {
			destroy();
		}, 340)
		PartyService.rejectInvite(id);
	}

	function accept(id) {
		setIsRemoving('remove')
		setTimeout(() => {
			destroy();
		}, 340)
		PartyService.acceptInvite(id);
	}

	return (
		<div className={"notification invite " + isRemoving}>
			<p>Инвайт от {from}</p>
			<div className="controls">
				<CancelBtn onClick={() => cancel(id)}>Отмена</CancelBtn>
				<SubmitBtn onClick={() => accept(id)}>Принять</SubmitBtn>
			</div>
		</div>
	);
}
