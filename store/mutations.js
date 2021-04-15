export default{
	updateLogin(state){
		state.login = true;
	},
	updateUserAccount(state,user){
		state.userAccount = user
	},
	updateUser(state,user){
		state.user = user
	},
	updateReplyShow(state,type){
		state.reply.show = type
	},
	updateReplyType(state,type){
		state.reply.type = type
	},
	updateReplyData(state,data){
		state.reply.data = data
	},
}