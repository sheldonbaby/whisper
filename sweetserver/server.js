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
// const cors = require('cors')	//跨域
const session = require('express-session')      //设置 session

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
//后端解决跨域，获取不到session,开发环境暂时前端配置代理
// app.use(cors())
app.use(session({
	secret: 'ce',
	cookie: {maxAge: 60*1000*30},
	resave: false,
	saveUninitialized: true
}))

app.use('/v/user', user)

app.listen(3003, () => {
	console.log('start')
})