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
	<!-- 左边我的吧 -->
		<swiper :current="swiperCurrent" style="min-height: 100vh;" @transition="transition" @animationfinish="animationfinish">
			<swiper-item class="swiper-item" >
				<scroll-view scroll-y style="height: 100vh;width: 100%;">
					<my-topic></my-topic>
				</scroll-view>
			</swiper-item>
			
			<!-- 右边 推荐吧 -->
			<swiper-item class="swiper-item" >
				<scroll-view scroll-y style="height: 100vh;width: 100%;background-color: #fff;">
					<view class="topic-square-left">
						<view class="topic-class"
						 :class="{selected:topicClassSelected===index}"
						  v-for="(item,index) in topicClass"
						   :key='index'
						   @click='changetopicClassSelected(index)'>
							{{item}}
						</view>
					</view>
					<view style="float: left;" >123</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import myTopic from '../../components/home/my-topic.vue'
	export default{
		data(){
			return{
				followTopicArr:[],
				list: [{
					name: '我的吧'
				}, {
					name: '吧广场'
				}],
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的	
				topicClass:['推荐',"热门","黑马","游戏","动漫","明星","数码","影视","教育","体育","交友","地区","自然","历史","文学","社会","服务"],
				topicClassSelected:0
			}
		},
		components:{myTopic},
		mounted() {
			
		},
		computed:{
			followTopic(){
				return this.$store.state.user.followTopic
			}
		},
		onShow(){
			// if(this.$store.state.login && this.followTopicArr.length == 0){
			// 		for(let i of this.followTopic){
			// 			this.$request(`/selectTopic?id=${i}`,{},'get').then(res =>{
			// 				this.followTopicArr.push(res)
			// 			})
			// 		}
			// }
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
			//吧广场左侧点击切换
			changetopicClassSelected(index){
				this.topicClassSelected = index
			}
		}
	}
</script>

<style lang="scss">
	.topic-square-left{
		float: left;
		.topic-class{
			width: 150rpx;
			height: 150rpx;
			line-height: 150rpx;
			text-align: center;
			background-color: #F5F5F5;
		}
		.selected{
			background-color: #fff;
			&::after{
				position: absolute;
				display: block;
				background-color: #8A2BE2;
				content: '';
				margin-top: -150rpx;
				height: 150rpx;
				width: 5px;
			}
		}
	}
	
</style>
