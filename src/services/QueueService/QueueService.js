import { joinQueueUrl, leaveQueueUrl } from "../../urls/queueUrls";
import TokenService from "../TokenService/TokenService";
import JwtErrorService from "../JwtErrorService/JwtErrorService";

class QueueService {
    static async JoinQueue() {
        const res = await fetch(joinQueueUrl, {
            headers: {
                'Authorization': 'Bearer ' + TokenService.getAccessToken()
            }
        })
        const body = await res.json();
        console.log(body, 'join queue');

        if (body.err) {
            const token = JwtErrorService.refreshByErr(body.err);
            if (token) QueueService.JoinQueue();
        } else {
            return true;
        }
    }

    static async LeaveQueue() {
        const res = await fetch(leaveQueueUrl, {
            headers: {
                'Authorization': 'Bearer ' + TokenService.getAccessToken()
            }
        })
        const body = await res.json();
        console.log(body, 'leave queue');

        if (body.err) {
            const token = JwtErrorService.refreshByErr(body.err);
            if (token) QueueService.LeaveQueue();
        } else {
            return true;
        }
    }
}

export default QueueService;