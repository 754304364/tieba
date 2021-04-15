<template>
	<view class="content">
		<!-- 顶部导航栏 -->
		<u-navbar class="top-navbar" :is-back="false" :background="{ background: '#F5F5F5' }">
			<view class="top-navbar-input">
				<text>搜索</text>
			</view>
			<view class="top-navbar-btn" slot="right" @click="reply">发布</view>
			<view class="" style="position: absolute;margin-top: 40px;right: 0;">
				<u-mask v-if='maskShow' :show="maskShow" @click="maskShow = false"></u-mask>
			</view>
		</u-navbar>
		
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
			reply(){
				this.maskShow = true
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
	 }
	 .swiper{
		 min-height: calc(100vh - 90px);
		 .swiper-item{
		 	overflow-y: auto;
		 }
	 }
	 
</style>
