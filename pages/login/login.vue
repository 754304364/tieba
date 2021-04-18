<template>
	<view class="">
		<input class="input" type="number" value="" v-model="userAccount" :placeholder=" isRegistered? '请输入注册账号':'请输入登录账号'"/>
		<input class="input" type="password" value="" v-model="userPassword" placeholder="请输入密码"/>
		<!-- <button type="default" class="login" @click="login()"><u-icon name='arrow-rightward'></u-icon></button> -->
		<view style="display: flex;justify-content: center;">
			<image class="login" :src="src" @click="fn"></image>
		</view>
		<view v-if="!isRegistered" style="text-align: center;margin-top: 20px;font-size: 16px;" @click="isRegistered = true">新用户注册</view>
		<view v-else style="text-align: center;margin-top: 20px;font-size: 16px;" @click="isRegistered = false">返回登录</view>
	</view>
</template>

<script>
	import {login,registered,selectuser} from '../../global/api.js'
	export default{
		name:'login',
		data(){
			return{
				userAccount:null,
				userPassword:null,
				isRegistered:false,
				loginMes:'',
			}
		},
		watch:{
			loginMes(val){
				uni.showToast({
				    title: val,
					icon:'none',
				    duration: 1000
				});
			}
		},
		computed:{
			src(){
				if(this.userAccount !== null && this.userPassword !== null){
					return '../../static/login_btn.png'
				}else{
					return '../../static/login_btn2.png'
				}
			}
		},
		methods:{
			login(){
				if(!this.userAccount || !this.userPassword){
				}else{
					login({account:this.userAccount,password:this.userPassword}).then(res =>{
						switch(res){
							case 0: 
								this.loginMes ='登录成功';
								this.$store.commit('updateLogin');
								this.$store.commit('updateUserAccount',this.userAccount);
								selectuser({account:this.userAccount}).then(res =>{
									this.$store.commit('updateUser',res[0])
								});
								uni.navigateBack({
									delta:1
								})
								break;
							case -1:
								this.loginMes ="用户名或密码错误！";
								break;
							case 1:
								this.loginMes ="用户名或密码错误！";
								break;
						}
					})
				}
			},
			registered(){
				registered({account:this.userAccount,password:this.userPassword}).then( res =>{
					switch(res){
					    case 0:this.loginMes ="注册成功";this.login();
					    break;
					    case -1:this.loginMes ="用户名已存在";
					    break;
					}
				})
			},
			fn(){
				if(this.userAccount !== null && this.userPassword !== null){
					if(this.isRegistered){
						this.registered()
					}else{
						this.login()
					}
				}
			}
		    
		},
		
	}
</script>

<style>
	page{
		background-color: #fff;
	}
	.input{
		width: 70%;
		margin: 0 auto;
		height: 40px;
		padding: 5px 5%;
		border-radius: 20px;
		background-color: #ededed;
		margin-top: 50px;
	}
	.login{
		width: 80px;
		height: 80px;
		line-height: 80px;
		margin-top: 50px;
		border-radius: 50%;
	}
</style>
