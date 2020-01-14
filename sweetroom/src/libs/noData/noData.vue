<template>
	<div class="noData">
		<img src="../../assets/addfriend.jpg" alt="">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>
.noData {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	img {
		width: 60%;
		height: 60%;
		margin:20px;
	}
}
</style>