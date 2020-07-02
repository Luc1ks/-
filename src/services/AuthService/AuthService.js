import { signupUrl, signinUrl, authorizeUrl } from '../../urls/authUrls';
import io from 'socket.io-client';
import socketUrl from '../../urls/socketUrl';

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
				refreshToken: body.refreshToken,
				accessToken: body.accessToken,
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
				}
			})
			const body = await res.json();
			console.log(body, 'authorize');
	
			if (body.err && body.err.name === 'jwt expired') {
				const result = await AuthService.refreshAccessToken(refreshToken);
				if (result.err) {
					return false
				} else {
					const socket = io.connect(socketUrl, {
						query: {
							token: accessToken
						}
					});
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
        const res = await fetch(signinUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				refreshToken: refreshToken
			}),
		});

        const body = await res.json();
		console.log(body);
		
		if (body.err) {
			return {
				err: body.err
			} 
		} else {
			return {
				accessToken: body.accessToken
			}
		}
    }
}

export default AuthService;
