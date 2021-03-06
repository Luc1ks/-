import React, { useRef, useEffect, useState, useContext, useCallback } from 'react';

import './Chat.scss';
import Overlay from '../Overlay/Overlay';
import SocketContext from '../../context/SocketContext';
import GameService from '../../services/GameService/GameService';
import { v4 as uuid } from 'uuid';

export default function Chat({ profile, setShow, show }) {
	const inpRef = useRef();
	const messagesEndRef = useRef();
	const [msg, setMsg] = useState('');
	const [msgs, setMsgs] = useState([]);
	const { socket } = useContext(SocketContext);

	const scrollToBottom = useCallback(() => {
		if (show) {
			setTimeout(() => {
				//@ts-ignore
				messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
			}, 100);
		}
	}, [show]);

	const sendMsg = useCallback(() => {
		if (msg.length > 1) {
			socket.emit('message', {
				type: 'game',
				data: {
					content: msg,
				},
			});
			setMsg('');
			//@ts-ignore
			inpRef.current.textContent = '';
			scrollToBottom();
		}
	}, [socket, msg, scrollToBottom]);

	useEffect(() => {
		scrollToBottom();
	}, [scrollToBottom]);

	useEffect(() => {
		socket.on('message', (context) => {
			console.log(context);
			setMsgs((prevState) => {
				const msgs = [...prevState];
				msgs.push(context.data);
				return msgs;
			});
			setTimeout(() => {
				scrollToBottom();
			}, 200);
		});
	}, [socket]);

	useEffect(() => {
		GameService.getGameMsgs().then((msgs) => {
			if (msgs) {
				setMsgs(msgs);
			}
		});
	}, []);

	return (
		<Overlay show={show}>
			<div className="chat">
				<div className="exit" onClick={() => setShow(false)}>
					Выйти
				</div>
				<div className="msgs">
					{msgs.map((msg) => {
						return (
							<div key={uuid()} className={msg.author === profile.username ? 'msg my' : 'msg'}>
								<div className="from">{msg.author}</div>
								<div className="content">{msg.content}</div>
							</div>
						);
					})}
					<div className="end" ref={messagesEndRef}></div>
				</div>
				<div className="controls">
					<div
						ref={inpRef}
						contentEditable={true}
						role="textbox"
						onInput={(e) => setMsg(e.currentTarget.textContent)}
						onKeyDown={(e) => {
							if (e.keyCode === 13) {
								sendMsg();
							}
						}}
						className="msgInput"
					></div>
					<div className="send" onClick={() => sendMsg()}>
						►
					</div>
				</div>
			</div>
		</Overlay>
	);
}
