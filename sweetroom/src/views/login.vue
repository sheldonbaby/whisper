<template>
	<div class='wrap' v-bgImage='logBg'>
		<div></div>
		<div class="logo" :class='{active: showSign}'>
			<h1>Hi, Whisper..</h1>
			<span @click='showSign=true'>go start !</span>
		</div>
		<div class="sign" v-show='showSign'>
			<div class="title">
				<span :class='{active: islog}' @click='onSwitch(true)'>登录</span>
				<span> | </span>
				<span :class='{active: !islog}' @click='onSwitch(false)'>注册</span>
			</div>
			<div class="body">
				<el-form ref='form' :model="form" :rules='signRules'>
					<el-form-item prop='name'> 
						<el-input placeholder="账号" v-model="form.name">
							<i class="iconfont icon-zhanghao" slot="prepend"></i>
						</el-input>
					</el-form-item>
					<el-form-item prop='pass'>
						<el-input placeholder="密码" v-model="form.pass" type='password'>
							<i class="iconfont icon-mima3" slot="prepend"></i>
						</el-input>
					</el-form-item>
					<el-form-item prop='repass' v-if='!islog'>
						<el-input placeholder="确认密码" v-model="form.repass" type='password'>
							<i class="iconfont icon-mima3" slot="prepend"></i>
						</el-input>
					</el-form-item>
					<!-- <el-form-item>
						<el-input placeholder="验证码">
							<i class="iconfont icon-mima1" slot="prepend"></i>
						</el-input>
					</el-form-item> -->
				</el-form>
				<button @click='enter'>{{ islog? '登录' : '注册'}}</button>
			</div>
		</div>
	</div>
</template>

<script>
import logBg from '../assets/logbg.jpeg'
import api from '../api/index'

export default {
	data() {
		let validateName = (rule,value,callback) => {
			if(value === '') return callback('姓名不能为空')
			else {
				let reg = /^[a-z0-9A-Z_]{2,8}$/
				if(!value.match(reg)) callback(new Error('请输入2-8位数字字母下划线'))
				else callback()
			}
		}
		let validatePass = (rule,value,callback) => {
			if(value === '') return callback('密码不能为空')
			else {
				let reg = /^[a-z0-9A-Z]{6,12}$/
				if(!value.match(reg)) callback(new Error('请输入6-12位数字字母组合'))
				else callback()
			}
		}
		let validateRePass = (rule,value,callback) => {
			if(value === '') return callback('确认密码不能为空')
			else {
				const pass = this.form.pass
				if(pass !== value) callback(new Error('确认密码与密码不相同'))
				else callback()
			}
		}
		return {
			logBg,
			islog: true,
			showSign: false,
			form: {
				name: '',
				pass: '',
				regcode: '',
                repass: ''
			},
			signRules: {
				name: [
					{ validator: validateName, trigger: 'blur' }
				],
				pass: [
					{ validator: validatePass, trigger: 'blur' }
				],
				repass: [
					{ validator: validateRePass, trigger: 'blur' }
				],
				// regcode: [
				// 	{ validator: validateRegcode, trigger: 'blur' }
				// ]
			},
		}
	},
	methods: {
		onSwitch(flag) {
			this.$refs['form'].resetFields()
			this.islog = flag
		},
		enter() {
			this.$refs['form'].validate((valid) => {
				if(!valid) {
					this.$message({
						message: '请填写相关信息',
						type: 'warning'
					});
				}else {
					if(this.islog) this.login()
					else this.regist()
				}
			})
		},
		login() {
			const params = {
				name: this.form.name,
				pass: this.form.pass
			}
			api.login(params)
			.then(data => {
				if(data.code === 0) {
					this.$message({
						message: '登录成功',
						type: 'success'
                    });
                    this.$store.dispatch('getUserInfo')
				}else if(data.code === -1) {
					this.$message({
						message: data.data,
						type: 'success'
					});
				}else {
					this.$message({
						message: '登录失败',
						type: 'error'
					});
				}
			})
		},
		regist() {
			const params = {
				name: this.form.name,
				pass: this.form.pass
			}
			api.regist(params)
			.then(data => {
				if(data.code === 0) {
					this.$notify({
						title: '注册成功',
						message: `您的whisper账号为：${data.data}，您可以凭此登录，祝您生活愉快！`,
						duration: 5000,
						type: 'success'
					});
					this.onSwitch(true)
					this.form.name = data.data
				}else if(data.code === 1) {
					this.$message({
						message: '该账号已经存在，请直接登录',
						type: 'success'
					});
					this.onSwitch(true)
				}else {
					this.$message({
						message: '注册失败',
						type: 'error'
					});
				}
			})
		}	
	}
}
</script>

<style scoped lang='scss'>
.wrap {
	width: 100%;
	height: 100%;
	overflow: hidden;
    position: relative;
}
.logo {
	// margin-top: 20%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-120%);
	transition: 1s;
	color: white;
	h1 {		
		font-size: 45px;
		margin-bottom: 20px;
	}
	span {
		font-size: 28px;
		cursor: pointer;
		animation: flick 1.6s infinite;
	}
	span:hover {
		-webkit-animation-play-state: paused;
		animation-play-state: paused;
	}
}
.logo.active {
	transform: translate(-50%,-250%);
}
@keyframes flick {
	0% {
		opacity: 1;
	}
	50% {
		opacity: .4;
	}
	100% {
		opacity: 1;
	}
}
.sign {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 300px;
	// height: 270px;
	background: white;
	transform: translate(-50%,-50%);
	border-radius: 15px;
	padding: 20px;
	animation: move 1.1s;
	.title {
		padding: 0 80px;
		width: 100%;
		height: 30px;
		box-sizing: border-box;
		line-height: 30px;
		font-size: 18px;
		display: flex;
		justify-content: space-around;
		margin-bottom: 20px;
		span:nth-child(odd) {
			cursor: pointer;
		}
		span:nth-child(2) {
			color: #c5c5c5;
		}
		span.active {
			color: #4dd5a8;
		}
	}
	button {
		width: 300px;
		height: 40px;
		background: #4dd5a8;
		border-radius: 20px;
		border: none;
		color: white;
		font-size: 18px;
		cursor: pointer;
		outline:none;
	}
}
@keyframes move {
	0% {
		left: 0;
	}
	30% {
		left: 50%;
		transform: translate(-50%,-50%);
	}
	45% {
		transform: translate(-47%,-47%)
	}
	60% {
		transform: translate(-53%,-53%)
	}
	75% {
		transform: translate(-48%,-48%)
	}
	90% {
		transform: translate(-52%,-52%)
	}
}
</style>
