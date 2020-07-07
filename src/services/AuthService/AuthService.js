import { signupUrl, signinUrl, refreshUrl } from '../../urls/authUrls';
import io from 'socket.io-client';
import socketUrl from '../../urls/socketUrl';
import TokenService from '../TokenService/TokenService';

class AuthService {
	static async singup(username, password, email, so2_nickname, so2_id) {
		const res = await fetch(signupUrl, {
			method: 'POST',
			headers: {
				'Authorization': 'Bearer ' + TokenService.getAccessToken(),
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: username,
				password: password,
				email: email,
				so2_nickname: so2_nickname,
				so2_id: so2_id,
			}),
		});

		const body = await res.json();
		console.log(body);

		if (body.err) {
			return {
				err: body.err,
			};
		} else {
			console.log(body.access_token);
			TokenService.setAccessToken(body.access_token);
			return {
				refreshToken: body.refresh_token,
				access_token: body.access_token,
			};
		}
	}

	static async signin(username, password) {
		const res = await fetch(signinUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + TokenService.getAccessToken(),
			},
			body: JSON.stringify({
				username: username,
				password: password,
			}),
		});

		const body = await res.json();
		console.log(body);

		if (body.err) {
			return {
				err: body.err,
			};
		} else {
			TokenService.setAccessToken(body.access_token);

			return {
				refreshToken: body.refreshToken,
				accessToken: body.access_token,
			};
		}
	}

	static async authorize() {
		const socket = io.connect(socketUrl, {
			query: {
				token: TokenService.getAccessToken(),
			},
			secure: true,
		});

		return socket;
	}

	static async refreshAccessToken(refreshToken) {
		const res = await fetch(refreshUrl, {
			method: 'POST',
			headers: {
				Authorization: 'Bearer ' + refreshToken,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				refresh_token: refreshToken,
			}),
		});

		const body = await res.json();

		if (body.err) {
			return {
				err: body.err,
			};
		} else {
			return {
				access_token: body.access_token,
				refresh_token: body.refresh_token,
			};
		}
	}
}

export default AuthService;
