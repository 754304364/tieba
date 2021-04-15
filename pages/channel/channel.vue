<template>
	<view>
		<u-tabs-swiper 
		ref="uTabs" 
		:list="list" 
		:current="current" 
		@change="tabsChange" 
		:is-scroll="false"
		swiperWidth="750">
		</u-tabs-swiper>
		<swiper :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
			<swiper-item class="swiper-item" v-for="(item, index) in tabs" :key="index">
				<scroll-view scroll-y style="height: 100vh;width: 100%;">
					{{item}}
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default{
		data(){
			return{
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
			}
		},
		mounted() {
			
		},
		methods:{
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

<style lang="scss">
	
	
</style>
