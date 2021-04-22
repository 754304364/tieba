<template>
	<view>
		<view v-for="(item,index) in res" :key="index">
			<acticle-content :res='item'></acticle-content>
		</view>
		
	</view>
</template>

<script>
	import {videoPage} from '../../global/api.js'
	import acticleContent from '../acticleContent.vue'
	export default{
		name:'videoPage',
		data(){
			return{
				// res:[]
			}
		},
		props:['res'],
		components:{acticleContent},
		created() {
			// videoPage().then(res =>{
			// 	this.res = res
			// })
		}
	}
</script>

<style>
</style>
