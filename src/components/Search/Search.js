import React, { useContext, useState, useEffect } from 'react';
import SocketContext from '../../context/SocketContext';
import './Search.scss';
import QueueService from '../../services/QueueService/QueueService';
import {ReactComponent as  Play} from './play.svg'

const partyStatuses = {
	'WAIT': 0,
	'QUEUE': 1,
	'IN_GAME': 2
}


export default function Search({partyData = null}) {
	const { socket } = useContext(SocketContext);
	const [isInSearch, setIsInSearch] = useState(false);
	const [shake, setShake] = useState('');

	function joinQueue() {
		if (isInSearch) {
			QueueService.LeaveQueue().then((result) => (result ? setIsInSearch(false) : shakeAnime()));
		} else {
			QueueService.JoinQueue().then((result) => (result ? setIsInSearch(true) : shakeAnime()));
		}
	}

	function shakeAnime() {
		setShake('shake');
		setTimeout(() => {
			setShake('');
		}, 500);
	}

	useEffect(() => {
		socket.on('queue', (context) => {
			console.log(context, 'search');
			if (context.data) {
				setIsInSearch(true);
			} else {
				setIsInSearch(false);
			}
		});

		return () => {
			socket.off('queue');
		};
	}, [socket]);


	useEffect(() => {
		if (partyData) {
			if (partyData.status === partyStatuses.QUEUE) {
				setIsInSearch(true);
			} else {
				setIsInSearch(false);
			}
		}
	}, [partyData])

	return (
		<div className="search">
			<button className={(isInSearch ? 'red ' : ' ') + shake} onClick={() => joinQueue()}>
				<Play />
			</button>
		</div>
	);
}
