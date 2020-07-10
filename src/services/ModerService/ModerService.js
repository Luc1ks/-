import FetchService from '../FetchService/FetchService';
import { unwarnUrl, lobbiesUrl, gameSet } from '../../urls/moderUrls';

export default class ModerService {
	static async unwarn(id) {
		const res = await FetchService.post(unwarnUrl, {
			id: id,
		});

		const body = res.body;
		if (body.err) {
			console.error(body.err);
			return false;
		} else {
			return true;
		}
    }
    
    static async getLobbies() {
        const res = await FetchService.get(lobbiesUrl);
        const body = res.body;
        console.log(body)
        if (body.err) {
            return false
        } else {
            return body.data;
        }
    }

    static async setWinner(lobby, status) {
        const res = await FetchService.post(gameSet, {
            gameId: lobby.id,
            gameState: status
        });

        const body = res.body;
        console.log(body);

        if (body.err) {
            console.error(body.err)
            return false;
        } else {
            return true
        }
    }
}
