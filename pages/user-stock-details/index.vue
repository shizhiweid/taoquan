<!-- 详情页组件 -->
<template>
	<view class="details">
		<!-- 正文内容 -->
		<view class="product-info">
			<text>股票id：</text>
			<text>股票名：</text>
		</view>
		<view class="product-info">
			<text>股票数：</text>
			<text>股票单股价格：</text>
		</view>
		<view class="product-info">
			<text>总价格：</text>
		</view>

		<view class="button-group">
			<view v-for="(button, index) of buttons" :key="index" class="button-item"
				:class="{ 'active': selectedSaleAnalysis === button.label }" @click="handleButtonClick(button)">
				{{ button.label }}
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				selectedSaleAnalysis: "今年",
				buttons: [{
						label: '卖出',
						getUrl: 'getTerminalYearSaleInfo',
						xlength: 12
					},
					{
						label: '买入',
						getUrl: 'getTerminalMonthSaleInfo',
						xlength: 30
					},
				],

			}
		},
		onLoad() {
			uni.hideShareMenu({
				menus: ['shareAppMessage', 'shareTimeline']
			})
		},
		methods: {
			handleButtonClick(button) {
				this.selectedSaleAnalysis = button.label; //切换选中的button
			},
		}
	}
</script>

<style scoped lang="scss">
	.details {
		padding: 0 20rpx;
		width: 100vw;
		height: 100vh;
		// overflow: hidden;

		.product-info {
			display: flex;
			justify-content: space-between;

		}

		.button-group {
			display: flex;
			margin: 20rpx 30rpx;
			width: 90vw;
			position: fixed;
			bottom: 10rpx;
		}

		.button-item {
			flex: 1;
			text-align: center;
			padding: 10px;
			border: 1px solid #ccc;
			border-left: none;
			cursor: pointer;
		}

		.button-group .button-item:first-child {
			border-top-left-radius: 20px;
			border-bottom-left-radius: 20px;
			border-top-right-radius: 0px;
			border-bottom-right-radius: 0px;
			border-left: 1px solid #ccc;
		}

		.button-group .button-item:last-child {
			border-top-left-radius: 0px;
			border-bottom-left-radius: 0px;
			border-top-right-radius: 20px;
			border-bottom-right-radius: 20px;
		}

		.button-group .button-item:not(:first-child):not(:last-child) {
			border-radius: 0px;
		}

		.active {
			background-color: #007aff;
			color: #fff;
			border: none;
			border-top: 1px solid #007aff;
			border-bottom: 1px solid #007aff;
		}

	}
</style>