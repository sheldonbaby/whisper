/*
 * @Author: sheldon 
 * @Date: 2019-12-27 17:30:55 
 * @Last Modified by: sheldon
 * @Last Modified time: 2019-12-31 13:32:46
 */
const express = require('express')
const app = express()
const db = require('./db/connect')
const user = require('./router/user')
const bodyParser = require('body-parser')	//解析post body
const cors = require('cors')	//跨域

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use('/user', user)

app.listen(3003, () => {
	console.log('start')
})