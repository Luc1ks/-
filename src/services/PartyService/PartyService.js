import { inviteToPartyUrl, acceptInviteUrl, leavePartyUrl } from "../../urls/partyUrls";
import TokenService from "../TokenService/TokenService";
import JwtErrorService from "../JwtErrorService/JwtErrorService";

export default class PartyService {
    static async sendInvite(username) {
        const res = await fetch(inviteToPartyUrl, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + TokenService.getAccessToken(),
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                access_token: TokenService.getAccessToken(),
                targetName: username
            })
        })
        const body = await res.json();
        console.log(body, 'send invite');

        if (body.err) {
            const token = JwtErrorService.refreshByErr(body.err);
            if (token) this.sendInvite(username);
        } else {
            return true;
        }
    }

    static async acceptInvite(from) {
        const res = await fetch(acceptInviteUrl, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + TokenService.getAccessToken(),
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                access_token: TokenService.getAccessToken(),
                from: from
            })
        })
        const body = await res.json();
        console.log(body, 'accept invite');

        if (body.err) {
            const token = JwtErrorService.refreshByErr(body.err);
            if (token) this.acceptInvite(from);
        } else {
            return true;
        }
    }

    static async leaveParty() {
        const res = await fetch(leavePartyUrl, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + TokenService.getAccessToken(),
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                access_token: TokenService.getAccessToken()
            })
        })
        const body = await res.json();
        console.log(body, 'leave party');

        if (body.err) {
            const token = JwtErrorService.refreshByErr(body.err);
            if (token) this.leaveParty();
        } else {
            return true;
        }
    }
}