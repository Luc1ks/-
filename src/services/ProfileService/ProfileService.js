import { profileUrl } from '../../urls/profileUrls';
import TokenService from '../TokenService/TokenService';
import JwtErrorService from '../JwtErrorService/JwtErrorService';

export default class ProfileService {
	static async GetOwnProfie() {
		const res = await fetch(profileUrl, {
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + TokenService.getAccessToken(),
            }
        });
        
        const body = await res.json();
        console.log(body, 'get profile');

        if (body.err) {
            const result = await JwtErrorService.refreshByErr(body.err);
            if (result) {
                this.GetOwnProfie();
            } else {
                return false;
            }
        } else {
            return body.user;
        }
    }
    
    static async GetProfileByUsername(username) {
		const res = await fetch(profileUrl + username, {
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + TokenService.getAccessToken(),
            }
        });
        
        const body = await res.json();
        console.log(body, 'get profile by username');

        if (body.err) {
            const result = await JwtErrorService.refreshByErr(body.err);
            if (result) {
                this.GetProfileByUsername(username);
            } else {
                return false;
            }
        } else {
            return body.user;
        }
	}
}
