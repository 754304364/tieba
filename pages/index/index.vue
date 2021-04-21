<template>
	<view class="content">
		<!-- 顶部导航栏 -->
		<u-navbar class="top-navbar" :is-back="false" :background="{ background: '#F5F5F5' }">
			<view class="top-navbar-input" @click="toSearch">
				<text>搜索</text>
			</view>
			<view class="top-navbar-btn" slot="right" @click="reply">发布</view>
			<!-- 点击右上角出现遮罩层 -->
				<u-mask class="warp" v-if='maskShow' :custom-style="{background: 'rgba(0, 0, 0, 0.2)'}" :show="maskShow" @click="maskShow = false"></u-mask>
		</u-navbar>
		<view class="rect"  v-show="maskShow">
			<view class="rect-li" @click="toFatie"><u-image class='rect-image' src="/static/fatie.png" border-radius='20' width='30px' height='30px' mode=""></u-image><text class="text">发帖</text></view>
			<view class="rect-li"><u-image class='rect-image' src="/static/tupian_image.png" border-radius='20' width='30px' height='30px' mode=""></u-image><text class="text">图片/视频</text></view>
			<view class="rect-li"><u-image class='rect-image' src="/static/Shoot.png" border-radius='20' width='30px' height='30px' mode=""></u-image><text class="text">拍摄</text></view>
			<view class="rect-li"><u-image class='rect-image' src="/static/Live.png" border-radius='20' width='30px' height='30px' mode=""></u-image><text class="text">直播</text></view>
			<view class="rect-li"><u-image class='rect-image' src="/static/vote.png" border-radius='20' width='30px' height='30px' mode=""></u-image><text class="text">投票</text></view>
			<view class="rect-li"><u-image class='rect-image' src="/static/evaluation.png" border-radius='20' width='30px' height='30px' mode=""></u-image><text class="text">评价</text></view>
		</view>
		
		<u-sticky>
			<u-tabs-swiper
			class='tabs-swiper'
			ref="uTabs" 
			:list="list" 
			bg-color='#ededed;'
			:current="current" 
			@change="tabsChange" 
			:is-scroll="false"
			swiperWidth="750">
			</u-tabs-swiper>
		</u-sticky>
		
		
		<!-- <swiper class="swiper" duration='300' @change='change' :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish" >
			<swiper-item class="swiper-item">
				<scroll-view  scroll-y style="width: 100%;">
					<follow :followData='followData' v-if="followShow"></follow>
				</scroll-view>
			</swiper-item>
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="width: 100%;">
					<recommend :recommendData='recommendData'></recommend>
				</scroll-view>
			</swiper-item>
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="width: 100%;">
				</scroll-view>
			</swiper-item>
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="width: 100%;">
				</scroll-view>
			</swiper-item>
			<swiper-item class="swiper-item" style="overflow-y: auto;">
				<scroll-view  scroll-y style="width: 100%;">
					<video-page v-if="videoPageShow" :res='videoPageArr'></video-page>
				</scroll-view>
			</swiper-item>
		</swiper> -->
		<view>
			<follow v-show="current===0" :followData='followData'></follow>
			<recommend v-show="current===1" :recommendData='recommendData'></recommend>
			<video-page v-show="current===4" :res='videoPageArr'></video-page>
		</view>
	</view>
</template>


