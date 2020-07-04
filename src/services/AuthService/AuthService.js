import { signupUrl, signinUrl, authorizeUrl, refreshUrl } from '../../urls/authUrls';
import io from 'socket.io-client';
import socketUrl from '../../urls/socketUrl';
import TokenService from '../TokenService/TokenService';

class AuthService {
	static async singup(username, password, email, so2_nickname, so2_id) {
		const res = await fetch(signupUrl, {
			method: 'POST',
			headers: {
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
		console.log(body.err);

		if (body.err) {
			return {
				err: body.err,
			};
		} else {
			return {
				refreshToken: body.refresh_token,
				accessToken: body.access_token,
			};
		}
	}

	static async signin(username, password) {
		const res = await fetch(signinUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
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
			return {
				refreshToken: body.refreshToken,
				accessToken: body.accessToken,
			};
		}
    }
    
    static async authorize(refreshToken, accessToken) {
		try {
			const res = await fetch(authorizeUrl, {
				method: 'POST',
				headers: {
					'Authorization': 'Bearer ' + accessToken,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					access_token: accessToken
				}),
			})
			const body = await res.json();
 
			if (body && body.err) {
				const result = await AuthService.refreshAccessToken(refreshToken);

				if (result.err) {
					return false
				} else {
					const socket = io.connect(socketUrl, {
						query: {
							token: result.access_token
						}
					});

					TokenService.setRefreshToken(result.access_token);
					TokenService.setAccessToken(result.refresh_token);

					return socket
				}
			} else {
				const socket = io.connect(socketUrl, {
					query: {
						token: accessToken
					}
				});
				return socket
			}
		} catch (err) {
			console.log(err);
			return false;
		}
    }

    static async refreshAccessToken(refreshToken) {
        const res = await fetch(refreshUrl, {
			method: 'POST',
			headers: {
				'Authorization': 'Bearer ' + refreshToken,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				refresh_token: refreshToken
			})
		});

        const body = await res.json();
		
		if (body.err) {
			return {
				err: body.err
			} 
		} else {
			return {
				access_token: body.access_token,
				refresh_token: body.refresh_token,
			}
		}
    }
}

export default AuthService;
