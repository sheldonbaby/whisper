const mongoose = require('mongoose')

mongoose.set('useCreateIndex', true) 
mongoose.set('useFindAndModify', false)		//findOneAndUpdate()使用了MongoDB驱动程序的findAndModify()功能,全局选项选择使用MongoDB驱动程序的功能
mongoose.connect('mongodb://localhost/whisper', { useNewUrlParser: true, useUnifiedTopology: true})

var db = mongoose.connection
db.on('error', console.error.bind(console, 'error:'))
db.once('open', () => {
	console.log('db ok')
})

module.exports = mongoose