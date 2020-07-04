const { default: AauthService } = require('../AuthService/AuthService');
const { default: TokenService } = require('../TokenService/TokenService');

class JwtErrorService {

	static async refreshByErr(err) {
		if (err.name === 'jwt expired') {
            const result = await AauthService.refreshAccessToken(TokenService.getRefreshToken());
            if (result.err) {
                TokenService.clear();
                return false
            } else {
                TokenService.setAccessToken(result.access_token);
                return result.access_token
            }
		} else {
            return false
        }
    }
    
}

export default JwtErrorService;
