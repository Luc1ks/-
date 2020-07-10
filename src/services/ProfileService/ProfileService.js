import { profileUrl } from '../../urls/profileUrls';
import JwtErrorService from '../JwtErrorService/JwtErrorService';
import FetchService from '../FetchService/FetchService';

export default class ProfileService {
	static async GetOwnProfie() {
		const res = await FetchService.get(profileUrl);

		const body = await res.body;
		console.log(body, 'get profile');

		if (body.err) {
			console.error(body.err);
			return false;
		} else {
			return body;
		}
	}

	static async GetProfileByUsername(username) {
		const res = await FetchService.get(profileUrl + `/${username}`);

		const body = res.body;
		console.log(body, 'get profile by username');

		if (body.err) {
			return false;
		} else {
			return body;
		}
	}
}
