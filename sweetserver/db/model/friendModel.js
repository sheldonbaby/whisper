const mongoose = require('../connect')

let friendSchema = mongoose.Schema({
	userM: {
		type: mongoose.Schema.Types.ObjectId,	//objectId 数组类型
		ref: 'users'	//ref 选项告诉 Mongoose 在使用populate()填充的时候使用哪个 model.所有储存在userM中的 _id 都必须是Users model中document的 _id。
	},
	userY: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
	},
	createDate: {type: Date, default: Date.now()}
})

friendSchema.statics = {
	findFriendByUserM(userId, callback) {
		//populate填充的字段已经不是原来的_id,而是被指定的 document 代替.refs 数组返回存储对应 _id 的 document 数组
		return this.find({userM: userId}).populate({path: 'userY', select: 'signature photo nickname'}).exec(callback)	
	},
	findFriendByUserY(userId, callback) {
		return this.find({userY: userId}).populate({path: 'userM', select: 'signature photo nickname'}).exec(callback)
	}
}

let friends = mongoose.model('friends', friendSchema)	//创建Model

//获取好友列表
const getFriendList = (params,callback) => {
	friends.findFriendByUserM().then(userM => {
		friends.findFriendByUserY().then(userY => {
			let data = []
			userM.forEach(v => {
				data.push({
					createDate: v.createDate,
                    nickname: v.userY.nickname,
                    photo: v.userY.photo,
                    signature: v.userY.signature,
                    id: v.userY._id,
                    roomid: params.userId + '-' + v.userY._id
				})
			})
			userY.forEach(v => {
				data.push({
					createDate: v.createDate,
                    nickname: v.userY.nickname,
                    photo: v.userY.photo,
                    signature: v.userY.signature,
                    id: v.userY._id,
                    roomid: params.userId + '-' + v.userY._id
				})
			})

			callback({code:0,data})
		})
	})
}

module.exports = {
	getFriendList
}
