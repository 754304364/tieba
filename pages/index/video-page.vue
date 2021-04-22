<template>
	<view>
		<view v-for="(item,index) in res" :key="index">
			<article-content :res='item'></article-content>
		</view>
		
	</view>
</template>

<script>
	import {videoPage} from '../../global/api.js'
	export default{
		name:'videoPage',
		data(){
			return{
				// res:[]
			}
		},
		props:['res'],
		created() {
			// videoPage().then(res =>{
			// 	this.res = res
			// })
		}
	}
</script>

<style>
</style>
