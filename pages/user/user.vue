<template>
	<view class="" v-if="this.$store.state.user !== null">
		<view class="user-view">
			<image class="user-img" :src="this.$store.state.user.img"></image>
			<view class="user-data">
				<view class="user-name">
					{{this.$store.state.user.name}}
					<u-icon 
					:name="this.$store.state.user.sex === 1 ? 'man':'woman' " 
					:color="this.$store.state.user.sex === 1 ? '#2979ff':'#fa3534' ">
					</u-icon>
				</view>
				<view class="user-others">
					<text>关注{{followNum}}</text>
					<text style="margin-left: 20px;">粉丝{{fansNum}}</text>
				</view>
			</view>
		</view>
		<view class="user-article">
			<view><view class="user-article-txt">1</view>我的帖子</view>
			<view><view class="user-article-txt">{{user.followTopic.length}}</view>关注的吧</view>
			<view><view class="user-article-txt">1</view>收藏</view>
			<view><view class="user-article-txt">1</view>浏览历史</view>
		</view>
		<!-- 轮播图区域 -->
		<swiper class="swiper" 
		:indicator-dots="true" 
		:autoplay="true" 
		interval="3000" 
		:circular='true' 
		duration="300" indicator-color='rgba(240, 240, 240, .6)' 
		indicator-active-color='#fff'>
			<swiper-item>
				<image class="swiper-image" src="../../static/userPage/swiper1.png" mode=""></image>
			</swiper-item>
			<swiper-item>
				<image class="swiper-image" src="../../static/userPage/swiper2.png" mode=""></image>
			</swiper-item>
		</swiper>
		<!-- 常用功能区域 -->
		<view class="common-function">
			<view class="bold-title">常用功能</view>
			<view class="common-function-content">
				<view v-for="(item,index) in commonFunction" :key="index" class="block">
					<view><image class="block-image" :src="`../../static/userPage/${index+1}.png`"></image></view>
					{{item}}
				</view>
			</view>
		</view>
		
		<!-- 创作数据 -->
		<view class="creation-data">
			<view class="creation-data-title">
				<text class="bold-title">创作数据</text>
				<text>每日中午12点更新<u-icon style='margin-left: 10px;' name='arrow-right'></u-icon></text>
				
			</view>
			<view class="creation-data-container">
				<view class="creation-data-block">
					<view class="bold-title">1</view>
					<text>帖子新增浏览</text>
				</view>
				<view class="creation-data-block">
					<view class="bold-title">1</view>
					帖子新增点赞
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				commonFunction:['创作中心','会员中心','直播','游戏中心','开店','蓝钻商城','度小满','有钱花','账号检测','我的礼物','卡包','印记中心',]
			}
		},
		computed:{
			user(){
				return this.$store.state.user
			},
			followNum(){
				if(!this.$store.state.user.followUser){
					return 0
				}else{
					return this.$store.state.user.followUser.length
				}
			},
			fansNum(){
				if(!this.$store.state.user.fansNum){
					return 0
				}else{
					return ore.state.user.fansNum.split(',').length -1
				}
			}
		},
		onLoad() {
			if(this.$store.state.login == false){
				uni.navigateTo({
					url:"../login/login"
				})
			}
		}
	}
</script>

<style lang="scss">
	.bold-title{
		font-size: 16px;
		font-weight: bold;
	}
	.user-view{
		padding: 10px 15rpx;
		background-color: #fff;
		&::after{
			display: block;
			content: '';
			clear: both;
		}
		.user-img{
			float: left;
			height: 60px;
			width: 60px;
			border-radius: 50%;
		}
		.user-data{
			float: left;
			height: 60px;
			margin-left: 20px;
			.user-name{
				height: 30px;
				line-height: 30px;
				font-weight: bold;
			}
			.user-others{
				height: 30px;
				line-height: 30px;
			}
		}
	}
	
	.user-article{
		display: flex;
		justify-content: space-around;
		padding: 20px 0;
		background-color: #fff;
		.user-article-txt{
			text-align: center;
			font-weight: bold;
		}
	}
	
	.swiper{
		width: 720rpx;
		margin: 0 auto;
		height: 80px;
		.swiper-image{
			width: 720rpx;
			height: 80px;
		}
	}
	
	
	.common-function{
		width: 720rpx;
		padding: 15rpx;
		margin: 0 auto;
		border-radius: 10px;
		background-color: #fff;
		.common-function-title{
			font-weight: bold;
		}
		.common-function-content{
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
			.block{
				padding: 10px 0;
				height: 80px;
				width: 24%;
				text-align: center;
				.block-image{
					width: 35px;
					height: 35px;
				}
			}
		}
	}
	
	.creation-data{
		width: 720rpx;
		margin: 0 auto;
		background-color: #fff;
		padding: 10px;
		border-radius: 10px;
		margin-top: 10px;
		.creation-data-title{
			display: flex;
			justify-content: space-between;
			font-size: 14px;
		}
		.creation-data-container{
			display: flex;
			justify-content: space-between;
			.creation-data-block{
				height: 60px;
				line-height: 30px;
				width: 50%;
				text-align: center;
			}
		}
	}
</style>
