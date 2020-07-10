import { profileUrl } from '../../urls/profileUrls';
import FetchService from '../FetchService/FetchService';
import baseUrl from '../../urls/baseUrl';
import TokenService from '../TokenService/TokenService';

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

	static async EditProfile(oldPassword, newPassword, so2_nickname, so2_id, avatar, banner) {
		const formData = new FormData();
		formData.append('oldPassword', oldPassword);
		formData.append('newPassword', newPassword);
		formData.append('so2_nickname', so2_nickname);
		formData.append('so_id', so2_id);
		formData.append('avatar', avatar);
		formData.append('banner', banner);

		const res = await fetch(baseUrl + '/api/profile/edit', {
			method: 'POST',
			headers: {
				Authorization: 'Bearer ' + TokenService.getAccessToken(),
			},
			body: formData
		});

		const body = await res.json();

		return body;
	}
}
