import axios from 'axios'

const instance = axios.create({
    baseURL: '/'
    // baseURL: 'http://127.0.0.1:3003',
    // withCredentials: true
})

// http.interceptors.response.use(
// 	(response) => {
// 		return response
// 	},
// 	error => Promise.reject(error)
// )

export default {
	get(url,params) {
		return new Promise((resolve, reject) => {
			instance.get(url,params)
			.then(({data}) => resolve(data)) 
			.catch(err => reject(err))
		})
	},
	post(url,params) {
		return new Promise((resolve, reject) => {
			instance.post(url,params)
			.then(({data}) => resolve(data)) 
			.catch(err => reject(err))
		})
	}
}