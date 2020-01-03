const mongoose = require('../connect')
const baseModel = require('./baseModel')

//callback实现
/*
const regist = (params, callback) => {
	baseModel.users.find({name: params.name})
	.then(doc => {
		if(doc.length) {
			callback({code: 1})
		}else {
			baseModel.users.create({name: params.name, pass: params.pass, nickname: 'whisper' + (Date.now()+'').slice(6)})
			.then((doc) => {	//doc是已插入数据库的数据
				console.log(doc)
				if(doc['_id']) {
					callback({code:0})
				}
			})
			.catch(err => console.log(err))
		}
	})
}
*/
//生成用户code
const genCode = () => {
	return new Promise((resolve,reject) => {
		const num = Math.random()
		baseModel.codePools.findOneAndUpdate({status: '0', random: {$gte: num}},{status: '1'},(err,doc) => {
			err && reject(err)
			if(doc) {
				resolve(doc.code)
			}else {
				baseModel.codePools.findOneAndUpdate({status: '0', random: {$lt: num}},{status: '1'},(err,doc) => {
					err && reject(err)
					resolve(doc.code)
				})
			}
		})
	})
}
// promise  用户注册
const regist = (params) => {
	return new Promise((resolve,reject) => {
		baseModel.users.find({name: params.name})
		.then(doc => {
			if(doc.length) {	//已经有该用户
				resolve({code: 1})
			}else {
				genCode()		//生成该用户的code
				.then((code) => {
					baseModel.users.create({name: params.name, pass: params.pass, code, nickname: 'whisper' + (Date.now()+'').slice(6)})	//用户数据插入数据库
					.then((doc) => {	//doc是已插入数据库的文档对象
						if(doc['_id']) {
							resolve({code:0, data: doc.code})
						}
					})
				})
				.catch(err => {
					reject({code:-1,data: err})
				})
			}
		})
		.catch(err => reject({code:-1,data: err}))
	})
}

//用户登录
const login = (params) => {
	return new Promise((resolve,reject) => {
		baseModel.users.find({
			$or: [{"name": params.name}, {"code": params.name}]
		})
		.then((doc) => {
			if(doc.length) {
				let pass = doc[0].pass
				if(pass === params.pass) {
					resolve({code:0, data: { name: doc[0].name}})
				}else {
					resolve({code: -1}) //密码错误
				}
			}else {
				resolve({code: -2}) //没有该用户
			}
		})
		.catch(err => reject({code: -3,data: err}))
	})
}

// 获取用户信息
const getUserInfo = (params) => {
    return new Promise((resolve,reject) => {
        if(params.id) {
            baseModel.users.find({_id: params.id})
            .then()
            .catch()
        }else {
            baseModel.users.find({name: params.name})
            .then(doc => {
                if(doc.length) {
                    const info = {name:doc[0].name, nickname: doc[0].nickname, signature: doc[0].signature, code: doc[0].code, conversationsList: doc[0].conversationsList,province: doc[0].province, city: doc[0].city, town: doc[0].town,photo: doc[0].photo,cover: doc[0].cover,id: doc[0]._id}
                    resolve({
                        code: 0,
                        info,
                    })
                }else {
                    resolve({code:-1})
                }
            })
            .catch(err => {
                console.log(err)
                reject({code:-2})
            })
        }
    })
}

//获取官方账号信息
const getWhisperInfo = () => {
	return new Promise((resolve,reject) => {
		baseModel.users.find({name: 'whisper'})
		.then(doc => {
			if(doc.length) {
				const info = {name: doc[0].name, nickname: doc[0].nickname, signature: doc[0].signature, id: doc[0]._id}
				resolve({code:0,info})
			}else {
				resolve({code:-1})
			}
		})
		.catch(err => reject(err))
	})
}

module.exports = {
	regist,
    login,
	getUserInfo,
	getWhisperInfo
}