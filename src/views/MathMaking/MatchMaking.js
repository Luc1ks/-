import React, { useContext, useState, useEffect } from 'react';
import SocketContext from '../../context/SocketContext';
import './MathcMaking.scss';
import ProfileData from '../../components/ProfileData/ProfileData';
import Party from '../../components/Party/Party';
import Search from '../../components/Search/Search';
import Invites from '../../components/Invites/Invites';

export default function MatchMaking() {
	const { socket } = useContext(SocketContext);

	return (
        <div className="matchMaking">
            <Invites />
            <ProfileData />
            <Search />
            <Party />
        </div>
    );
}
