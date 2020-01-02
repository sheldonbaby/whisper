<template>
	<header class="wheader">
		<div class="w-logo">Whisper</div>
		<div class="w-mine">
			<div class='w-mesg' v-popover:popmsg>
				<el-badge :value="value" :max="99" class='badge'>
					消息
				</el-badge>
				<el-popover
					trigger="hover"
					width='20'
					ref='popmsg'
					placement="bottom-start"
				>
					<ul>
						<li>会话列表</li>
					</ul>
				</el-popover>
			</div>
			<div class='w-photo' v-popover:popphoto>
				<img class='avatar' src="../assets/3.jpg" alt="">
				<el-popover
					trigger="hover"
					width='20'
					ref='popphoto'
					placement="bottom-start"
				>
					<ul>
						<li>个人空间</li>
					</ul>
				</el-popover>
			</div>
			<div class="w-account">
				<p>whisper8899806
					<span class='logout'>[退出]</span>
				</p>
				<!-- <p>
						{{user.nickname}}
						<span class='logout'>[退出]</span>
					</p> -->
				<div class='signature'>
					个性签名: {{user.signature}}
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'wHeader',
	data() {
		return {
			value: 20,
			handleList: [
				{
					name: '个人空间',
					icon: 'icon-zhanghaoguanli1',
					link: '/mine'
				},
				{
					name: '日程管理',
					icon: 'icon-huihuajilu',
					link: '/todo'
				},
				{
					name: '设置',
					icon: 'icon-shezhi1',
					link: '/mySetting'
				}
			],
		}
	},
	computed: {
		...mapState(['user'])
	}
}
</script>

<style lang="scss" scoped>
.wheader {
	width: 100%;
	height: 80px;
	background: #50aa9e;
	display: flex;
	color: white;
	justify-content: space-between;
}
.w-logo {
	line-height: 80px;
	font-size: 30px;
	margin-left: 4%;
}
.w-mine {
	width: 380px;
	padding: 0 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.w-mesg {
		width: 70px;
		height: 70px;
		border-radius: 3px;
		cursor: pointer;
		.badge {
			font-size: 20px;
			margin: 23px 10px;
		}
	}
	.w-mesg:hover {
		background: white;
		color: #50aa9e;
	}
	.w-photo {
		width: 70px;
		height: 70px;
		border-radius: 3px;
		text-align: center;
		cursor: pointer;
		.avatar {
			width: 60px;
			height: 60px;
			border-radius: 50%;
			margin-top: 5px;
		}
	}
	.w-photo:hover {
		background: white;
	}
	.w-account {
		width: 200px;
		height: 60px;
		p {
			font-size: 17px;
		}
		.logout {
			cursor: pointer;
			margin-left: 2px;
			color: #62f1de;
		}
		.signature {
			font-size: 13px;
		}
	}
}
</style>