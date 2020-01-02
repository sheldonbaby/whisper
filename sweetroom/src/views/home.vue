<template>
	<div class="home">
		<w-header></w-header>
		<div class="w-content">
			<ul class="w-nav">
				<li v-for='(item,idx) in nav' :key="idx">
					<i class="iconfont" :class="[item.class]"></i>
                    <p>{{item.name}}</p>
				</li>
			</ul>
			<div class="w-sub"></div>
		</div>
	</div>
</template>

<script>
import wHeader from '../components/wHeader'
export default {
	name: 'home',
	components: {
		wHeader,
	},
	data() {
		return {
			nav: [
				{
					name: '主页',
					class: 'icon-daohangshouye',
					activeClass: 'icon-group_fill',
					id: 3,
					link: 'personalMain'
				},
				{
					name: '应用空间',
					class: 'icon-yingyong',
					activeClass: 'icon-people_fill',
					id: 2,
					link: 'application'
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.home {
	width: 100%;
	height: 100%;
}
.w-content {
	width: 100%;
	height: calc(100% - 80px);
	display: flex;
	justify-content: flex-start;
	.w-nav {
		width: 120px;
		height: 100%;
		text-align: center;
		font-size: 20px;
		box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.1);
		li {
			cursor: pointer;
			color: rgb(206, 204, 204);
			padding: 14px;
			i {
				font-size: 32px;
				margin-bottom: 5px;
			}
			p {
				font-size: 12px;
			}
		}
	}
	.w-sub {
		width: calc(100% - 120px);
		min-height: 600px;
	}
}
</style>