import FetchService from '../FetchService/FetchService';

const { addFriendUrl, removeFriendUrl, friendListUrl } = require('../../urls/friendsUrls');
const { default: JwtErrorService } = require('../JwtErrorService/JwtErrorService');

class FriendsService {
	static async addFriend(friendName) {
		const res = await FetchService.post(addFriendUrl, {
			username: friendName,
		});

		const body = res.body;
		console.log(body, 'add friend');

		if (body.err) {
			const result = await JwtErrorService.refreshByErr(body.err);
			if (result) {
				this.addFriend(friendName);
			} else {
				return false;
			}
		} else {
			return true;
		}
	}

	static async removeFriend(friendId) {
		const res = await FetchService.post(removeFriendUrl, {
			id: friendId,
		});

		const body = res.body;
		console.log(body, 'remove friend');

		if (body.err) {
			console.error(body.err);
			return false;
		} else {
			return true;
		}
	}

	static async getFriends() {
		const res = await FetchService.get(friendListUrl);

		const body = res.body;
		console.log(body, 'get friends');

		if (body.err) {
			console.error(body.err);
			return false;
		} else {
			return body;
		}
	}
}

export default FriendsService;
