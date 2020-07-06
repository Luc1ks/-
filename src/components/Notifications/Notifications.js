import React, { useEffect, useContext, useState } from 'react';
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
			setNotifications((prevState) => {
				const nots = [...prevState];
				nots.splice(index, 1);
				return nots;
			});
		};
		if (socket) {
			socket.on('notification', (notification) => {
				console.log(notification);
				switch (notification.type) {
					case 'party/invite':
						setNotifications((notifications) => {
							return [
								...notifications,
								<Invite
									invite={notification.data.id}
									from={notification.data.players[0].username}
									key={uuid()}
									destroy={() => destroy(notifications.length)}
								/>,
							];
						});
						break;
					case 'friends/add':
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
		}

		return () => {
			if (socket) {
				socket.off('notification');
			}
		};
	}, [socket]);

	return <div className="notifications">{notifications}</div>;
}
