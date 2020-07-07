import { getNotsUrl } from '../../urls/notificationsUrls';
import FetchService from '../FetchService/FetchService';

export default class NotificationsService {
	static async get() {
		const res = await FetchService.get(getNotsUrl);
        
        const body = await res.body;
        console.log(body, 'get notifications')

        if (body.err) {
            console.error(body.err)
            return false;
        } else {
            return body;
        }
	}
}
