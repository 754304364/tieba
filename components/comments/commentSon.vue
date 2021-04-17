<template>
	<view class="every-son">
		<view>
			<text class="name" ref='userName'>{{res.username}}:<text style="color: #000;" v-if="res.parentUserName">回复 {{res.parentUserName}} : </text></text>
			<rich-text class="rich-text" :style="{textIndent:textIndent}" @click="open" :nodes="res.txt"></rich-text>
		</view>
			
			
			
		<uni-popup  ref="popup" type="bottom"  @change='change'>
			<view class="popup">
				<view class="top">
					<text>第{{storey}}楼的回复</text>
				</view>
				<view class="parent">
					<image class="userimg" :src="fatherRes.userimg" mode=""></image>
					<view class="right">
						<p class='user-name'>{{fatherRes.username}}</p>
						<text class="storey">第{{storey}}楼</text>
						<text class="time">{{$u.timeFrom(fatherRes.second, 'yyyy年mm月dd日')}}</text>
						<rich-text :nodes="fatherRes.txt"></rich-text>
					</view>
				</view>
				<view class="bottoms">
					<view class="sonRes" v-for="(item,index) in sonRes" :key='index' @click="toReply(item)">
						<image class="userimg" :src="item.userimg" mode=""></image>
						<view class="right">
							<p class='user-name'>{{item.username}}</p>
							<text class="time">{{$u.timeFrom(item.second, 'yyyy年mm月dd日')}}</text>
							<view class="rich-text">
								<text style="color: blue;" v-if="item.parentUserName">回复 {{item.parentUserName}} : </text>
								<text v-html="item.txt"></text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</uni-popup>
    </view>
</template>

<script>
	export default{
		name:'commentSon',
		// 获取父级评论的id
		props:['res','fatherRes','storey'],
		data(){
			return{
				textIndent:'',
				sonRes:[],
				count:true
			}
			
		},
		created() {
		},
		methods:{
			abc(){
				console.log(123)
			},
			change(e){
				// console.log(e)
			},
			open(){
				this.$refs.popup.open()
				if(this.count === true){
					this.count = false
					this.$request('/queryEveryComSon',{fatherid:this.res.fatherid},'post').then(res =>{this.sonRes = res})	
				}	
			},
			toReply(item){
				if(this.$store.state.login === false){
					uni.navigateTo({
						url:'../login/login'
					})
				}else{
					this.$store.commit('updateReplyShow',true)
					this.$store.commit('updateReplyType','commentSon')
					this.$store.commit('updateReplyData',{articleid:this.res.articleid,fatherid:this.res.fatherid,parentUserid:this.res.userid,parentUserName:this.res.username})
				}
				
			}
		},
		updated() {
			const query = uni.createSelectorQuery().in(this);
			query.select('.name').boundingClientRect(data => {
			  	this.textIndent = (data.width + 5) + 'px'
			}).exec();	
		},
		mounted() {  
			const query = uni.createSelectorQuery().in(this);
			query.select('.name').boundingClientRect(data => {
			  	this.textIndent = (data.width + 5) + 'px'
			}).exec();
		}
	}
</script>

<style lang="scss">
	.every-son{
		.name{
			position: absolute;
			font-size: 13px;
			height: 20px;
			line-height: 20px;
			color: #708090	;
		}
		.rich-text{
			position: relative;
			font-size: 13px;
			height: auto;
			line-height: 20px;
			word-wrap: break-word;
		}
		
		.popup{
			height: 90vh;
			background-color: #fff;
			padding: 0 15rpx;
			border-radius: 20px 20px 0 0;
			overflow-y:auto;
			.top{
				height: 40px;
				line-height: 40px;
				text-align: center;
				border-bottom: .1px solid #999999;
				margin-bottom: 30px;
			}
			.parent{
				
			}
			.userimg{
				height: 40px;
				width: 40px;
				line-height: 40px;
				border-radius: 50%;
			}
			.right{
				margin-top: -46px;
				margin-left: 50px;
				margin-bottom: 20px;
				.user-name{
					height: 20px;
					line-height: 20px;
					font-size: 14px;
				}
				.storey{
				height: 20px;
				line-height: 20px;
				font-size: 12px;
				color: #999999;
				}
				.time{
					height: 20px;
					line-height: 20px;
					font-size: 12px;
					color: #999999;
				}	
			}
			.bottoms{
				border-top: 5px solid #999999;
				.sonRes{
					padding: 10px 0;
					border-bottom: .1px solid #999999;
					.rich-text{
					}
				}
			}
		}
	}
	
</style>
