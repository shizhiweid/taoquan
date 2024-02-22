import App from './App'
import uView from "uview-ui";
import store from './store/index.js'
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$store = store
Vue.use(uView);
const app = new Vue({
	...App
})
app.$mount()
// #endif