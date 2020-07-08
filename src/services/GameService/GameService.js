import FetchService from '../FetchService/FetchService';
import { gameVoteUrl, gameUrl, chatMsgs } from '../../urls/gameUrls';

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
}
