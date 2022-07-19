<script>
	import Vue from 'vue'
	export default {
		onLaunch: function() {
			uni.getSystemInfo({
				success: function(e) {
					// app
					/* #ifdef APP-PLUS */
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					/* #endif */

					// 小程序
					/* #ifdef MP */
					console.log(e);
							Vue.prototype.StatusBar = e.safeAreaInsets.top-5;
					Vue.prototype.CustomBar = e.safeAreaInsets.top + 45;
					/* #endif */

					// H5
					/* #ifdef H5 */
					Vue.prototype.StatusBar = 0
					Vue.prototype.CustomBar = 40
					/* #endif */

				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},

	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';

	// 设置整个项目的背景色
	page {
		background-color: #fff;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
</style>
