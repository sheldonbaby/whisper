/*
 * @Author: sheldon 
 * @Date: 2019-12-27 17:30:55 
 * @Last Modified by: sheldon
 * @Last Modified time: 2019-12-27 17:35:10
 */
const express = require('express')
const app = express()

app.use('/', (req,res)=> {
	res.send('test')
})

app.listen(3000, () => {
	console.log('start')
})