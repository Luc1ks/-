import React, { useEffect, useState } from 'react';
import './MathcMaking.scss';
// import ProfileData from '../../components/ProfileData/ProfileData';
import Party from '../../components/Party/Party';
import Search from '../../components/Search/Search';
import useService from '../../hooks/useService';
import ProfileService from '../../services/ProfileService/ProfileService';
import PreLoader from '../../components/PreLoader/PreLoader';
import PartyService from '../../services/PartyService/PartyService';

export default function MatchMaking() {
	const { request, isLoading } = useService();
	const [profile, setProfile] = useState({
		username: '',
	});
	const [party, setParty] = useState({
		players: [],
	});

	useEffect(() => {
		request(ProfileService.GetOwnProfie, true).then((profileData) => {
            setProfile(profileData);
        });
        request(PartyService.getParty, true).then(paryData => {
            setParty(paryData);
        });
	}, [request]);

	if (isLoading) {
        return (
            <PreLoader />   
        )
	} else {
		return (
			<div className="matchMaking">
				<Party profileData={profile} partyData={party}/>
				{/* <ProfileData profileData={profile}/> */}
				<Search partyData={party}/>
			</div>
		);
	}
}
