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
		
		
		<u-tabs-swiper
		ref="uTabs" 
		:list="list" 
		bg-color='#ededed;'
		:current="current" 
		@change="tabsChange" 
		:is-scroll="false"
		swiperWidth="750">
		</u-tabs-swiper>
		
		<swiper class="swiper" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish" >
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="width: 100%;">
					<follow v-if="followShow"></follow>
				</scroll-view>
			</swiper-item>
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="width: 100%;">
					<recommend></recommend>
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
				<scroll-view scroll-y style="width: 100%;">

				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>


<script>
	import follow from '../../components/home/follow.vue'
	import recommend from "../../components/home/recommend/recommend.vue"
	export default {
		data() {
			return {
				list: [{
					name: '关注'
				}, {
					name: '推荐'
				}, {
					name: '热榜',
				}, {
					name:'直播'
				}, {
					name:'视频号'
				}],
				tabs:[1,2,3,4,5],
				current: 1, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 1, // swiper组件的current值，表示当前那个swiper-item是活动的
				maskShow:false,
				followShow:false
			}
		},
		components:{
			recommend,follow
		},
		watch:{
			current(){
				this.followShow = true
			}
		},
		onPullDownRefresh() {
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		methods:{
			toSearch(){
				uni.navigateTo({
					url:'../search/search'
				})
			},
			//点击 右上角 发布 事件
			reply(){
				this.maskShow = true
			},
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
			// tabs通知swiper切换
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
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
	 .swiper{
		 min-height: calc(100vh - 90px);
		 .swiper-item{
		 	overflow-y: auto;
		 }
	 }
	 
</style>
