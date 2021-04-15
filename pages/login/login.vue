<template>
	<view class="">
		<input type="number" value="" v-model="userAccount" placeholder="请输入登录账号"/>
		<input type="password" value="" v-model="userPassword" placeholder="请输入密码"/>
		<button type="default" class="login" @click="login()">登录</button>
		{{loginMes}}
	</view>
</template>

<script>
	export default{
		name:'login',
		data(){
			return{
				userAccount:null,
				userPassword:null,
				loginMes:''
			}
		},
		// onHide(){
		// 	uni.switchTab({
		// 		url:"../index/index"
		// 	})
		// },
		methods:{
			login(){
				if(!this.userAccount || !this.userPassword){
					this.loginMes = '请输入用户名或密码'
				}else{
					this.$request('/login',{
						account:this.userAccount,
						password:this.userPassword
					},'post').then(res =>{
						switch(res){
							case 0: 
								this.loginMes ='登录成功';
								this.$store.commit('updateLogin');
								this.$store.commit('updateUserAccount',this.userAccount);
								this.$request('/selectuser',{
									account:this.userAccount
								},'post').then(res =>{
									this.$store.commit('updateUser',res[0])
								});
								uni.switchTab({
									url:'../user/user'
								});
								// uni.navigateBack();
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
			
			 // sign(){
			 //        if(!this.userName || !this.userpwd){
			 //            this.loginMes = '请输入用户名或密码'
			 //        }else{
			 //            request({
			 //            method:'post',
			 //            url: '/add',
			 //            data: {
			 //                username: this.userName,
			 //                password: this.userpwd
			 //            }
			 //        }).then( res => {
			 //            switch(res.data){
			 //            case 0:
			 //                this.loginMes ="注册成功";
			 //                this.login();
			 //                break;
			 //            case -1:
			 //                this.loginMes ="用户名已存在";
			 //                break;
			 //                }
			 //            })
			 //            .catch( err => {
			 //                console.log(err);
			 //            })
			 //    } 
		}
	}
</script>

<style>
	page{
		background-color: #f9f9f9;
	}
	input{
		width: 70%;
		margin: 0 auto;
		height: 40px;
		padding: 5px 5%;
		background-color: #fff;
		margin-top: 50px;
	}
	.login{
		width: 100px;
		height: 30px;
		line-height: 30px;
		margin-top: 50px;
	}
</style>
