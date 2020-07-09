import TokenService from '../TokenService/TokenService';
import querystring from 'querystring';

export default class FetchService {
	/**
	 * @param {String} url
	 * @param {*} params
	 * @param {*} headers
	 */
	static async get(url, params = {}, headers = {}) {
		let paramsStringified = '?';

		paramsStringified += querystring.stringify(params);

		const res = await fetch(url + paramsStringified, {
			method: 'GET',
			headers: {
				Authorization: 'Bearer ' + TokenService.getAccessToken(),
				creditionals: 'include',
				...headers,
			},
		});

		return {
			...res,
			body: await res.json(),
		};
	}
	/**
	 *
	 * @param {String} url
	 * @param {*} body
	 * @param {*} params
	 * @param {*} headers
	 */
	static async post(url, body = {}, params = {}, headers = {}) {
		const res = await fetch(url + `?${querystring.stringify(params)}`, {
			method: 'POST',
			headers: {
				Authorization: 'Bearer ' + TokenService.getAccessToken(),
				'Content-type': 'application/json',
				...headers,
			},
			body: JSON.stringify(body),
		});

		return {
			...res,
			body: await res.json(),
		};
	}

	static async postFromData(url, formData, headers = {}) {
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				Authorization: 'Bearer ' + TokenService.getAccessToken(),
				...headers,
			},
			body: formData,
		});
		console.log(await res.text());
		return {
			...res,
			body: await res.json(),
		};
	}
}
