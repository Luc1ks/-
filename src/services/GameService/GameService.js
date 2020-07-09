import FetchService from '../FetchService/FetchService';
import { gameVoteUrl, gameUrl, chatMsgs, cancelVoteUrl, uploadUrl } from '../../urls/gameUrls';

export default class GameService {
	/**
	 *
	 * @param {number} index
	 */
	static async vote(index) {
		console.log(index);
		const res = await FetchService.post(gameVoteUrl, {
			index: index,
		});
		const body = res.body;

		if (body.err) {
			console.error(body.err);
			return false;
		} else {
			return body.data;
		}
	}

	static async GetGame() {
		const res = await FetchService.get(gameUrl);
		const body = res.body;

		if (body.err) {
			console.error(body.err);
			return false;
		} else {
			return body.data;
		}
    }
    
    static async getGameMsgs() {
        const res = await FetchService.get(chatMsgs);
		const body = res.body;

		if (body.err) {
			console.error(body.err);
			return false;
		} else {
			return body.data;
		}
	}
	
	static async CancelationVote() {
		console.log(cancelVoteUrl)
		const res = await FetchService.get(cancelVoteUrl);
		const body = res.body;
		console.log(body)
		if (body.err) {
			console.error(body.err);
			return false;
		} else {
			return body.data;
		}
	}

	static async uploadFile(formData) {
		const res = await FetchService.post(uploadUrl, formData);
		const body = res.body;
		console.log(body);

		if (body.err) {
			console.error(body.err)
			return false;
		} else {
			return true;
		}
	}
}
