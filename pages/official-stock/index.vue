<template>
	<view class="table">
		<view class="tr">
			<view class="th">股票名</view>
			<view class="th">获取股票时间</view>
			<view class="th">股票单股价钱</view>
			<view class="th">股票数
			</view>
		</view>
		<view class="tr" v-for="item of officialList" :key="item.stockId">
			<view class="td" @click="details(item)">
				{{item.stockName}}
			</view>
			<view class="td">{{item.getStockTime}}</view>
			<view class="td">{{item.stockPrice}}</view>
			<view class="td">{{item.stockNumber}}</view>
		</view>
	</view>
</template>

<script>
	import {
		stockList
	} from "@/utils/api.js"
	export default {
		data() {
			return {
				officialList: {}
			}
		},
		onLoad() {
			this.getStockList()
		},
		methods: {
			// 查看全部官方股票价格接口
			getStockList() {
				stockList().then(res => {
					this.officialList = res.data
					console.log('res', res)
				})
			},
			details(item) {
				let data = JSON.stringify(item)
				uni.navigateTo({
					url: `/pages/official-stock-details/index?data=${data}`,
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.table {
		width: 100%;
		border-radius: 8rpx;
		display: table;
		border: 1px solid #EFEFEF;
		border-collapse: collapse;
		font-size: 28rpx;

		.th {
			text-align: center;
			color: #333333;
			padding: 20rpx 0;
			font-weight: bolder;
			display: table-cell;
		}

		.td {
			text-align: center;
			padding: 20rpx 0;
			display: table-cell;
		}

		.tr {
			display: table-row;
		}
	}

	.table .tr:nth-child(1) {
		background-color: #F4F4F4;
	}

	.table .tr:nth-child(2) {
		background: linear-gradient(270deg, #FFFFFF 0%, #FFF4E8 100%);
	}

	.table .tr:nth-child(3) {
		background: linear-gradient(270deg, #FFFFFF 0%, #E8F3FF 100%);
	}

	.table .tr:nth-child(4) {
		background: linear-gradient(270deg, #FFFFFF 0%, #FFEFF2 100%);
	}
</style>