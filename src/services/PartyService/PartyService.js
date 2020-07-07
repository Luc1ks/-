import {
	inviteToPartyUrl,
	acceptInviteUrl,
	leavePartyUrl,
	getPartyUrl,
	rejectInviteUrl,
	kickFromPartyUrl,
} from '../../urls/partyUrls';
import TokenService from '../TokenService/TokenService';
import FetchService from '../FetchService/FetchService';

export default class PartyService {
	static async sendInvite(username) {
		const res = await FetchService.post(inviteToPartyUrl, {
			username: username,
		});
		const body = await res.body;
		console.log(body, 'send invite');

		if (body.err) {
			console.error(body.err);
		} else {
			return true;
		}
	}

	static async acceptInvite(id) {
		console.log(id);
		const res = await FetchService.post(acceptInviteUrl, {
			id: id,
		});

		const body = await res.body;
		console.log(body, 'accept invite');

		if (body.err) {
			console.error(body.err);
			return false;
		} else {
			return true;
		}
	}

	static async rejectInvite(id) {
		console.log(id);

		const res = await FetchService.post(rejectInviteUrl, {
			id: id,
		});

		const body = await res.body;
		console.log(body, 'reject invite');

		if (body.err) {
			console.error(body.err);
			return false;
		} else {
			return true;
		}
	}

	static async leaveParty() {
		const res = await FetchService.post(leavePartyUrl);

		const body = await res.body;
		console.log(body, 'leave party');

		if (body.err) {
			console.error(body.err);
			return false;
		} else {
			return true;
		}
	}

	static async kick(username) {
		const res = await FetchService.post(kickFromPartyUrl, {
			username: username,
		});
		console.log(res.body);

		if (res.body.err) {
			console.error(res.body.err);
			return false;
		} else {
			return res.body;
		}
	}

	static async getParty() {
		const res = await fetch(getPartyUrl, {
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + TokenService.getAccessToken(),
			},
		});

		const body = await res.json();
		console.log(body, 'gett party');

		if (body.err) {
			console.error(body.err);
		} else {
			return body.data;
		}
	}
}
