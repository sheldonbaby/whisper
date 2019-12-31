const codes = require('./initCode')		//初始化生成号码池号码
const users = require('./initUser')		//初始化生成官方账号

let alphabet = {
	initcode() {
		codes.initCode()
	},
	inituser() {
		users.initUser()
	},
	init() {
		this.initcode()
		this.inituser()
	}
}

module.exports = alphabet