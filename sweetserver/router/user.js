const express = require('express')
const router = express.Router()
const User = require('../db/model/userModel')

router.post('/regist', (req,res) => {
	let params = req.body
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
	
})

module.exports = router