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
		class='tabs-swiper'
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
				followShow:false,
				recommendData:{   //推荐区域获取的数据
					article:[],
					topicId:[],
				},
				followData:{
					acticleArr:[]
				}
				
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
			if(this.current === 1){
				this.recommend()
				this.$nextTick(() =>{
					uni.stopPullDownRefresh();
				})
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
			// 首页 - 推荐 网络请求
			recommend(){
				this.$request('/selectArticle','','get').then(res =>{
					this.recommendData.article = res
					for(let i = 0;i<res.length;i++){
						this.recommendData.topicId.push(res[i].topicid)
					}
				}).then(() =>{
					for(let i = 0;i < this.recommendData.topicId.length;i++){
					this.$request('/selectTopic',{
						id:this.recommendData.topicId[i]
					},'post').then(res =>{
						this.$set(this.recommendData.article[i],'baimg',res.img)
						this.$set(this.recommendData.article[i],'name',res.name)
						this.$set(this.recommendData.article[i],'guanzhu',res.guanzhu)
						this.$set(this.recommendData.article[i],'tiezi',res.tiezi)
						})
					}	
				})
			},
			followRequest(){
				if(this.login){
					let requestArr= []
					let arr =JSON.parse(JSON.stringify(this.user.followUser))
					for(let i = 0;i<arr.length;i++){
						requestArr[i] = this.$request(`/selectFollowActicle?id=${arr[i]}`,{},'get')
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
								if (this.followData.acticleArr[j].id < this.acticleArr[j + 1].id) {
									var temp = this.followData.acticleArr[j];
									this.followData.acticleArr[j] = this.followData.acticleArr[j + 1];
									this.followData.acticleArr[j + 1]= temp;
								} 
							}
						} 
					})
				}
			},
		},
		onLoad() {
			this.recommend()
			this.followRequest()
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
		 position: fixed;
	 }
	 .swiper{
		 margin-top: 44px;
		 min-height: calc(100vh - 140px);
		 .swiper-item{
		 	overflow-y: auto;
		 }
	 }
	 
</style>
