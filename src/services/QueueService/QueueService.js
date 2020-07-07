import { joinQueueUrl, leaveQueueUrl } from "../../urls/queueUrls";
import TokenService from "../TokenService/TokenService";
import FetchService from "../FetchService/FetchService";

class QueueService {
    static async JoinQueue() {
        const res = await FetchService.get(joinQueueUrl);

        const body = await res.body;
        console.log(body, 'join queue');

        if (body.err) {
            return false;
        } else {
            return true;
        }
    }

    static async LeaveQueue() {
        const res = await FetchService.get(leaveQueueUrl);
        
        const body = await res.body;
        console.log(body, 'leave queue');

        if (body.err) {
            return false;
        } else {
            return true;
        }
    }
}

export default QueueService;