import React, { useEffect, useContext, useState } from 'react';
import SocketContext from '../../context/SocketContext';
import Invite from '../Invite/Invite';
import FriendReq from '../FriendReq/FriendReq';

export default function Notifications() {
	const { socket } = useContext(SocketContext);
	const [notifications, setNotifications] = useState([]);

	function destoryNotification(index) {
		setNotifications((nots) => {
			nots.splice(index, 1);
			return nots;
		});
	}

	useEffect(() => {
		socket.on('notification', (notification) => {
			switch (notification.type) {
				case 'invite':
					setNotifications((notifications) => {
						return [
							...notifications,
							<Invite
								invite={notification.data}
								destroy={() =>
									destoryNotification(notifications.length)
								}
							/>,
						];
					});
					break;
				case 'friend req':
					setNotifications((notifications) => {
						return [
							...notifications,
							<FriendReq
								from={notification.data}
								destroy={() =>
									destoryNotification(notifications.length)
								}
							/>,
						];
                    });
                    break;
				default:
					break;
			}
		});
	}, [socket]);

	return <div className="notifications">{notifications}</div>;
}
