//生成随机号码池，首次启动运行
const mongoose = require('../db/connect')
const { codePools } = require('../db/model/baseModel')

const initCode = () => {	
	for(let i=100001; i<100911; i++) {	// 用户code6位
		const code = new codePools({	// 创建model的实例，实例可以保存检索数据库中的文档
			code: i,
			status: '0', // 1 已使用 0 未使用
			special: String,
			type: '1', // 1 用户 2 群聊
			random: Math.random() // (随机数索引，用于随机查找一条)
		})
		code.save((err,doc) => {	// doc是保存的文档对象
			err && console.log(`init code fail: ${err}`)
			console.log(`init code succ`)
		})
	}

	for(let i=1001; i<1911; i++) {	// 群聊code4位
		const code = new codePools({	// 创建model的实例，实例可以保存检索数据库中的文档
			code: i,
			status: '0', // 1 已使用 0 未使用
			special: String,
			type: '2', // 1 用户 2 群聊
			random: Math.random() // (随机数索引，用于随机查找一条)
		})
		code.save((err,doc) => {	// doc是保存的文档对象
			err && console.log(`init code fail: ${err}`)
			console.log(`init code succ: ${doc}`)
		})
	}
}

module.exports = { initCode }