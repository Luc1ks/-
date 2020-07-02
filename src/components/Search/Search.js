import React, { useContext, useState, useEffect } from 'react';
import SocketContext from '../../context/SocketContext';

export default function Search() {
	const { socket } = useContext(SocketContext);
	const [isInSearch, setIsInSearch] = useState(false);

	useEffect(() => {
		socket.emit('queue');

		socket.on('queue', (isInQueue) => {
			setIsInSearch(isInQueue);
		});

		return () => {
			socket.off('queue');
		};
	}, [socket]);

	return (
		<div className="search">
			<button>{isInSearch ? 'Искать' : 'Отмена'}</button>
		</div>
	);
}
