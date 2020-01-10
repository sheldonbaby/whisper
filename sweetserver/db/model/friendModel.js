const mongoose = require('../connect')

let friendSchema = mongoose.Schema({
	userM: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
	},
	userY: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
	},
	createDate: {type: Date, default: Date.now()}
})