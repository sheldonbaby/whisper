const mongoose = require('mongoose')

mongoose.set('useCreateIndex', true) 
mongoose.set('useFindAndModify', false)
mongoose.connect('mongodb://localhost/whisper', { useNewUrlParser: true, useUnifiedTopology: true})

var db = mongoose.connection
db.on('error', console.error.bind(console, 'error:'))
db.once('open', () => {
	console.log('db ok')
})

module.exports = mongoose