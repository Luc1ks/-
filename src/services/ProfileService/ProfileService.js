import { profileUrl } from '../../urls/profileUrls';
import TokenService from '../TokenService/TokenService';
import JwtErrorService from '../JwtErrorService/JwtErrorService';

export default class ProfileService {
	static async GetProfie() {
		const res = await fetch(profileUrl, {
			method: 'POST',
			headers: {
				Authorization: 'Bearer ' + TokenService.getAccessToken(),
            },
            body: JSON.stringify({
                access_token: TokenService.getAccessToken()
            })
        });
        
        const body = await res.json();
        console.log(body, 'get profile');

        if (body.err) {
            const result = await JwtErrorService.refreshByErr(body.err);
            if (result) {
                this.GetProfie();
            } else {
                return false;
            }
        } else {
            return body.user;
        }
	}
}
