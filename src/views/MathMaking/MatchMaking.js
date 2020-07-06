import React from 'react';
import './MathcMaking.scss';
import ProfileData from '../../components/ProfileData/ProfileData';
import Party from '../../components/Party/Party';
import Search from '../../components/Search/Search';

export default function MatchMaking() {
	return (
        <div className="matchMaking">
           
            <ProfileData />
            <Search />
            <Party />
        </div>
    );
}
