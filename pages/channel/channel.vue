<template>
	<view>
		<u-button @click='chooseVideo'>上传视频</u-button>
		
		<view class="video-container">
			<!-- <view style='width: 225rpx;' v-for="(item,index) in src" :key="index"> -->
				<u-line-progress style='width: 225rpx;' :percent="percent" :show-percent="true"></u-line-progress>
				<video class="video" src="http://www.res.goomee.top/video/1618710966364_VID_20210213_132301.mp4" controls></video>
			<!-- </view> -->
		</view>
		
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				src:[],
				percent:0,
				index:0
			}
		},
		methods:{
			chooseVideo(){
					uni.chooseVideo({
					success:(res) => {
						this.src.push(res.tempFilePath)
						const uploadTask = uni.uploadFile({
							url:"http://101.132.235.218:4000/api/video",
							  filePath:this.src[this.index],
							  name:'avatar',
							  formData: {
							  	'name': new Date().getTime()+"_"+res.name
							  },
							  success: (res) => {
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
						});
					}
				})
			}
		}
		
	}
</script>

<style lang="scss">
	.video-container{
		display: flex;
		justify-content: flex-start;
		.video{
			width: 220rpx;
			height: 220rpx;
		}
		
	}
	
</style>
