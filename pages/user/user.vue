<template>
	<view class="" v-if="this.$store.state.user !== null">
		<image class="user-img" :src="this.$store.state.user.img"></image>
		<view class="user-data">
			<view class="user-name">
				{{this.$store.state.user.name}}
			</view>
			<view class="user-others">
				<text>关注{{followNum}}</text>
				<text>粉丝{{fansNum}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
			}
		},
		computed:{
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
	page{
		background-color: #f9f9f9;
		padding: 20px 15rpx 0;
	}
	.user-img{
		float: left;
		height: 50px;
		width: 50px;
		border-radius: 50%;
	}
	.user-data{
		float: left;
		height: 50px;
		margin-left: 20px;
		.user-name{
			height: 25px;
			line-height: 25px;
			font-weight: bold;
		}
		.user-others{
			height: 25px;
			line-height: 25px;
		}
	}
</style>
