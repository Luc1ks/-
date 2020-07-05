import React, { useEffect, useContext, useState, useCallback, useRef } from 'react';
import SocketContext from '../../context/SocketContext';
import Invite from '../Invite/Invite';
import FriendReq from '../FriendReq/FriendReq';
import { v4 as uuid } from 'uuid';

import './Notifications.scss';

export default function Notifications() {
	const { socket } = useContext(SocketContext);
	const [notifications, setNotifications] = useState([]);

	useEffect(() => {

		const destroy = (index) => {
			setNotifications(prevState => {
				const nots = [...prevState];
				nots.splice(index, 1);
				return nots;
			})
		}

		socket.on('notification', (notification) => {
			console.log(notification);
			switch (notification.type) {
				case 'invite':
					setNotifications((notifications) => {
						console.log(notifications.length);
						return [
							...notifications,
							<Invite
								invite={notification.data.from}
								key={uuid()}
								destroy={() => destroy(notifications.length)}
							/>,
						];
					});
					break;
				case 'friends/request':
					setNotifications((notifications) => {
						return [
							...notifications,
							<FriendReq
								from={notification.data}
								key={uuid()}
								destroy={() => destroy(notifications.length)}
							/>,
						];
					});
					break;
				default:
					break;
			}
		});

		return () => {
			socket.off('notification');
		};
	}, [socket]);

	return <div className="notifications">{notifications}</div>;
}
