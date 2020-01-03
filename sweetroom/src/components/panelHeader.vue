<template>
	<div class='panelHeader'>
		<span v-if='title' class="title">
			{{title}}
		</span>
		<span v-if='back'></span>
		<div class="slot"></div>
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
	}
}
</script>

<style lang="scss" scoped>
.panelHeader {
	width: 100%;
	height: 42px;
	background: #97d6d6;
	color: white;
	.title {
		font-size: 18px;
		line-height: 42px;
		text-align: center;
	}
}
</style>