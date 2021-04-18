<template>
	<view>
	
		
		
	</view>
</template>

<script>
	import {login} from '../../global/api.js'
	export default{
		data(){
			return{
				
			}
		},
		created() {
			login({
				account:'3',
				password:'3'
			}).then(res =>{
				console.log(res)
			})
		}
		
	}
</script>

<style lang="scss">
	.video-container{
		display: flex;
		justify-content: flex-start;
		.video{
			width: 220rpx;
			height: 220rpx;
		}
		
	}
	
</style>
