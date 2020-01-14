const express = require('express')
const router = express.Router()
const friends = require('../db/model/friendModel')

router.post('/getFriendList', (req,res) => {
	const params = req.body
	friends.getFriendList(params, r => {
		if(r.code === 0) {
			res.json(r)
		}else {
			res.json({
				code: -1,
				data: '查找失败'
			})
		}
	})
})

module.exports = router