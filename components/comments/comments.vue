<template>
	<view style="padding-bottom: 60px;">
		<view class="comment-class">
			<text 
			class="text-left" 
			:class="{showLeft:index === leftIndex}"
			 v-for="(item,index) in left" 
			 @click="leftChange(index)"
			 :key='index'>
			 {{item}}
			 </text>
			<view class="right">
				<text
				 class="right-txt" 
				 :class="{showRight:index === rightIndex}" 
				 v-for="(item,index) in right" 
				 @click="rightChange(index)" 
				 :key='index'>
				 {{item}}
				 </text>
			</view>
		</view>
		<!-- 评论区域 -->
		<view v-if="res.length >0">
			<every-com  v-for='(item,index) in res' :storey='index+1' :key='index' :res='item'></every-com>
		</view>
		<!-- 没有评论则显示 -->
		<view v-else style="height: 200px;text-align: center;margin-bottom: 100px;">
			<image src="../../static/nocomment.jpg" style="width: 200px;height: 200px;"></image>
			<view>楼层为空，别让楼主寂寞太久</view>
		</view>
	</view>
</template>

<script>
	import everyCom from './everyCom.vue'
	import commentSon from './commentSon.vue'
	export default{
		name:'comments',
		components:{everyCom,commentSon},
		data(){
			return{
				left:['全部回复','只看楼主'],
				leftIndex:0,
				right:['正序','倒序'],
				rightIndex:0
			}
		},
		// 从页面传来文章的id
		props:['res'],
		methods:{
			leftChange(index){
				this.leftIndex = index
			},
			rightChange(index){
				this.rightIndex = index
			}
		}
	}
</script>

<style lang="scss">
	.comment-class{
		height: 25px;
		box-sizing: content-box;
		line-height: 25px;
		font-size: 14px;
		padding: 5px;
		&::after{
			display: block;
			content: '';
			clear: both;
		}
		.showLeft{
			font-weight: bold;
		}
		.showRight{
			background-color: #fff;
		}
		.text-left{
			display: inline-block;
			height: 25px;
			line-height: 25px;
			margin-right: 5px;
		}
		.right{
			display: inline-block;
			float: right;
			height: 25px;
			line-height: 21px;
			padding: 2px;
			background-color: rgb(240,240,240);
			border-radius: 10px;
			.right-txt{
				display: inline-block;
				height: 21px;
				line-height: 21px;
				padding: 0 5px;
				border-radius: 10px;
			}
		}
	}
</style>
