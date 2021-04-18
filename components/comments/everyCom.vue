<template>
		<view class="every-com" >
			<image class="userimg" :src="res.userimg" mode=""></image>
			<view class="right">
				<p class='user-name'>{{res.username}}</p>
				<text class="storey">第{{storey}}楼</text>
				<text class="time">{{$u.timeFrom(res.second, 'yyyy年mm月dd日')}}</text>
				<rich-text :nodes="res.txt" @click="toReply"></rich-text>
				<image
				v-if="res.img"
				v-for="(src,index) of articleImg" 
				class="article-img"
				style="width: 100%;"
				:src="src" 
				mode="aspectFill"
				:key='index'
				@click="previewImage(articleImg,index)">
				</image>
				
				<view class="comment-son" v-if="data.length > 0">
						<comment-son class="son" v-for="(item,index) in data" :storey='storey' :key='index' :res='item' :fatherRes='res' ></comment-son>
				</view>
			</view>
		</view>
</template>

<script>
	import { queryComSon } from '../../global/api.js'
	import commentSon from './commentSon.vue'
	export default{
		name:'everyCom',
		components:{commentSon},
		data(){
			return{
				data:[],
				articleImg:[],
				replyShow:false
			}
		},
		methods:{
			toReply(){
				if(this.$store.state.login === false){
					uni.navigateTo({
						url:'../login/login'
					})
				}else{
					this.$store.commit('updateReplyShow',true)
					this.$store.commit('updateReplyType','comment')
					this.$store.commit('updateReplyData',{articleid:this.res.articleid,fatherid:this.res.id})
				}
			},
			//预览图片
			previewImage(src,index){
				uni.previewImage({
					current:src[index],
					urls:src,
					indicator:"default",
					loop:true
				})
			},
		},
		//res:comments组件传来的数据
		props:['storey','res'],
		created() {
			queryComSon(this.res.id).then(res =>{
				if(res !=='0'){
					this.data = res
				}
			})
			this.articleImg = this.res.img.split(',')
		},
	}
</script>

<style lang="scss">
	.every-com{
		position: relative;
		padding: 10px 0;
		.userimg{
			height: 40px;
			width: 40px;
			line-height: 40px;
			border-radius: 50%;
	    }
		.right{
			margin-top: -46px;
			margin-left: 50px;
			padding-bottom: 20px;
			border-bottom: .5px solid #dcdcdc;
			.user-name{
				height: 20px;
				line-height: 20px;
				font-size: 14px;
			}
			.storey{
				height: 20px;
				line-height: 20px;
				font-size: 12px;
				margin-right: 15px;
				color: #999999;
			}
			.time{
				height: 20px;
				line-height: 20px;
				font-size: 12px;
				color: #999999;
			}
		}
		.comment-son{
			margin-top: 5px;
			// margin-left: 50px;
			border-radius: 5px;
			background-color: #EDEDED;
			padding:5px 10px;
			.son{
			}
		}
	}
	
</style>
