import React, { useContext, useState, useEffect } from 'react';
import SocketContext from '../../context/SocketContext';

export default function Party() {
	const { socket } = useContext(SocketContext);
	const [party, setParty] = useState({
		players: [{
            username: ''
        }],
	});

	useEffect(() => {
		socket.on('party', (party) => {
			setParty(party);
		});

		return () => {
			socket.off('party');
		};
	}, [socket]);

	return (
		<div className="party">
			{party.players.map((player) => {
                return (
                <div className="member">{player.username}</div>
                )
			})}
            {
                party.players.length !== 5 
                ? <div className="addMember member">Пригласить игрока</div>
                : ''
            }
		</div>
	);
}
