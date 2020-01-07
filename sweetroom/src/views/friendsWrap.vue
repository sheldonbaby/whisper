<template>
	<!-- wrap -->
	<div class="friendsWrap">
		<transition :name='transitionName'>
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
export default {
	data() {
		return {
			transitionName: 'moveIn'
		}
	}
}
</script>

<style lang="scss" scoped>
.friendsWrap {
	width: 100%;
	height: 100%;
}
</style>