<template>
	<!-- <view class="replyInput" v-show="this.$store.state.reply.show"> -->
	<view class="replyInput" v-show="replyShow">
		<uni-popup  ref="popup" type="bottom" :animation="true" @change='change'>
			<!-- <view class="popup" v-if="imageReplyHeight == '0px'"> -->
			<!-- <view class="popup" :style="{height:imageReplyHeight}"> -->
			<view class="popup">
				<slot ><text class="slot">默认出现</text></slot>
				<view class="uni-editor">
					<editor id="editor" class="editor" placeholder="我来评论" style="height: auto !important;"></editor>
				</view>
				<button class="btn" type="default" size="mini" @click="inputComment()">发表</button>
				<view class="reply-bottom">
					<view class="img" v-if="this.$store.state.reply.type ==='tiezi'" 
					style="background: url(../../static/uploadimg.png);background-size:cover;" 
					@click="unloadImg">
					</view>
					<view class="img" style="background: url(../../static/emoji.png);background-size:cover;"  @click="emojiShow"></view>
				</view>
				
				<view class="emoji"   :style="{height:emojiHeight+'px '}">
						<image v-show="emojiHeight == 200" 
						v-for="(item,index) in emojiArr" 
						:src="'../../static/imoji/emoji_'+item+'.png'" 
						@click="emojiChange(item)" 
						:key='index'>
						</image>
				</view>
				
				<view class="image-view" v-if="imageReplyHeight !== '0px'">
					<image class="show-image" v-for="(item,index) in imgPath" :src="item" :key='index'></image>
				</view>
			</view>
		</uni-popup>
		
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import { comment,commentSon,commentSonTwo} from '../../global/api.js'
	export default {
		name:"reply",
		data() {
			return {
				height:'0px',
				emojiHeight:0,
				login:false,
				userimg:'',
				textarea:'',
				imgPath:[], //存储图片路径
				emojiArr:[],
				imageReplyHeight:'140px',
				serverImgPath:[], //存放服务器传回来的图片地址
				imgNum:0
			}
		},
		created() {
			for(let i =0;i<26;i++){
				this.emojiArr.push(i+1)
			}
		},
		computed: {
		    replyShow() {
		      return this.$store.state.reply.show;
		    }
		  },
		
		watch:{
			//如果 vuex 里记录的reply的状态为true就打开弹出层 ，否则就关闭
			replyShow(val){
				if(val){
					this.$refs.popup.open()
				}else{
					this.$refs.popup.close()
				}
				
			},
			//监听是否选择了图片，如果是，则改变图片选择区域
			imgPath(val){
				this.imageReplyHeight = '100vh'
			},
			
			imgNum(val){
				if(this.imgNum === this.imgPath.length){
					let myDate = new Date();
					comment({
						userid:this.$store.state.user.id,
						articleid:this.$store.state.reply.data.articleid,
						txt:this.textarea,
						img:''+this.serverImgPath,
						time:myDate.getFullYear()+"-"+(myDate.getMonth()+1)+"-"+myDate.getDate(),
						second:new Date().getTime(),
						username:this.$store.state.user.name,
						userimg:this.$store.state.user.img
					}).then(res =>{
						if(res === 0){
							this.sendTips()
							let that = this
							uni.startPullDownRefresh({
								success() {
									that.$store.commit('updateReplyShow',false)
								}
							})
						}else{
							this.$refs.uToast.show({
								title: '发送失败',
								type: 'error ',
							})
						}
					})
				}
			}
		},
		methods:{
			sendTips(){
				this.$refs.uToast.show({
					title: '发送成功',
					type:'success ',
					duration:500,
				})
			},
			change(e){
				if(e.show === false){
					this.$store.commit('updateReplyShow',false)
					this.emojiHeight = 0
				}
			},
			// 点击出现emoji区域
			emojiShow(){
				if(this.emojiHeight == 0){
					this.emojiHeight = 200
				}else{
					this.emojiHeight = 0
				}
			},
			
			closeUnloadImage(){
				this.imageReplyHeight = '0px'
			},
				//上传图片
			unloadImg(){
				uni.chooseImage({
				  count:9,
				  success:(res)=>{
					  const imgPaths = res.tempFilePaths;
					  for(let i of imgPaths){
						  this.imgnum ++
						  this.imgPath.push(i)
					  }
				  }
				})
			},
			//  emoji图标点击事件
			emojiChange(item){
				uni.createSelectorQuery().in(this).select('#editor').context((res) => {
					this.editorCtx = res.context
					res.context.insertImage({
						src:'http://res.goomee.top/image/emoji/emoji_'+item+'.png',
						width:30,
						height:30,
					})
					this.editorCtx.getContents({
						success:res =>{
							console.log(res.html)
						}
					})
				}).exec()
			},
			// 发送 评论
			inputComment(){
				// 获取editor 的内容
				new Promise((resolve, reject) =>{
					uni.createSelectorQuery().in(this).select('#editor').context((res) => {
						this.editorCtx = res.context
						res.context.getContents({
							success:res =>{
								this.textarea = this.$global(res.html)
								resolve(this.$global(res.html))
							}
						})
					}).exec()
				}).then(res =>{
					// 将图片上传服务器
					if(this.imgPath.length > 0){
						for(let i of this.imgPath){
							uni.uploadFile({
								url:"http://101.132.235.218:4000/api/imgcomment",
								  filePath:i,
								  name:'avatar',	
								  success: (res) => {
									  // this.serverImgPath += res.data+','
									  this.serverImgPath.push(res.data)
									  this.imgNum ++
								  }
							})
						}
					}
					
					let myDate = new Date();
					if(this.$store.state.reply.type ==='tiezi' && this.imgPath.length <1){
						comment({
							userid:this.$store.state.user.id,
							articleid:this.$store.state.reply.data.articleid,
							txt:res,
							img:'',
							time:myDate.getFullYear()+"-"+(myDate.getMonth()+1)+"-"+myDate.getDate(),
							second:new Date().getTime(),
							username:this.$store.state.user.name,
							userimg:this.$store.state.user.img
						}).then(res =>{
							if(res === 0){
								this.sendTips()
								let that = this
								uni.startPullDownRefresh({
									success() {
										that.$store.commit('updateReplyShow',false)
									}
								})
							}else{
								this.$refs.uToast.show({
									title: '发送失败',
									type: 'error ',
								})
							}
						})
					}else if(this.$store.state.reply.type === 'comment'){
						commentSon({
							fatherid:this.$store.state.reply.data.fatherid,
							articleid:this.$store.state.reply.data.articleid,
							userid:this.$store.state.user.id,
							txt:res,
							time:myDate.getFullYear()+"-"+(myDate.getMonth()+1)+"-"+myDate.getDate(),
							second:new Date().getTime(),
							username:this.$store.state.user.name,
							userimg:this.$store.state.user.img
						}).then(res =>{
							if(res === 0){
								this.sendTips()
								let that = this
								uni.startPullDownRefresh({
									success() {
										that.$store.commit('updateReplyShow',false)
									}
								})
							}else{
								this.$refs.uToast.show({
									title: '发送失败',
									type: 'error ',
								})
							}
						})
					}else if(this.$store.state.reply.type === 'commentSon'){
						commentSontwo({
							fatherid:this.$store.state.reply.data.fatherid,
							articleid:this.$store.state.reply.data.articleid,
							userid:this.$store.state.user.id,
							txt:res,
							time:myDate.getFullYear()+"-"+(myDate.getMonth()+1)+"-"+myDate.getDate(),
							second:new Date().getTime(),
							username:this.$store.state.user.name,
							userimg:this.$store.state.user.img,
							parentUserid:this.$store.state.reply.data.parentUserid,
							parentUserName:this.$store.state.reply.data.parentUserName,
						}).then( res =>{
							if(res === 0){
								this.sendTips()
								let that = this
								uni.startPullDownRefresh({
									success() {
										that.$store.commit('updateReplyShow',false)
									}
								})
							}else{
								this.$refs.uToast.show({
									title: '发送失败',
									type: 'error ',
								})
							}
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	
.replyInput{
	position: fixed;
	margin-left: -20rpx;
	padding:0 10px;
	width: 100%;
	bottom: 0;
	z-index: 999;
	border-top: .3px solid #E0E0E0;
	background-color: #FCFCFC;
	.popup{
		 background-color: #fff;
		 min-height: 140px;
		 padding: 10px;
		 z-index: 99;
		 transition: height .5s;
		 &::after{
			 display: block;
			 content: '';
			 clear: both;
		 }
		.slot{
			display: inline-block;
			background-color: #EBEBEB;
			padding:0 5px;
			border-radius: 10px;
			height: 20px;
			line-height: 20px;
			font-size: 10px;
			margin: 10px 0;
		}
		.uni-editor{ 
			min-height: 40px;
			width: 500rpx;
			padding: 10px;
			background-color:#E0E0E0;
			border-radius: 10px;
			.editor{
				width: 500rpx;
				min-height: 60px;
				line-height: 30px;
				font-size: 14px;
				outline: none;
			}
		}
		.btn{
			position: absolute;
			margin-top: -30px;
			left: 580rpx;
		}
		.reply-bottom{
			height: 30px;
			line-height: 30px;
			.img{
				height: 30px;
				width: 30px;
				float: left;
			}
		}
	}
	
	.emoji{
		width: 750rpx;
		margin-left: -20rpx;
		background-color: #ededed;
		transition: all .5s;
		display: flex;
		justify-content:flex-start;
		flex-wrap:wrap;
		image{
			height: 30px;
			width: 30px;
			margin: 0 calc(93.75rpx - 30px);
		}
	}
	
	.image-view{
		.show-image{
			float: left;
			height: 225rpx;
			width: 225rpx;
			margin-top: 20px;
			box-sizing: border-box;
			border: 1px dashed #000;
			border-radius: 10px;
			margin-right: 10rpx;
			text-align: center;
			line-height: 100px;
		}
	}
	
}
</style>
