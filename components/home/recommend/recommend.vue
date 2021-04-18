<template>
	<view class="recommend">
		 <view class="container" v-for="(item,index) in recommendData.article" :key="index" @click="toArticle(item.id)">
		 	<view class="title">
				<view class="title-img">
					<image :src="item.baimg" @click.stop="toTopic(item)"></image>
				</view>
				<view class="title-mes">
					<view class="title-name">
						{{item.name}}吧
					</view>
					<view class="title-num">
						<view class="title-guanzhu">
							关注:{{item.guanzhu}}
						</view>
						<view class="title-tiezi">
							帖子:{{item.tiezi}}
						</view>
					</view>
				</view>
		 	</view>
			
		    <!-- 中间内容区域 -->
			<view class="content">
				<view class="txt" v-html="item.txt"></view>
				<!-- 中间图片区域 -->
				 <view v-for="(src,num) in (item.img)" :key='num' style="float: left;">
					 <image
					 class="article-img"
					  v-if="num < 3 && item.img"
					  :style="{width:(item.img).length<2 ? '450rpx' : '220rpx',height:(item.img).length<2 ? '500rpx' : '220rpx'}"  
					  :src="src"
					  mode="aspectFill"
					  @click.stop="previewImage(item.img,src)"
					  :key='num'>
					  </image>
				  </view>
				  <video v-if="item.video !== ''" style="width: 100%;" :src="item.video" controls ></video>
				<view style="clear:both;"></view>
			</view>
			
			<view class="foot">
				<view class="share"><image class="img" src="../../../static/share.png"></image><text>{{item.sharenum}}</text></view>
				<view class="comment"><image class="img" src="../../../static/huifu.png" ></image><text>{{item.commentnum}}</text></view>
				<view class="dianzan"><image class="img" src="../../../static/dianzan.png" @click.stop='reward(item.id,index)'></image><text>{{item.dznum}}</text></view>
			</view>
		 </view>
		 
	</view>
</template>

<script>
	export default{
		name:'recommend',
		data(){
			return{
			}
		},
		props:['recommendData'],
		methods:{
			//点击进入 帖子页面
			toArticle(id){
				uni.navigateTo({
					url:'../tiezicontent/tiezicontent?id='+id
				})
			},
			//点击贴吧头像，进入贴吧页面
			toTopic(item){
				uni.navigateTo({
					url:'../topic/topic?id='+item.topicid
				})
			},
			//图片预览
			previewImage(src,num){
				uni.previewImage({
					current:src[num],
					urls:src,
					indicator:"default",
					loop:true
				})
			},
			// 帖子点赞
			reward(id,index){
				if(!this.$store.state.login){
					uni.navigateTo({
						url:'../login/login'
					})
				}else{
					this.$request('/rewardArticle',{
					id:id
					},'post').then( res =>{
						this.article[index].dznum ++
					})
				}
			}
		},
		created() {
		},
	}
	
</script>

<style lang="scss">
	.recommend{
		width: 100%;
		.container{
			box-sizing: border-box;
			padding:15rpx;
			width: 100%;
			margin: 0 auto;
			background-color: #fff;
			margin-top: 10px;
			border-radius: 10px;
			.title{
				height: 40px;
				.title-img{
					height: 40px;
					width: 40px;
					image{
						height: 100%;
						width: 100%;
						border-radius: 40%;
					}
				}
				.title-mes{
					height: 20px;
					line-height: 20px;
					margin-left: 60px;
					margin-top: -40px;
					height: 40px;
				}
				.title-num .title-guanzhu,.title-num .title-tiezi{
					display: inline-block;
					margin-right: 10px;
				}
			}
			.content{
				margin: 5px 0 20px 0;
				margin-bottom: 20px;
				.txt{
					font-size: 14px;
				}
				.article-img{
					margin-right: 15rpx;
					border-radius: 20rpx;
				}
			}
			.foot{
				display: flex;
				 justify-content:space-around;
				 height: 20px;
				 line-height: 20px;
				 .img{
					 vertical-align:top;
					 height: 20px;
					 width: 20px;
					 margin-right: 5px;
				 }
			}
		}
		
	}
	
</style>
