import React, { useContext, useState, useEffect } from 'react'
import SocketContext from '../../context/SocketContext'
import { CancelBtn, SubmitBtn } from '../btns/btns';
import InviteService from '../../services/PartyService/PartyService';

export default function Invites() {
    const {socket} = useContext(SocketContext);
    const [invites, setInvites] = useState([]);

    useEffect(() => {
        socket.on('invite', invite => {
            setInvites(invites => {
                return [...invites, invite.from];
            })
        })
        return () => {
            socket.off('invite')
        }
    }, [socket])

    function cancel(from) {
        setInvites((invites) => {
            return invites.filter(inv => from !== inv);
        })
    }

    function accept(from) {
        setInvites((invites) => {
            return invites.filter(inv => from !== inv);
        })

        InviteService.acceptInvite(from);
    }

    return (
        <div className="invites">
            {
                invites.map(invite => {
                    return (
                        <div className="invite">
                            <p>Инвайт от {invite}</p>
                            <div className="controls">
                                <CancelBtn onClick={() => cancel(invite)}>Отмена</CancelBtn>
                                <SubmitBtn onClick={() => accept(invite)}>Принять</SubmitBtn>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}