const { addFriendUrl, removeFriendUrl } = require("../../urls/friendsUrls");
const { default: TokenService } = require("../TokenService/TokenService");
const { default: JwtErrorService } = require("../JwtErrorService/JwtErrorService");

class UserService {
    static async addFriend(friendId) {
        const res = await fetch(addFriendUrl + `/${friendId}`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' +  TokenService.getAccessToken()
            },
            body: JSON.stringify({
                access_token: TokenService.getAccessToken()
            })
        })

        const body = await res.json();
        console.log(body, 'add friend');

        if (body.err) {
            const result = await JwtErrorService.refreshByErr(body.err);
            if (result) {
                this.addFriend(friendId);
            } else {
                return false;
            }
        } else {
            return true;
        }
    }

    static async removeFriend(friendId) {
        const res = await fetch(removeFriendUrl + `/${friendId}`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + TokenService.getAccessToken()
            },
            body: JSON.stringify({
                access_token: TokenService.getAccessToken()
            })
        })

        const body = await res.json();
        console.log(body, 'remove friend');

        if (body.err) {
            const result = await JwtErrorService.refreshByErr(body.err);
            if (result) {
                this.removeFriend(friendId);
            } else {
                return false;
            }
        } else {
            return true;
        }
    }
}

export default UserService;