import React, { useContext, useState, useEffect } from 'react';
import SocketContext from '../../context/SocketContext';
import './Party.scss';
import PartyService from '../../services/PartyService/PartyService';
import { CancelBtn, SubmitBtn } from '../btns/btns';
import Overlay from '../Overlay/Overlay';

export default function Party() {
	const { socket } = useContext(SocketContext);
	const [party, setParty] = useState({
		players: []
	});
	const [target, setTarget] = useState('');
	const [showOverlay, setShowOverlay] = useState(false);

	useEffect(() => {
		socket.on('party', (party) => {
			console.log(party, 'socket party')
			setParty(party.data);
		});
		
		PartyService.getParty().then(party => {
			console.log(party, 'fetch party')
			setParty(party)
		})
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

			{party.players.map((player) => {
				return (
					<div key={player.username} className="member">
						{player.username}
					</div>
				);
			})}
			{party.players.length !== 5 ? (
				<div className="addMember member" onClick={() => setShowOverlay(true)}>
					Пригласить игрока
				</div>
			) : (
				''
			)}
			{party.players.length !== 1 ? (
				<div className="cancel member" onClick={() => leave()}>
					Выйти
				</div>
			) : (
				''
			)}
		</div>
	);
}
