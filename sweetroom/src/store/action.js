import api from '../api'
export default {
    getUserInfo({commit},that) {
        api.getUserInfo()
        .then((data) => {
            if(data.code === 0) {
				commit('setUser', data.info)
				if(that) {
					that.$router.replace({name: 'home'})
				}
            }else {
                commit('setUser', '')
            }
        })
    }
}