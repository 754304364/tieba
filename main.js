import Vue from 'vue'
import App from './App'
import store from './store/index.js'

import uView from 'uview-ui';
Vue.use(uView);
Vue.prototype.$store = store
//引入 封装 的 网络请求
import request from 'components/request/request.js'
Vue.prototype.$request = request
//  引入全局函数
import global from 'global/global.js'
Vue.prototype.$global = global

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
