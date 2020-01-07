<template>
	<div class='panelHeader'>
		<span v-if='title' class="title">
			{{title}}
		</span>
		<span v-if='back' class="back" @click='goBack'> < </span>
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
	.title {
		font-size: 18px;
		line-height: 42px;		
	}
	.back {
		font-size: 28px;
		line-height: 42px;
	}
	.iconSlot {
		position: absolute;
		right: 15px;
		top: 12px;
	}
}
</style>