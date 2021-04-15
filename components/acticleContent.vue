<template>
	<view class="acticle" @click="toActicle(res.id)">
		<u-image class='user-img' 
		:src="res.userimg"  
		width="50px" height="50px" 
		shape="circle" 
		:lazy-load="true">
		</u-image>
		
		<view class="user-data">
			<view><text>{{res.username}}</text></view>
			<view><text>{{res.time}}</text></view>
		</view>
		<view class="acticle-text">
			<text :selectable=true :user-select=true>{{res.txt}}</text>
		</view>
		<view class="acticle-img">
			<view v-for="(item,index) in res.img" :key='index'>
				<u-image 
				class='image' 
				:src='item' 
				:lazy-load="true"
				border-radius='10px'
				:width="(res.img).length<2 ? '450rpx' : '220rpx'"
				:height="(res.img).length<2 ? '500rpx' : '220rpx'">
				</u-image>
			</view>
		</view>
		<view class="foot">
			<view class="share"><image class="img" src="../static/share.png"></image><text>{{res.sharenum}}</text></view>
			<view class="comment"><image class="img" src="../static/huifu.png" ></image><text>{{res.commentnum}}</text></view>
			<view class="dianzan"><image class="img" :src="dzSrc" @click.stop='reward(res.id)'></image><text>{{res.dznum}}</text></view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'acticle-content',
		props:['res'],
		data(){
			return{
				dzSrc:"/static/dianzan.png",
				isDz:false
			}
		},
		created() {
			if(this.$store.state.user.support.indexOf(this.res.id+'') !== -1){
				this.dzSrc = '/static/dianzan2.png'
				this.isDz = true
			}
			
		},
		methods:{
			toActicle(id){
				uni.navigateTo({
					url:`../tiezicontent/tiezicontent?id=${id}`
				})
			},
			reward(id){
				if(!this.$store.state.login){
					uni.navigateTo({
						url:'../login/login'
					})
					
				}else if(this.isDz === true){
				}else{
					this.$request('/rewardArticle',{
					id:id,
					userid:this.$store.state.user.id
					},'post').then( res =>{
						if(res === 0){
							this.res.dznum ++
							this.isDz = true
							this.dzSrc = '/static/dianzan2.png'
							this.$request(`/support?id=${id}&userid=${this.$store.state.user.id}`,{},'get')
						}
					})
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.acticle{
		width: 720rpx;
		padding: 10px;
		margin: 0 auto;
		background-color: #fff;
		margin-top: 10px;
		border-radius: 10px;
		font-size: 14px;
		&::after{
			display: block;
			content: '';
			clear: both;
		}
		.user-data{
			margin: -50px 0 0 60px;
			height: 50px;
			line-height: 25px;
		}
		.acticle-text{
			margin-top: 10px;
		}
		.acticle-img{
			border-radius: 10px;
			&::after{
				display: block;
				content: '';
				clear: both;
			}
			.image{
				float: left;
				margin-right: 15rpx;
			}
		}
		.foot{
			margin-top: 10px;
			display: flex;
			 justify-content:space-around;
			 height: 20px;
			 line-height: 20px;
			 .img{
				 vertical-align:top;
				 height: 20px;
				 width: 20px;
				 margin-right: 5px;
			 }
		}
	}
	
</style>
