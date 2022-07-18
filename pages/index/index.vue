<template>
	<view class="container">
		<cu-custom :manualBack="scanCode">
			<block slot="backText" style="padding:0 10px;">
				<uni-icons type="scan" size="22" color="#fff"></uni-icons>
			</block>
			<block class="info-ifo" slot="content">首页</block>
		</cu-custom>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {
			scanCode() {

			}
		}
	}
</script>

<style>
	.container {
		padding: 0;
		font-size: 15px;
		line-height: 24px;
	}
</style>
