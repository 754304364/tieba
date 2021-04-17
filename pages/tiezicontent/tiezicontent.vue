<template>
	<view>
		<rich-text :nodes="data.title" class="title"></rich-text>
		<view class="userdata">
			<view class="user-img">
				<image :src="data.userimg" alt="">
			</view>
			<view class="user">
				<view class="user-name">{{data.username}}</view>
				<view class="time">{{$u.timeFrom(data.second, 'yyyy年mm月dd日')}}</view>
				
				<view class="follow" :style="{color:follow ? '#999999':'blue' }" @click="followUser(data.userid)">{{followText}}</view>
			</view>

		</view>
		<rich-text :nodes="data.txt"></rich-text>
		<!-- 显示图片区域 -->
		<image 
		v-if="articleImg[0] != ''"
		v-for="(src,index) of articleImg" 
		class="article-img"
		style="width: 100%;"
		:src="src" 
		mode="aspectFill"
		:key='index'
		@click="previewImage(articleImg,index)">
		</image>
		<!-- end -->
		<!-- 分享区域 -->
		<view class="share">
			<u-icon name='weixin-circle-fill' size='60' color="#19be6b" label='微信好友' label-size='20' label-pos='bottom' ></u-icon>
			<u-icon name='qq-circle-fill' size='60' color="#2b85e4" label='QQ好友' label-size='20' label-pos='bottom'></u-icon>
			<u-icon name='thumb-up' size='60' :label='data.dznum' label-size='20' label-pos='bottom'></u-icon>
			<u-icon name='thumb-down' size='60' label='踩' label-size='20' label-pos='bottom'></u-icon>
		</view>
		<u-gap height="10" bg-color="#f5f5fe"></u-gap>
		<!-- 评论内容区域 -->
		<comments  :res='commentsData'></comments>
		<!-- 底部回复区域 -->
		<view class="bottom">
			<view class="input" v-if="!isLogin" @click="toLogin">
				<image class="image"></image>
				<text class="text">请登录</text>
			</view>
			<view v-else class="input"  @click="toReply">
				<image :src='userImg' class="image"></image>
				<text class="text">我来聊几句</text>
			</view>
		</view>
		<reply :replyType='replyType'  :articleid='articleid'></reply>
		
	</view>
</template>

<script>
	import comments from '../../components/comments/comments.vue'
	import reply from '../../components/reply/reply.vue'
	export default {
		data() {
			return {
				data:[],
				articleImg:[],
				user:[],
				replyShow:false,
				articleid:0,
				commentsData:[],
				replyType:'tiezi',
				follow:false,
				followText:'关注',
				login:false
			}
		},
		components:{comments,reply},
		computed:{
			isLogin(){
				return this.$store.state.login
			},
			userImg(){
				if(this.$store.state.user !== null){
					return this.$store.state.user.img
				}	
			}
		},
		methods: {
			//跳转回复
			toReply(){
				this.$store.commit('updateReplyShow',true)
				this.$store.commit('updateReplyType','tiezi')
				this.$store.commit('updateReplyData',{articleid:this.articleid})
			},
			//跳转登录
			toLogin(){
				uni.navigateTo({
					url:'../login/login'
				})
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
			//关注用户
			followUser(id){
				if(!this.$store.state.login){
					uni.navigateTo({
						url:'../login/login'
					})
				}else{
					if(!this.follow){
					this.$request('/followUser',{
					account:this.$store.state.user.account,
					id:id
					},'post').then( res =>{
						if (res == 0){
							this.follow = true
							this.followText ='已关注'
							}
						})
					}
				}
			},
			// 请求 文章 数据
			requestActicle(id){
				this.$request('/selectArticleId?id='+id,{},'get').then(res =>{
					this.data = res
					this.$request('/selectTopic?id='+res.topicid,{},'get').then(res =>{
						uni.setNavigationBarTitle({
							title:res.name + '吧'
						})
					})
					this.articleImg =this.data.img.split(',')
					//判断登录用户是否已经关注发帖人
					if(this.$store.state.login){
						let arr= this.$store.state.user.followUser
						if(arr.indexOf(this.data.userid+'')> -1){
							this.follow = true
							this.followText ='已关注'
						}
					}
				})
			},
			// 请求文章 评论数据
			requestComment(id){
				this.$request('/querycomment',{articleid:id},'post').then(data =>{
					this.commentsData = data
				})
			},
			
		},
		onLoad(index) {	
			uni.showLoading({
			    title: '加载中'
			});
			this.articleid = index.id
			this.requestActicle(index.id)
			this.requestComment(index.id)

		},
		onShow() {
			//判断登录用户是否已经关注发帖人
			if(this.$store.state.user !== null){
				let arr= this.$store.state.user.followUser
				if(arr.indexOf(this.data.userid+'')> -1){
					this.follow = true
					this.followText ='已关注'
				}
			}
			//end
		},
		onPullDownRefresh() {
			this.requestActicle(this.articleid)
			this.requestComment(this.articleid)
			this.$nextTick(() =>{
				uni.stopPullDownRefresh()
			})
		},
		onUnload(){
			this.$store.commit('updateReplyShow',false)
		},
		onReady() {	
			uni.setNavigationBarTitle({
			    title: '新的标题'
			});
		}
	}
</script>

<style lang="scss">
page{
	box-sizing: border-box;
	padding: 0 15rpx;
	background-color: #fff;
}
.title{
	font-size: 18px;
	font-weight: bold;
}
.userdata{
	height: 40px;
	margin: 20px 0;
	.user-img{
		height: 40px;
		width: 40px;
		border-radius: 50%;
		image{
			height: 40px;
			width: 40px;
			border-radius: 50%;
		}
	}
	.user{
		font-size: 14px;
		height: 40px;
		margin-left: 60px;
		margin-top: -40px;
		.user-name{
			height: 20px;
			line-height: 20px;
		}
		.time{
			height: 20px;
			line-height: 20px;
		}
		.follow{
			float: right;
			margin-top: -35px;
			height: 25px;
			line-height: 25px;
			color: blue;
			background-color: #EDEDED;
			padding: 0 15px;
			border-radius: 20px;
		}
	}
}
//帖子图片样式
.article-img{
	border-radius: 15rpx;
}
// end
// 分享 区域
.share{
	height: 50px;
	margin: 15px 0;
	display: flex;
	justify-content:space-around;
	align-items:center;
}
//  end
.bottom{
	position: fixed;
	bottom: 0;
	left: 0;
	width: 750rpx;
	padding: 10px 15rpx;
	border-top: .2px solid #999999;
	background-color: rgba($color: #fff, $alpha: 1.0);
	.input{
		width: 50%;
		height: 40px;
		line-height: 40px;
		background-color: #EDEDED;
		border-radius: 20px;
		.image{
			position: absolute;
			margin-top: 4.5px;
			margin-left: 5px;
			height: 30px;
			width: 30px;
			border-radius: 50%;
			border: 1px solid #fff;
		}
		.text{
			margin-left: 50px;
		}
	}
}
.loading{
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	margin-top: 50%;
	margin-left: 50%;
	z-index: 999;
}
</style>
