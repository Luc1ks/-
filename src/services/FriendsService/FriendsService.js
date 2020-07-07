const { addFriendUrl, removeFriendUrl, friendListUrl } = require("../../urls/friendsUrls");
const { default: TokenService } = require("../TokenService/TokenService");
const { default: JwtErrorService } = require("../JwtErrorService/JwtErrorService");

class FriendsService {
    static async addFriend(friendName) {
        const res = await fetch(addFriendUrl, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' +  TokenService.getAccessToken(),
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                access_token: TokenService.getAccessToken(),
                username: friendName
            })
        })

        const body = await res.json();
        console.log(body, 'add friend');

        if (body.err) {
            const result = await JwtErrorService.refreshByErr(body.err);
            if (result) {
                this.addFriend(friendName);
            } else {
                return false;
            }
        } else {
            return true;
        }
    }

    static async removeFriend(friendId) {
        const res = await fetch(removeFriendUrl, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + TokenService.getAccessToken(),
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id: friendId
            })
        })

        const body = await res.json();
        console.log(body, 'remove friend');

        if (body.err) {
            console.error(body.err);
            return false;
        } else {
            return true;
        }
    }

    static async getFriends() {
        const res = await fetch(friendListUrl, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + TokenService.getAccessToken(),
                // 'Content-type': 'application/json'
            },
            // body: JSON.stringify({
            //     access_token: TokenService.getAccessToken()
            // })
        })

        const body = await res.json();
        console.log(body, 'get friends');

        if (body.err) {
            console.error(body.err);
            return false;
        } else {
            return body;
        }
    }
}

export default FriendsService;