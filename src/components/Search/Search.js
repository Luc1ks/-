import React, { useContext, useState, useEffect } from 'react';
import SocketContext from '../../context/SocketContext';
import './Search.scss';
import QueueService from '../../services/QueueService/QueueService';

export default function Search() {
	const { socket } = useContext(SocketContext);
	const [isInSearch, setIsInSearch] = useState(false);

	function joinQueue() {
		if (isInSearch) {
			QueueService.LeaveQueue();
		} else {
			QueueService.JoinQueue();
		}
	}

	useEffect(() => {
		socket.emit('queue');

		socket.on('queue', (isInQueue) => {
			console.log(isInQueue, 'search')
			setIsInSearch(isInQueue);
		});

		return () => {
			socket.off('queue');
		};
	}, [socket]);

	return (
		<div className="search">
			<button className={isInSearch ? 'red' : ''} onClick={() => joinQueue()}>{isInSearch ? 'Отмена' : 'Искать'}</button>
		</div>
	);
}
