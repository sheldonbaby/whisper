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

</style>