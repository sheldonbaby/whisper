<template>
	<!-- 主页主体部分 -->
    <div class="mainPage">
        <div class="mainLeft">
			<div class="leftContent">
				<router-view></router-view>
			</div>
			<div class="leftfoot">
				<ul>
					<li v-for='(item,idx) in footer' :key='idx'>
						<router-link :to='item.link' :class="{active: $route.path.indexOf(item.link) > -1}">
							<i class="iconfont" :class='!~$route.path.indexOf(item.link) ? item.class : item.activeClass'></i>
							<p>{{item.name}}</p>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<div class="mainRight"></div>
    </div>
</template>

<script>

export default {
	components: {
		// panelHeader,
	},
	data() {
		return {
			footer: [
				{
					name: '好友',
					class: 'icon-people',
					activeClass: 'icon-people_fill',
					id: 2,
					link: '/home/mainPage/friends'
				},
				{
					name: '群聊',
					class: 'icon-group',
					activeClass: 'icon-group_fill',
					id: 3,
					link: '/home/mainPage/group'
				}
			]
		}
	}	
}
</script>

<style lang="scss" scoped>
.mainPage {
	width: calc(100% - 80px);
	height: calc(100% - 80px);
	padding: 30px;
	margin-left: 10px;
}
.mainLeft {
	width: 28%;
	min-width: 300px;
	max-width: 320px;
	height: 100%;
	min-height: 600px;
	border: 1px solid #e2e1e1;
	box-shadow: 1px 1px 2px #dbdbdb;
	border-radius: 4px;
	position: relative;
	.leftContent {
		width: 100%;
		height: calc(100% - 54px);
	}
	.leftfoot {
		position: absolute;
		bottom: 0;
		left: 0;
		height: 54px;
		border-top: 1px solid #e2e1e1;
		width: 100%;
		ul {
			width: 100%;
			height: 100%;
			display: flex;
			li {
				width: 50%;
				height: 100%;
				text-align: center;
				font-size: 14px;
				padding: 5px;
				box-sizing: border-box;
				a {
					color: #a7a6a6;
				}
				a.active {
					color: #89cece;
				}
				i {
					font-size: 22px;
				}
			}
		}
	}
}
</style>