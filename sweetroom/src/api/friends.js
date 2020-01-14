import http from './http'

export default {
	getFriendList(params) {
		return http.post('/v/friends/getFriendList',params)
	}
}