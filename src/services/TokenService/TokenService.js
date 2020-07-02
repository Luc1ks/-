class TokenService {
    static getRefreshToken() {
        return localStorage.getItem('refreshToken')
    }

    static getAccessToken() {
        return localStorage.getItem('accessToken')
    }

    static setRefreshToken(token) {
        return localStorage.setItem('refreshToken', token);
    }

    static setAccessToken(token) {
        return localStorage.setItem('accessToken', token);
    }

    static clear() {
        localStorage.clear();
    }
}

export default TokenService;