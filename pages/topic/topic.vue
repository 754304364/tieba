<template>
	<view >
		<view class="top" >
			<image class="topic-img" :src="topicData.img" mode=""></image>
			<view class="topic-data">
				<view class="topic-name">{{topicData.name}}吧</view>
				<text>关注{{topicData.guanzhu}}</text>
				<text>帖子{{topicData.tiezi}}</text>
				<view class="follow" :style="{color:followTxt === '关注' ? 'blue':'#999999' }" @click="followTopic">{{followTxt}}</view>
			</view>
		</view>
		
		<!-- 最新 - 精华 分类 -->
		<view>
			<text v-for="(item,index) in topicClass" :key="index">{{item}}</text>
		</view>
		<view class="container"  @touchmove='touchmove($event)' @touchstart='touchstart($event)' @touchend='touchend($event)'>
			<!--  最新 -->
			<view class="item new-article" :class="{transition:transition}" :style="{marginLeft:left + 'px'}">
				<acticle-content v-for='(item,index) in article' :key='index' :res='item'></acticle-content>
			</view>
			<!-- 精华 -->
			<view class="item" style="background-color: blue;" >
				<view v-for='(item,index) in article'  :key='index' >
					{{item.txt}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import acticleContent from '../../components/acticleContent.vue'
	export default {
		data() {
			return {
				topicData:[], //获取的贴吧资料
				article:[],
				articlImg:[],
				left:0,
				topicClass:['最新',"精华"],
				touchStartLeft:0, //记录手指按下时的位置
				touchmoveLeft:0,  //记录手指移动时的偏移量
				recordLeft:0,  //记录每次手指松开时的偏移量
				containerWidth:0,//盒子宽度,
				transition:false,
				followTxt:'关注' //关注按钮的文字
			};
		},
		components:{acticleContent},
		onLoad(date) {
			uni.showLoading({
			    title: '加载中'
			});
			this.$request('/selectTopic',{
				id:date.id
			},'post').then( res =>{
				this.topicData = res
				//判断登录用户是否关注 吧
				if(this.$store.state.user !== null){
					let arr= this.$store.state.user.followTopic
					if(arr !==false && arr.indexOf(this.topicData.id+'')> -1){
						this.followTxt ='已关注'
					}
				}
			})
			//获取贴吧的帖子
			this.$request('/topicArticle',{
				topicid:date.id
			},'post').then(res=>{
				this.article = res
			})
		},
		onShow() {
			if(this.$store.state.user !== null){
				let arr= this.$store.state.user.followTopic
				if(arr !==false && arr.indexOf(this.topicData.id+'')> -1){
					this.followTxt ='已关注'
				}
			}
		},
		
		mounted() {
			const query = uni.createSelectorQuery().in(this);
			query.select('.container').boundingClientRect(data => {
			  this.containerWidth = data.width
			}).exec();
		},
		
		watch:{
			left(val){
				switch(true){
					case this.left> 0:this.left = 0;break;
					case this.left< -this.containerWidth:this.left = -this.containerWidth ;break;
				}
			}
		},
		methods:{
			// 关注贴吧
			followTopic(){
				if(!this.$store.state.login){
					uni.navigateTo({
						url:'../login/login'
					})
				}else if(this.followTxt === '关注'){
					this.$request('/followTopic',{
						account:this.$store.state.user.account,
						id:this.topicData.id
					},'post').then(res =>{
						if (res == 0){
							this.followTxt ='已关注'
							this.$request('/topicFollow',{
								topicid:this.topicData.id
							},'post').then(res =>{
								console.log(res)
							})
						}
					})
				}
			},
			//点击跳转到帖子页面
			toArticle(id){
				uni.navigateTo({
					url:'../tiezicontent/tiezicontent?id='+id
				})
			},
			touchstart(e){
				// 记录手指按下时 的 位置
				this.transition = false
				this.touchStartLeft = e.touches[0].pageX
			},
			touchmove(e){
				//记录 偏移量
				this.touchmoveLeft = e.touches[0].pageX - this.touchStartLeft 
				
				this.left = this.touchmoveLeft + this.recordLeft
			},
			touchend(e){
				//记录每次 手指抬起时的 总偏移量
				this.transition = true
				this.recordLeft = this.recordLeft +this.touchmoveLeft
				//松开时根据偏移量
				if(this.left > -(this.containerWidth)*0.5){
					this.left = 0
					this.recordLeft = 0
				}else{
					this.left = -this.containerWidth
					this.recordLeft = -this.containerWidth
				}
			}
		}
	}
</script>

<style lang="scss">
	// 顶部 贴吧 资料
	.top{
		padding: 10px;
		&::after{
			display: block;
			content: '';
			clear: both;
		}
		.topic-img{
			width: 50px;
			height: 50px;
			border-radius: 10px;
		}
		.topic-data{
			height: 50px;
			line-height: 25px;
			margin-left: 60px;
			margin-top: -50px;
			.follow{
				float: right;
				margin-top: -10px;
			}
		}
	}
	.container{
		width: 750rpx;
		box-sizing: border-box;
		margin: 0 auto;
		overflow-x: hidden;
		white-space: nowrap;
		.item{
			width: 100%;
			display: inline-block;
			white-space:pre-wrap;
			vertical-align: top;
		}
		.new-article{
			background-color: #ededed;
			
		}
	}
	
	.transition{
		transition: all .3s;
	}
</style>
