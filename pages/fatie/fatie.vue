<template>
	<view>
		<!-- 顶部自定义导航栏区域 -->
		<u-navbar back-icon-name='close'  title="发布帖子">
			<u-button 
			class="top-navbar-btn" 
			slot="right" 
			:hair-line=false
			@click="publish" 
			:disabled="title === '' && textarea === '' && imgPath.length ===0 && serverVideoPath ===''"
			:style="{color:title === '' && textarea === '' && imgPath.length ===0 && serverVideoPath ==='' ? '#a0cfff' : '#2979ff'}">
			发布
			</u-button>
		</u-navbar>
		<!-- 选择吧 -->
		<view class="select-acticle" @click="changeActicle">
			<u-icon name='more-circle'></u-icon>
			<text style="margin:0 10px;">{{topicName}}</text>
			<text class="select-prompt" v-if="topicId === null">选择合适的吧会有更多的点赞哦~</text>
			<view style="float: right;"><u-icon name='arrow-right'></u-icon></view>
		</view>
		
		<input class="title" type="text" placeholder="这个帖子火就差这个标题了" v-model="title"/>
		<view class="container">
			<textarea v-model="textarea" auto-height='true' class="txt" style="height: auto !important;" placeholder="来吧 , 尽情发挥吧..."></textarea>
		</view>
		
		<!-- 添加的图片显示区域 -->
		<view v-if="videoPath === ''" class="addImg">
			<image class="image" v-for="(item,index) of imgPath" :src="item" mode='aspectFill' :key='index' @click="previewImage(item)"></image>
			<view @click="addImage"  class="add"><image class="img" src="../../static/add.png" ></image></view>
		</view>
		
		<!-- 视频显示区域 -->
		<view v-else class="video-container">
			<u-line-progress style='width: 600rpx;' :percent="percent" :show-percent="true"></u-line-progress>
			<u-icon @click='clearVideo' class='video-icon' name="close" color='#fa3534' size='50'></u-icon>
			<video class="video" :src="videoPath" controls></video>
		</view>
		<u-button v-if="videoPath === ''" @click='addVideo' type="primary" shape="circle" size="medium">上传视频</u-button>
		
		<!-- 弹出层  选择 吧 -->
		<u-popup mode="bottom" height="90%" border-radius=20 v-model="popupShow">
			<view class="popup-top"> <text style="float: left;" @click="popupShow = false">取消</text> <text>选择吧</text> </view>
			<view class="topic-list" v-for="(item,index) in topicArr" :key='index' @click="selectTopic(item)">
				<view class="topic-image"><u-image :src='item.img' width='50px' height='50px' border-radius='15px'></u-image></view>
				<view><text>{{item.name}}</text></view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	
	export default {
		name:"fatie",
		data() {
			return {
				popupShow:false, //弹出层是否显示
				topicId:null,
				topicName:'选择吧',
				title:'',   // 输入的 帖子 标题
				textarea:'',  //  输入的帖子正文   	
				imgnum:0,  //  选择的图片数量
				imgPath:[],  //  选择的图片 的 路径数组
				serverImgPath:[],  //  服务器返回的 图片 路径 数组
				imgNum:0  ,//记录图片有没有上传完成,
				videoPath:'', // 上传的视频地址,
				clearUpVideo:false,
				serverVideoPath:'',
				percent:0,  //视频上传进度
				topicArr:[], // 吧列表
				
			};
		},
		created() {
			this.$request('/topic',{},'get').then( res =>{
				this.topicArr = res
			})
		},
		watch:{
			imgNum(val){
				if(this.imgNum === this.imgPath.length){
					this.release()
				}
			}
		},
		methods:{
			// 发送 帖子 功能
			release(){
				let myDate = new Date();
				this.$request('/postArticle',{
				topicid:this.topicId,
				title:this.$global(this.title),
				txt:this.$global(this.textarea),
				img:''+this.serverImgPath,
				video:this.serverVideoPath,
				userid:this.$store.state.user.id,
				username:this.$store.state.user.name,
				userimg:this.$store.state.user.img,
				time:myDate.getFullYear()+"-"+(myDate.getMonth()+1)+"-"+myDate.getDate()+" "+myDate.getHours()+":"+myDate.getMinutes(),
				second:new Date().getTime()
				},'post').then(res =>{
					if(res === 0){
						uni.showToast({
						    title: '发送成功',
							icon:'success',
						    duration: 1000,
							success() {
								setTimeout(()=>{
									uni.switchTab({
									    url: '/pages/index/index'
									});
								},1000)
							}
						});
					}
				})
			},
			//选择发布的贴吧
			selectTopic(item){
				this.topicId = item.id
				this.topicName = item.name
				this.popupShow = false
			},
			// 导航栏发布按钮
			publish(){
				if(this.topicId === null){
					console.log(123)
					this.popupShow = true
				}else{
					if(this.imgPath.length > 0){
						for(let i of this.imgPath){
							uni.uploadFile({
								url:"http://101.132.235.218:4000/api/imgacticle",
								  filePath:i,
								  name:'avatar',	
								  success: (res) => {
									  this.serverImgPath.push(res.data)
									  this.imgNum ++
								  }
							})
						}
					}else{
						this.release()
					}		
				}
				
			},
			//添加图片
			addImage(){
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
			//预览图片
			previewImage(src){
				console.log(src)
				uni.previewImage({
					current:src,
					urls:this.imgPath,
					indicator:"default",
					loop:true
				})
			},
			clearVideo(){
				this.clearUpVideo = true
				this.videoPath = ''
			},
			// 选择视频上传
			addVideo(){
				uni.chooseVideo({
					success:(res) => {
						this.videoPath = res.tempFilePath
						let videoName = new Date().getTime()+"_"+res.name
						const uploadTask = uni.uploadFile({
							url:"http://101.132.235.218:4000/api/video",
							  filePath:this.videoPath,
							  name:'avatar',
							  formData: {
							  	'name': new Date().getTime()+"_"+res.name
							  },
							  success: (res) => {
								  this.serverVideoPath = 'http://www.res.goomee.top/video/'+videoName
								  uni.showToast({
								  	title:'上传成功',
									duration:1000
								  })
								  this.percent = 100
							  }
						})
						uploadTask.onProgressUpdate(res => {
							this.percent = res.progress;
							if(this.percent === 100){
								this.percent = 99
							}
							if(this.clearUpVideo === true){
								uploadTask.abort();
								uni.showToast({
									title:'中断上传成功',
									duration:1000
								})
							}
						});
					}
				})
			},
			changeActicle(){
				this.popupShow = true
			}
		}
	}
	
</script>

<style lang="scss">
	page{
		padding:0 15rpx;
		background-color: #fff;
	}
	.top-navbar-btn{
		border: none !important;
		background-color: #fff !important;
		padding: 0 15rpx;
		font-size: 16px;
	}
	.select-acticle{
		height: 40px;
		line-height: 40px;
		.select-prompt{
			padding: 5px 10px;
			border-radius: 10px;
			background-color: rgb(245,245,245);
		}
	}
	.title{
		height: 40px;
		line-height: 40px;
		border-top: .1px solid #EDEDED;
		border-bottom: .1px solid #EDEDED;
		font-size: 14px;
	}
	.container{
		.txt{
			min-height: 80px !important;
			line-height: 20px;
			padding: 10px 0;
			font-size: 14px;
		}
		
	}
	
	.video-container{
		position: relative;
		width: 600rpx;
		.video-icon{
			position: absolute;
			top: calc(28rpx + 15px);
			right: 20rpx;
			z-index: 999;
		}
		.video{
			margin-top: 5px;
			width: 600rpx;
			height: 400rpx;
		}
	}
		
	.addImg{
		&::after{
			display: block;
			content: '';
			clear: both;
		}
		.image{
			display: block;
			float: left;
			height: 225rpx;
			width: 225rpx;
			margin-top: 20px;
			margin-right: 15rpx;
			box-sizing: border-box;
			border: .5px solid #000;
			border-radius: 10px;
		}
		//添加图片
		.add{
			float: left;
			height: 225rpx;
			width: 225rpx;
			margin-top: 20px;
			box-sizing: border-box;
			border: 1px dashed #000;
			border-radius: 10px;
			text-align: center;
			line-height: 100px;
			.img{
				height: 40px;
				width: 40px;
			}
		}
	}
	
	.popup-top{
		height: 40px;
		padding: 15px;
		text-align: center;
	}
	.topic-list{
		height: 50px;
		margin: 20px 0 10px 15px;
		line-height: 50px;
		font-size: 16px;
		.topic-image{
			float: left;
			margin-right: 20px;
		}
	}
</style>