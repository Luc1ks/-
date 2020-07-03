import React, { useContext, useState, useEffect } from 'react';
import SocketContext from '../../context/SocketContext';
import './Party.scss';
import InviteService from '../../services/InviteService/InviteService';
import { CancelBtn, SubmitBtn } from '../btns/btns';

export default function Party() {
	const { socket } = useContext(SocketContext);
	const [party, setParty] = useState([]);
	const [target, setTarget] = useState('');
	const [showOverlay, setShowOverlay] = useState(false);
	useEffect(() => {
		socket.on('party', (party) => {
			setParty(party);
		});
		socket.emit('party');
		return () => {
			socket.off('party');
		};
	}, [socket]);

	function sendInvte() {
		setShowOverlay(false);
		InviteService.sendInvite(target);
		setTarget('');
	}

	return (
		<div className="party">
			<div className={'overlay ' + showOverlay}>
				<div className="invite">
					<input
						type="target"
						onChange={(e) => setTarget(e.target.value)}
						value={target}
					/>
					<div className="controls">
						<CancelBtn onClick={() => setShowOverlay(false)}>Отмена</CancelBtn>
						<SubmitBtn onClick={() => sendInvte()}>Отправить</SubmitBtn>
					</div>
				</div>
			</div>
			{party.map((player) => {
				return (
					<div key={player} className="member">
						{player}
					</div>
				);
			})}
			{party.length !== 5 ? (
				<div className="addMember member" onClick={() => setShowOverlay(true)}>
					Пригласить игрока
				</div>
			) : (
				''
			)}
		</div>
	);
}
