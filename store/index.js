import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		login:false,
		userAccount:null,
		user:null,
		reply:{
			show:false,
		    type:null,
			data:{}
		}
		
	},
    mutations,
    actions: {}
})
export default store