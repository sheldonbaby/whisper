import http from './http'

export default {
	login(params) {
		return http.post('/user/login', params)
	},
	regist(params) {
		return http.post('/user/regist', params)
	}
}