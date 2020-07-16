import React, { useContext, useState, useEffect } from 'react';
import SocketContext from '../../context/SocketContext';
import './Party.scss';
import PartyService from '../../services/PartyService/PartyService';
import { CancelBtn, SubmitBtn, DeleteBtn } from '../btns/btns';
import Overlay from '../Overlay/Overlay';
import ProfileService from '../../services/ProfileService/ProfileService';
import baseUrl from '../../urls/baseUrl';

export default function Party({ partyData = null, profileData = null }) {
	const { socket } = useContext(SocketContext);
	const [party, setParty] = useState({
		players: [],
		owner: ''
	});
	const [user, setUser] = useState({
		id: '',
		username: '',
	});
	const [target, setTarget] = useState('');
	const [showOverlay, setShowOverlay] = useState(false);

	useEffect(() => {
		socket.on('party', (party) => {
			console.log(party, 'socket party');
			setParty(party.data);
		});

		if (!partyData) {
			PartyService.getParty().then((party) => {
				console.log(party, 'fetch party');
				setParty(party);
			})
		}

		return () => {
			socket.off('party');
		};
	}, [socket, partyData]);

	useEffect(() => {
		if (!profileData) {
			ProfileService.GetOwnProfie().then((profile) => {
				if (profile) {
					setUser(profile);
				}
			});
		}
	}, [profileData]);

	useEffect(() => {
		if (partyData) {
			setParty(partyData)
		}
		if (profileData) {
			setUser(profileData)
		}
	}, [partyData, profileData])

	useEffect(() => {
		party.players.sort((a, b) => b.id - a.id);
	}, [party])

	function sendInvte() {
		setShowOverlay(false);
		console.log(target);
		PartyService.sendInvite(target);
		setTarget('');
	}

	function leave() {
		PartyService.leaveParty();
	}

	function kick(username) {
		PartyService.kick(username);
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
					<div key={player.username} style={{backgroundImage: `url(${baseUrl}/api/uploads/user/${player.id}/avatar.png)`}} className="member">
						{/* {player.username} */}
						{user.id === party.owner && user.username !== player.username ? (
							<DeleteBtn onClick={() => kick(player.username)} />
						) : (
								''
							)}
						{
							player.username === user.username && user.id !== party.owner
								? <DeleteBtn onClick={() => leave()} />
								: ''
						}
						{
							party.owner === player.id ?
								<div className="crown"></div>
								: ''
						}
					</div>
				);
			})}
			{party.players.length !== 5 ? (
				<div className="addMember member" onClick={() => setShowOverlay(true)}>
					{/* Пригласить игрока */}
					+
				</div>
			) : (
					''
				)}
		</div>
	);
}
