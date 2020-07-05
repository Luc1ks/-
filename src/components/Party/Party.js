import React, { useContext, useState, useEffect } from 'react';
import SocketContext from '../../context/SocketContext';
import './Party.scss';
import PartyService from '../../services/PartyService/PartyService';
import { CancelBtn, SubmitBtn } from '../btns/btns';
import Overlay from '../Overlay/Overlay';

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
		console.log(target);
		PartyService.sendInvite(target);
		setTarget('');
	}

	function leave() {
		PartyService.leaveParty();
	}

	return (
		<div className="party">
			<Overlay show={showOverlay}>
				<div className="invite">
					<input type="target" onChange={(e) => setTarget(e.target.value)} value={target} />
					<div className="controls">
						<CancelBtn onClick={() => setShowOverlay(false)}>Отмена</CancelBtn>
						<SubmitBtn onClick={() => sendInvte()}>Отправить</SubmitBtn>
					</div>
				</div>
			</Overlay>

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
			{party.length !== 1 ? (
				<div className="cancel member" onClick={() => leave()}>
					Выйти
				</div>
			) : (
				''
			)}
		</div>
	);
}
