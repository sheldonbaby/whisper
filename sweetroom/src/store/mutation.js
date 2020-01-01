export default {
	setUser(state,payload) {
        if(payload === 'out') {
            state.user = {}
        }else {
            state.user = Object.assign({},state.user,payload)
        }
	}
}