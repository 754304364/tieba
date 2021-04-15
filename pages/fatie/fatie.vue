<template>
	<view>
		<input class="title" type="text" placeholder="这个帖子火就差这个标题了" v-model="title"/>
		<view class="container">
			<textarea v-model="textarea" class="txt" style="height: auto !important;" placeholder="来吧 , 尽情发挥吧..."></textarea>
		</view>
		<view class="addImg">
			<image class="image" v-for="(item,index) of imgPath" :src="item" mode='aspectFill' :key='index' @click="previewImage(item)"></image>
			<view @click="addImage"  class="add"><image class="img" src="../../static/add.png" ></image></view>
		</view>
		<button type="default" size="mini"  :disabled="title === '' && textarea === '' && imgPath.length ===0" @click="publish">发布</button>
	</view>
</template>

<script>
	
	export default {
		name:"fatie",
		data() {
			return {
				title:'',
				textarea:'',
				fontSize: '13px',
				imgnum:0,
				imgPath:[],
				serverImgPath:[],
				imgNum:0  //记录图片有没有上传完成
			};
		},
		watch:{
			imgNum(val){
				if(this.imgNum === this.imgPath.length){
					console.log(this.serverImgPath)
					let myDate = new Date();
					this.$request('/postArticle',{
					topicid:4,
					title:this.title,
					txt:this.textarea,
					img:''+this.serverImgPath,
					userid:this.$store.state.user.id,
					username:this.$store.state.user.name,
					userimg:this.$store.state.user.img,
					time:myDate.getFullYear()+"-"+(myDate.getMonth()+1)+"-"+myDate.getDate()+" "+myDate.getHours()+":"+myDate.getMinutes(),
					second:new Date().getTime()
					},'post').then(res =>{
						console.log(res)
					})
				}
			}
		},
		methods:{
			publish(){
				
				if(this.imgPath.length > 0){
					for(let i of this.imgPath){
						uni.uploadFile({
							url:"http://101.132.235.218:4000/api/imgacticle",
							  filePath:i,
							  name:'avatar',	
							  success: (res) => {
								  // this.serverImgPath += res.data+','
								  this.serverImgPath.push(res.data)
								  this.imgNum ++
							  }
						})
					}
				}else{
					let myDate = new Date();
					this.$request('/postArticle',{
					topicid:1,
					title:this.title,
					txt:this.textarea,
					img:''+this.serverImgPath,
					userid:this.$store.state.user.id,
					username:this.$store.state.user.name,
					userimg:this.$store.state.user.img,
					time:myDate.getFullYear()+"-"+(myDate.getMonth()+1)+"-"+myDate.getDate()+" "+myDate.getHours()+":"+myDate.getMinutes(),
					second:new Date().getTime()
					},'post').then(res =>{
						console.log(res)
					})
				}
				// if(this.imgNum === this.imgPath.length){
				// 	console.log(this.serverImgPath)
				// }
				// if(this.imgNum === this.imgPath.length){
				// 	this.$request('/postArticle',{
				// 	baid:1,
				// 	title:this.title,
				// 	txt:this.textarea,
				// 	img:this.serverImgPath,
				// 	// userid:this.$store.state.user.account,
				// 	userid:754304364,
				// 	time:myDate.getFullYear()+"-"+(myDate.getMonth()+1)+"-"+myDate.getDate()+" "+myDate.getHours()+":"+myDate.getMinutes(),
				// 	second:new Date().getTime()
				// 	},'post').then(res =>{
				// 		console.log(res)
				// 	})
				// }
				
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
			}
		}
	}
	
</script>

<style lang="scss">
	page{
		padding: 15rpx;
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
			padding-top: 10px;
			font-size: 14px;
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
				// margin-top: 30px;
				height: 40px;
				width: 40px;
			}
			// background-image: url(../../static/add.png);
			// background-size: cover;
		}
		//添加图片
	}
</style>