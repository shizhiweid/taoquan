import request from './index.js'; // 封装的request.js文件的位置

// 登录
export const userLogin = (data) => {
	return request(
		`/user/login`,
		'POST',
		data,
	)
}

// 用户个人信息
export const userInfo = (query) => {
	return request(
		`/user/userInfo`,
		'GET',
	)
}

// 查看全部官方股票价格
export const stockList = (query) => {
	return request(
		`/stock/stockList`,
		'GET',
	)
}
// 获取股票订单列表
export const taskList = (query) => {
	return request(
		`/task/taskList`,
		'GET',
	)
}
// 卖出官方股票
export const stockSell = (data) => {
	return request(
		`/stock/sell`,
		'PUT',
		data
	)
}
// 买入官方股票
export const stocBkuy = (data) => {
	return request(
		`/stock/buy`,
		'PUT',
		data
	)
}

// 查看自己虚拟货币总量
export const luckUser = (query) => {
	return request({
		url: `/luck/user`,
		method: 'GET',
		params: query,
	})
}