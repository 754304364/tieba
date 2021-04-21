<template>
	<view>
		<!-- 如果没登录则显示 -->
		<view class="no-login" v-if="user == null">
			<view class="txt">登录查看吧友最新的帖子~</view>
			<u-button class='login-btn' type='primary' shape="circle" size="medium" @click='toLogin'>前往登录</u-button>
		</view>
		<!-- 登录显示区域 -->
		<view v-else>
			<!-- 如果没关注人 -->
			<view v-if="user.followUser.length === 0">
				<text>嚯~还没有人引起你的关注</text>
			</view>
			
			<view v-else>
				<view v-for="(item,index) in followData.acticleArr" :key='index'>
					<acticle-content :res='item'></acticle-content>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'follow',
		data(){
			return{
			}
		},
		props:['followData'],
		methods:{
			toLogin(){
				uni.navigateTo({
					url:'../../pages/login/login'
				})
			}
		},
		computed:{
			login(){
				return this.$store.state.login
			},
			user(){
				return this.$store.state.user
			}
		},

	}
</script>

<style lang="scss" scoped>
	.no-login{
		text-align: center;
		margin-top: 40%;
		.login-btn{
			margin-top: 20px;
		}
	}
</style>
