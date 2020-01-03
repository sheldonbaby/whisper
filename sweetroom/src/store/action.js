import api from '../api'
export default {
    getUserInfo({commit,dispatch},that) {
        api.getUserInfo()
        .then(data => {
            if(data.code === 0) {
				commit('setUser', data.info),
				commit('setConversationsList', data.info.conversationsList)
				dispatch('getWhisperInfo')
				if(that) {
					that.$router.replace({name: 'home'})
				}
            }else {
                commit('setUser', '')
            }
        })
	},
	getWhisperInfo({commit,state}) {
		api.getWhisperInfo()
		.then(data => {
			if(data.code === 0) {
				commit('setWhisper', data.info)
				commit('setConversationsList', state.whisper)
			}else {
				console.log('获取官方账号失败')
			}
		})
	}
}