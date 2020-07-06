import { getNotsUrl } from '../../urls/notificationsUrls';
import TokenService from '../TokenService/TokenService';

export default class NotificationsService {
	static async get() {
		const res = await fetch(getNotsUrl, {
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + TokenService.getAccessToken(),
			},
        });
        
        const body = await res.json();
        console.log(body, 'get notifications')

        if (body.err) {
            console.error(body.err)
            return false;
        } else {
            return body;
        }
	}
}
