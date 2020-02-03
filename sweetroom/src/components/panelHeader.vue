<template>
	<div class='panelHeader'>
		<i class="el-icon-arrow-left" v-if='back' @click='goBack'></i>
		<span v-if='title' class="title">
			{{title}}
		</span>
		<div class="iconSlot">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: ''
		},
		back: {
			default: ''
		}
	},
	methods: {
		goBack() {
			// this.$router.go(-1);
			this.$router.push(this.back)
		}
	}
}
</script>

<style lang="scss" scoped>
.panelHeader {
	width: 100%;
	height: 42px;
	background: #97d6d6;
	color: white;
	text-align: center;
	font-size: 18px;
	.el-icon-arrow-left {
		float: left;
		line-height: 42px;
		margin-left: 10px;
		cursor: pointer;
	}
	.title {
		line-height: 42px;		
	}
	.iconSlot {
		position: absolute;
		right: 15px;
		top: 12px;
	}
}
</style>