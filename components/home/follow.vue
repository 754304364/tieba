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
			<view v-if="!user.followUser">
				<text>嚯~还没有人引起你的关注</text>
			</view>
			
			<view v-else>
				<view v-for="(item,index) in acticleArr" :key='index'>
					<acticle-content :res='item'></acticle-content>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import acticleContent from '../acticleContent.vue'
	export default{
		name:'follow',
		data(){
			return{
				acticleArr:[]
			}
		},
		components:{acticleContent},
		methods:{
			toLogin(){
				uni.navigateTo({
					url:'../../pages/login/login'
				})
			}
		},
		created() {
			console.log(123)
		},
		computed:{
			login(){
				return this.$store.state.login
			},
			user(){
				return this.$store.state.user
			}
		},
		created() {
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
							this.acticleArr.push(res[i][j])
						}
					}
					// 将数组按照id排序
					for ( var i=0;i<this.acticleArr.length-1;i++){
						for (var j=0;j<this.acticleArr.length-1-i;j++) {
							if (this.acticleArr[j].id < this.acticleArr[j + 1].id) {
								var temp = this.acticleArr[j];
								this.acticleArr[j] = this.acticleArr[j + 1];
								this.acticleArr[j + 1]= temp;
							} 
						}
					} 
				})
			}
		},
		watch:{
			//监听 是否登录，然后获取已关注的人的帖子
			user(){
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
								this.acticleArr.push(res[i][j])
							}
						}
						// 将数组按照id排序
						for ( var i=0;i<this.acticleArr.length-1;i++){
							for (var j=0;j<this.acticleArr.length-1-i;j++) {
								if (this.acticleArr[j].id < this.acticleArr[j + 1].id) {
									var temp = this.acticleArr[j];
									this.acticleArr[j] = this.acticleArr[j + 1];
									this.acticleArr[j + 1]= temp;
								} 
							}
						} 
					})
				}	
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
