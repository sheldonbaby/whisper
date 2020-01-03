export default {
	setUser(state,payload) {
        if(payload === 'out') {
            state.user = {}
        }else {
            state.user = Object.assign({},state.user,payload)
        }
	},
	setConversationsList(state,payload) {
		if(Array.isArray(payload)) {	//用户登录时新建	
			state.conversationsList = payload
		}else {
			const arr = state.conversationsList.filter(item => item.id === payload.id)
			if(arr.length === 0) {	//添加
				state.conversationsList.push(payload)
			}else {		//删除
				state.conversationsList = state.conversationsList.filter(item => item.id !== payload.id)
			}
		}
	},
	setWhisper(state,payload) {
		const id = state.user.id + '-' + payload.id
		state.whisper = {
			...payload,
			id,
			type: 'whisper'
		}
	}
}