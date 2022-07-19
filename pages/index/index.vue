<template>
	<view class="main">
		<!-- 自定义导航栏 -->
		<cu-custom :manualBack="scanCode">
			<block slot="backText" style="padding:0 16px;">
				<uni-icons type="scan" size="22" color="#fff"></uni-icons>
			</block>
			<block class="info-ifo" slot="content">首页</block>
		</cu-custom>
		<!-- 内容区域 -->
		<view class="content" :style="[{'padding-top':(CustomBar + 12) + 'px'}]">
			<image class='bannerOm' src="@/static/index/banner1.png" alt="">
				<view class='imgList'>
					<view class="imgItem" v-for="(item,index) in itemList" :key="index">
						<image :src="item.img" mode=""></image>
						<view class="titItem">{{item.tit}}</view>
					</view>
				</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				CustomBar: this.CustomBar,
				itemList: [{
						img: "../../static/index/guangggl.png",
						tit: "标准广告"
					}, {
						img: "../../static/index/zuotaigl.png",
						tit: "高级设置"
					}, {
						img: "../../static/index/czzx.png",
						tit: "充值中心"
					}, {
						img: "../../static/index/wodsb.png",
						tit: "我的设备"
					},{
						img: "../../static/index/gerzx.png",
						tit: "用户中心"
					},	{
						img:"../../static/index/sucku.png",
						tit:"素材库"
					}
				]
			}
		},
		methods: {
			scanCode() {

			}
		}
	}
</script>

<style scoped lang="scss">
	.content {
		width: calc(100% - 24px);
		margin: 0 auto;


	}

	.bannerOm {
		width: 100%;
		height: 316rpx;
	}

	.imgList {

		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-top: 34rpx;

		.imgItem {
			position: relative;
			margin-bottom: 30rpx;

			image {
				width: 336rpx;
				height: 200rpx;
			}

			.titItem {
				font-size: 40rpx;
				font-weight: bold;
				color: #FFFFFF;
				position: absolute;
				top: 44rpx;
				left: 28rpx;
			}
		}
	}
</style>
