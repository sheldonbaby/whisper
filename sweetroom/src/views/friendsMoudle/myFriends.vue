<template>
	<div>
		<panel-header title='我的好友'>
			<template v-slot>
				<el-dropdown trigger="click">
					<span>
						<i class="el-icon-tickets"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>添加好友</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</template>
		</panel-header>
		<div class="friendWrap">
			<div class="myself">
				<img :src="avatar" alt="">
				<div>
					<b>{{user.name}} 
						<span> ({{user.nickname}}) </span>
					</b>
					<!-- <span>reggie(xxxxx)</span> -->
					<i class="el-icon-arrow-right"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import panelHeader from '../../components/panelHeader'
import { mapState } from 'vuex'

export default {
	components: {
		panelHeader
	},
	computed: {
		...mapState(['user','conversationsList']),
		avatar() {
			return 'http://localhost:3003' + this.$store.state.user.photo
		}
	},
}
</script>

<style lang="scss" scoped>
.el-icon-tickets {
	font-size: 20px;
	color: white;
	cursor: pointer;
}
.el-dropdown-menu__item:hover {
	background: #e9f8f8;
	color: #97d6d6;
}
// .el-icon-arrow-right {
// 	cursor: pointer;
// }
.friendWrap {
	width: 100%;
	.myself {
		width: 100%;
		height: 60px;
		display: flex;
		padding: 10px;
		box-sizing: border-box;
		justify-content: space-between;
		align-items: center;
		img {
			width: 40px;
			height: 40px;
			border-radius: 50%;
		}
		div {
			width: 80%;
			display: flex;
			justify-content: space-between;
			color: rgb(129, 128, 128);
			cursor: pointer;
			span {
				font-weight: normal;
				font-size: 14px;
			}
		}

	}
}
</style>