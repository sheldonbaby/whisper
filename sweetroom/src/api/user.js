import http from './http'

export default {
	login(params) {
		return http.post('/v/user/login', params)
	},
	regist(params) {
		return http.post('/v/user/regist', params)
    },
    getUserInfo(params) {
        return http.post('/v/user/getUserInfo', params)
	},
	getWhisperInfo() {
		return http.post('/v/user/getWhisperInfo')
	}
}