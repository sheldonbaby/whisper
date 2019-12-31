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
					resolve({code:0, data: { name: params.name}})
				}else {
					resolve({code: -1})
				}
			}else {
				resolve({code: -2})
			}
		})
		.catch(err => reject({code: -3,data: err}))
	})
}

module.exports = {
	regist,
	login
}