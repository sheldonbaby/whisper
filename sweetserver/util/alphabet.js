const codes = require('./initCode')		//初始化生成号码池号码

let alphabet = {
	initcode() {
		codes.initCode()
	},
	init() {
		this.initcode()
	}
}

module.exports = alphabet