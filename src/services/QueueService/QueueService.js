import { joinQueueUrl, leaveQueueUrl } from "../../urls/queueUrls";
import TokenService from "../TokenService/TokenService";
import JwtErrorService from "../JwtErrorService/JwtErrorService";

class QueueService {
    static async JoinQueue() {
        const res = await fetch(joinQueueUrl, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + TokenService.getAccessToken(),
                'Content-type': 'application/json'
            },
            // body: JSON.stringify({
            //     access_token: TokenService.getAccessToken()
            // })
        })
        const body = await res.json();
        console.log(body, 'join queue');

        if (body.err) {
            return false;
        } else {
            return true;
        }
    }

    static async LeaveQueue() {
        const res = await fetch(leaveQueueUrl, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + TokenService.getAccessToken(),
                'Content-type': 'application/json'
            }
        })
        const body = await res.json();
        console.log(body, 'leave queue');

        if (body.err) {
            return false;
        } else {
            return true;
        }
    }
}

export default QueueService;