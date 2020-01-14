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
					<i class="el-icon-arrow-right"></i>
				</div>
			</div>
			<div class="myfriend" v-if='friendList.length'>
			<!-- <div class="myfriend"> -->
				<div class="friendTitle" @click='showList'>
					<span>我的好友({{friendList.length}})</span>
					<i class="el-icon-arrow-right"></i>
				</div>
				<ul>
					<li v-for="(item,idx) in friendList" :key='idx'>
						<a href="javascript:;">
                            <img :src="IMG_URL + v.photo" alt="">
                        </a>
                        <div>
                            <!-- <p>
                                <span class="vchat-line1" :title="v.nickname">{{v.nickname}}</span>
                            </p>
                            <p>
                                <span :title="v.signature" class="vchat-line1">{{v.signature}}</span>
                            </p> -->
                        </div>
					</li>
				</ul>
			</div>
			<no-data></no-data>
		</div>
	</div>
</template>

<script>
import panelHeader from '../../components/panelHeader'
import { mapState } from 'vuex'
import api from '../../api'

export default {
	components: {
		panelHeader
	},
	created() {
		this.getFriendList()
	},
	data() {
		return {
			friendList: []
		}
	},
	computed: {
		...mapState(['user','conversationsList']),
		avatar() {
			return 'http://localhost:3003' + this.$store.state.user.photo
		}
	},
	methods: {
		getFriendList() {
			let params = {
				id: this.user.id
			}
			api.getFriendList(params)
				.then(res => {
					if(res.code === 0) {
						this.friendList = res.data
					}
				}
			)
		},
		showList() {

		}
	}
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
		background: url('../../assets/1.jpg');
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
			i {
				margin-top: 2px;
			}
		}

	}
	.myfriend {
		.friendTitle {
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 10px;
			box-sizing: border-box;
			cursor: pointer;
			span {
				font-size: 18px;
				font-weight: bold;
			}
			i {
				color: rgb(129, 128, 128);
			}
		}
	}
}
</style>