<script>
	import {selectArticle,selectTopic,selectFollowActicle,videoPageRequest} from '../../global/api.js'
	import follow from '../../components/home/follow.vue'
	import recommend from "../../components/home/recommend/recommend.vue"
	import videoPage from '../../components/home/video-page.vue'
	export default {
		data() {
			return {
				list: [{name: '关注'}, {name: '推荐'}, {name: '热榜',}, {name:'直播'}, {name:'视频号'}],
				// tabs:[1,2,3,4,5],
				current: 1, // tabs组件的current值，表示当前活动的tab选项
				maskShow:false,
				followShow:false,
				videoPageShow:false,
				recommendData:{   //推荐区域获取的数据
					article:[],
					topicId:[],
				},
				followData:{
					acticleArr:[]
				},
				videoPageArr:[],
			}
		},
		components:{
			recommend,follow,videoPage
		},
		computed:{
			user(){
				return this.$store.state.user
			}
		},
		watch:{
			current(val){
				switch(val){
					case 0:this.followShow=true;break;
					case 4:this.videoPageShow = true;break;
				}
			},
			followShow(val){
				this.followRequest()
			},
			user(){
				this.followRequest()
			},
			videoPageShow(val){
				this.videoPageRequest()
			}
		},
		onPullDownRefresh() {
			switch(this.current){
				case 0:this.followData.acticleArr=[];this.followRequest();this.$nextTick(() =>{uni.stopPullDownRefresh();});break;
				case 1:this.recommendData={article:[],topicId:[]};this.recommend();this.$nextTick(() =>{uni.stopPullDownRefresh();});break;
				case 4:this.videoPageArr = [];this.videoPageRequest();this.$nextTick(() =>{uni.stopPullDownRefresh();});break;
			}
		},
			methods:{	
				//跳转搜索页面
				toSearch(){
					uni.navigateTo({
						url:'../search/search'
					})
				},
				//点击 右上角 发布 事件
				reply(){
					this.maskShow = true
				},
				//跳转发帖页面
				toFatie(){
					if(!this.$store.state.login){
						uni.navigateTo({
							url:'../login/login'
						})
					}else{
						uni.navigateTo({
							url:'../fatie/fatie'
						})
					}
				},
			tabsChange(index) {
				this.current = index
				this.swiperCurrent = index;
			},
			change(e){
				// console.log(e)
			},
			// 首页 - 推荐 网络请求
			recommend(){
				selectArticle().then(res =>{
					this.recommendData.article = res
					for(let i = 0;i<res.length;i++){
						this.recommendData.topicId.push(res[i].topicid)
					}
				}).then(() =>{
					for(let i = 0;i < this.recommendData.topicId.length;i++){
						selectTopic(this.recommendData.topicId[i]).then(res =>{
							this.$set(this.recommendData.article[i],'baimg',res.img)
							this.$set(this.recommendData.article[i],'name',res.name)
							this.$set(this.recommendData.article[i],'guanzhu',res.guanzhu)
							this.$set(this.recommendData.article[i],'tiezi',res.tiezi)
						})
					}	
				})
			},
			// 关注页网络请求
			followRequest(){
				if(this.$store.state.user !== null){
					let requestArr= []
					let arr =JSON.parse(JSON.stringify(this.$store.state.user.followUser))
					for(let i = 0;i<arr.length;i++){
						requestArr[i] = selectFollowActicle(arr[i])	
					}
					Promise.all(requestArr).then(res =>{
						//将所有结果放入数组
						for(let i = 0;i<res.length;i++){
							for(let j =0;j<res[i].length;j++){
								this.followData.acticleArr.push(res[i][j])
							}
						}
						// 将数组按照id排序
						for ( var i=0;i<this.followData.acticleArr.length-1;i++){
							for (var j=0;j<this.followData.acticleArr.length-1-i;j++) {
								if (this.followData.acticleArr[j].id < this.followData.acticleArr[j + 1].id) {
									var temp = this.followData.acticleArr[j];
									this.followData.acticleArr[j] = this.followData.acticleArr[j + 1];
									this.followData.acticleArr[j + 1]= temp;
								} 
							}
						} 
					})
				}
			},
			// 视频号 - 网络请求
			videoPageRequest(){
				videoPageRequest().then(res =>{
					this.videoPageArr = res
				})
			}
		},
		onLoad() {
			this.recommend()
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background-color:#F5F5F5;
		box-sizing: border-box;
		padding:0 10rpx;
	}
	 .content{
		 .top-navbar{
			 .top-navbar-input{
				 background-color: #ededed;
				 margin-left: 10px;
				 line-height: 30px;
				 height: 30px;
				 border-radius: 20px;
				 width: 60%;
				 padding-left: 10%;
			 }
			 .top-navbar-btn{
				 margin-right: 10px;
				 padding:0 20px;
				 border-radius: 20px;
				 background-color: 	#8A2BE2;
				 color: #fff;
				 height: 30px;
				 line-height: 30px;
			 }
		 }
		 
		 .rect{
			 position: fixed;
			 z-index: 999;
			 right: 15rpx;
			 background-color: #000;
			 border-radius: 10px;
			 color: #fff;
			 text-align: center;
			 transition: all .3s;
			 .rect-li{
				 padding: 10px;
				 height: 50px;
				 border-bottom: .1px solid #606266;
				 .rect-image{
					 float: left;
					 margin-right: 10px;
				 }
				 .text{
					 line-height: 30px;
					 float: left;
				 }
			 }
		 }
	 }
	 .tabs-swiper{
		 background-color: #fff;
	 }
	 
</style>
