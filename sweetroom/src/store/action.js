import api from '../api'
export default {
    getUserInfo({commit}) {
        api.getUserInfo()
        .then((data) => {
            if(data.code === 0) {
                commit('setUser', data.info)
            }else {
                commit('setUser', '')
            }
        })
    }
}