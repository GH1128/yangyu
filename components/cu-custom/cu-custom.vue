<template>
	<view>
		<view :class="isNeedBg ? 'cu-custom cu-custom-bg':'cu-custom'" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar fixed" :style="style" :class="[bgImage!=''?'none-bg text-white bg-img':'',bgColor]">
				<!-- 右边图标 -->
				<view class="action">
					<view class="range" @click="BackPage">
						<slot name="backText"></slot>
					</view>
				</view>
				<!-- 中间标题 -->
				<view class="content">
					卖点智控
				</view>
				<view class="right">
					<slot name="right"></slot>
				</view>
			</view>
			<image v-if="bgImage" :src="bgImage" class="postyle" :style="[{height:CustomBar + 'px'}]"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar
			};
		},
		name: 'cu-custom',
		computed: {
			style() {
				var StatusBar = this.StatusBar;
				var CustomBar = this.CustomBar - StatusBar;
				var style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
				return style
			}
		},
		props: {
			bgColor: {
				type: String,
				default: ''
			},
			isBack: {
				type: [Boolean, String],
				default: false
			},
			isNeedBg: {
				type: Boolean,
				default: true
			},
			bgImage: {
				type: String,
				default: ''
			},
			// 自定义左侧事件
			manualBack: {
				type: Function
			}
		},
		methods: {
			BackPage() {
				if (this.manualBack) {
					this.manualBack();
				} else {
					uni.navigateBack({
						delta: 1
					});
				}
			}
		}
	}
</script>

<style lang="scss">
	.cu-custom-bg {
		background: linear-gradient(to right, #001F9F 0%, #006BFD 100%);
	}

	.cu-custom {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		color: white;
		z-index: 9999;
		font-size: 15px;

		.action {
			width: 22px;
		}

		.fixed {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 16px;

			.content {
				text-align: center;
			}

			.right {
				width: 22px;
			}

		}

		.postyle {
			position: fixed;
			width: 100%;
			top: 0rpx;
			left: 0rpx;
			z-index: 2;
		}
	}
</style>
