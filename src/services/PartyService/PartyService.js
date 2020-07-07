import { inviteToPartyUrl, acceptInviteUrl, leavePartyUrl, getPartyUrl, rejectInviteUrl } from "../../urls/partyUrls";
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
                username: username
            })
        })
        const body = await res.json();
        console.log(body, 'send invite');

        if (body.err) {
            console.error(body.err)
        } else {
            return true;
        }
    }

    static async acceptInvite(id) {
        console.log(id)
        const res = await fetch(acceptInviteUrl, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + TokenService.getAccessToken(),
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                access_token: TokenService.getAccessToken(),
                id: id
            })
        })
        const body = await res.json();
        console.log(body, 'accept invite');

        if (body.err) {
           console.error(body.err)
        } else {
            return true;
        }
    }

    static async rejectInvite(id) {
        console.log(id);

        const res = await fetch(rejectInviteUrl, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + TokenService.getAccessToken(),
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
        });

        const body = await res.json();
        console.log(body, 'reject invite');

        if (body.err) {
           console.error(body.err)
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

    static async getParty() {
        const res = await fetch(getPartyUrl, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + TokenService.getAccessToken(),
            }
        });

        const body = await res.json();
        console.log(body, 'gett party');

        if (body.err) {
            console.error(body.err)
        } else {
            return body.data;
        }
    }
}