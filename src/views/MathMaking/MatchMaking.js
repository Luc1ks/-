import React, { useContext, useState, useEffect } from 'react';
import SocketContext from '../../context/SocketContext';
import ProfileService from '../../services/ProfileService/ProfileService';
import ProfileData from '../../components/ProfileData/ProfileData';
import Party from '../../components/Party/Party';
import Search from '../../components/Search/Search';

export default function MatchMaking() {
	const { socket } = useContext(SocketContext);

	return (
        <div className="matchMaking">
            <ProfileData />
            <Search />
            <Party />
        </div>
    );
}
