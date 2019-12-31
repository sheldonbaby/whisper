//生成官方账户，首次启动运行
// const mongoose = require('../db/connect')
const { users } = require('../db/model/baseModel')

const initUser = (callback) => {
	let user = new users({
		name: 'whisper',
        pass: '111111',
        // photo: '/img/vchat.png',
        signature: 'whisper团队',
        nickname: 'whisper官方推送',
        code: 666666
	})
	user.save()
	.then((doc) => {
		console.log(doc)
	})
}

module.exports = { initUser }