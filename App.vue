<script>
	export default {
		onLaunch: function() {
			uni.hideShareMenu({
				menus: ['shareAppMessage', 'shareTimeline']
			})
			// uni.redirectTo({
			// 	url: "/pages/login/index"
			// })
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";

	* {
		padding: 0;
		margin: 0;
		list-style: none;
		box-sizing: border-box;
	}
</style>