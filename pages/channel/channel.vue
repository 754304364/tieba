<template>
	<view>
		<view class="sass">
			123
		</view>
	</view>
</template>
<script>
	import {selectArticle} from '../../global/api.js'
	export default{
		data(){
			return{
				article:[]
			}
		},
		created(){
			async function a(){
				await selectArticle()
				
			}
			a()
		}
	}
</script>
<style lang="scss">
	
</style>