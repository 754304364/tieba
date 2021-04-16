<template>
	<view>
		<u-navbar back-icon-name='search'>
			<u-input v-model="inputValue" type='text' confirm-type='search' placeholder='大家都在搜~~~' :focus='true' />
			<text slot="right">取消</text>
		</u-navbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputValue:''
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
