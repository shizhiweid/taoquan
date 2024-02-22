import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let lifData = {}
try {
	lifData = uni.getStorageSync('lifeData')
} catch (e) {

}
const store = new Vuex.Store({
	state: {
		//公共的变量，这里的变量不能随便修改，只能通过触发mutations的方法才能改变
		accessToken: "", // 用户token
		user: "", // 用户个人信息
	},
	mutations: {
		//相当于同步的操作
		// 用户token
		setAccessToken(state, data) {
			console.log(state, data)
			state.accessToken = data
		},
		// 用户个人信息
		setUser(state, data) {
			state.user = data
		},
	},
	actions: {
		//相当于异步的操作,不能直接改变state的值，只能通过触发mutations的方法才能改变
	}
})
export default store