<template>
	<div>
		<panel-header title='添加好友' back="/home/mainPage/friends/own"></panel-header>
		<div class="searchWrap">
			<el-select v-model="type" placeholder="请选择" style="width:80px;" size='mini'>
				<el-option
					size='mini'
					v-for="item in typeOptions"
					:key="item.value"
					:label="item.label"
					:value="item.value">
				</el-option>
			</el-select>
		</div>
	</div>
</template>

<script>
import panelHeader from '../../components/panelHeader'

export default {
	components: {
		panelHeader
	},
	data() {
		return {
			type: '2',
			typeOptions: [
				{
					label: '昵称',
					value: '2'
				},
				{
					label: 'whisper账号',
					value: '1'
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.el-select-dropdown__item.selected {
	color: #97d6d6;
}
.el-select /deep/ .el-input__inner:focus{
	border-color: #97d6d6;
}
.el-select /deep/ .el-input.is-focus .el-input__inner {
	border-color: #97d6d6;
}
.searchWrap {
	
}
</style>