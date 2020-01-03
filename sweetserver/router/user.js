const express = require('express')
const router = express.Router()
const User = require('../db/model/userModel')

router.post('/regist', (req,res) => {
	const params = req.body
	//callback实现
	/*
	User.regist(params, (data) => {
		if(data.code === 1) {
			res.json({
                code : 1,
                data : '账号已存在'
            })
		}
	})
	*/

	User.regist(params)
	.then(data => {
		if(data.code === 1) {
			res.json({
                code : 1,
                data : '账号已存在'
            })
		}else {
			res.json(data)
		}
	})
	.catch(err => {
		res.json({
			code: -1,
			data: '出错了,注册失败'
		})
	})
})

router.post('/login', (req,res) => {
	const params = req.body
	User.login(params)
	.then(data => {
		if(data.code === 0) {
            req.session.name = data.data.name
			res.json(data)
		}else {
			res.json({
                code : data.code,
                data : '用户名或密码错误'
            })
		}
	})
	.catch(err => {
		res.json(err)
	})
})

router.post('/getUserInfo', (req,res) => {
    let params = req.body
    let obj = {
        ...params
    }
    if(!params.id) {
       obj.name = req.session.name
    }
	User.getUserInfo(obj)
	.then(data => res.json(data))
	.catch(err => {
		res.send(err)
	})
})

router.post('/getWhisperInfo', (req,res) => {
	User.getWhisperInfo()
	.then(data => res.json(data))
	.catch(err => res.send(err))
})

module.exports = router