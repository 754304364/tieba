<template>
	<view>
		<view v-if="user === null" class="vertically-centered">
			<u-button type="primary" shape="circle" @click='toLogin'>您还未登录</u-button>
		</view>
		
		<view v-else>
			<view class="vertically-centered" v-if="user.followTopic.length === 0">
				<text>您还未关注吧</text>
			</view>
			
			<view v-else class="my-follow">
				<text style="font-weight: bold;">我关注的吧</text>
				<view class="topic-list">
					<view class="topic" v-for="(item,index) in followTopic" :key='index' @click="toTopic(item.id)">
						<view><u-image :src='item.img' width='50px' height='50px' border-radius='15px' ></u-image></view>
						<view style="margin-top: 15px;"><text>{{item.name}}</text></view>
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	import {allFollowTopic} from '../../global/api.js'
	export default{
		name:'mytopic',
		data(){
			return{
				followTopic:[]
			}
		},
		computed:{
			user(){
				return this.$store.state.user
			}
		},
		watch:{
			user(val){
				let arr = []
					for(let i = 0;i<this.user.followTopic.length;i++){
						arr[i] = allFollowTopic(this.user.followTopic[i])
				}
				
				Promise.all(arr).then(res =>{
					this.followTopic = res
				})
			}
		},	
		methods:{
			toLogin(){
				uni.navigateTo({
					url:'../../pages/login/login'
				})
			},
			allFollowTopic(id){
				allFollowTopic(id)
			},
			// 点击跳转进吧
			toTopic(id){
				uni.navigateTo({
					url:`../../pages/topic/topic?id=${id}`
				})
			}
		},
		created() {
			let arr = []
			if(this.user !== null){
				for(let i = 0;i<this.user.followTopic.length;i++){
					arr[i] = allFollowTopic(this.user.followTopic[i])
				}
				Promise.all(arr).then(res =>{
					this.followTopic = res
				})
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.vertically-centered{
		height: 100vh;
		width: 750rpx;
		display:flex;
		justify-content:center;
		align-items:center;
	}
	.my-follow{
		width: 720rpx;
		margin: 15rpx;
		font-size: 16px;
		background-color: #fff;
		border-radius: 10px;
		.topic-list{
			display: flex;
			flex-wrap:wrap;
			justify-content:space-between;
			width: 100%;
			.topic{
				padding: 10px;
				width: 50%;
				display: flex;
				justify-content: space-around;
			}
		}
		
	}
</style>
