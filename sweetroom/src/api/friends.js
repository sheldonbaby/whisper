import http from './http'

export default {
	getFriendList(params) {
		return http.post('/v/friend/getFriendList',params)
	}
}