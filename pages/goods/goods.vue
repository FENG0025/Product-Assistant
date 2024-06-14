<template>
	<view>
		<!-- 商品列表 -->
		<view class="goods-list">
			<view class="product-list">
				<view class="product" v-for="(goods) in goodsData" :key="goods.goods_id" @tap="toGoods(goods)">
					<image mode="widthFix" :src="goods.img[0].url"></image>
					<view class="name">{{ goods.name }}</view>
					<view class="info">
						<view class="price">{{ goods.price }}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {

		data() {
			return {
				goodsData: []
			};
		},
		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad(options) {
			const goodsData = JSON.parse(options.goodsData);
			this.goodsData = goodsData;
		},

		methods: {
			toGoods(goods) {
				const imgUrls = goods.img.map(img => img.url).join(',');
				const parameters = goods.parameter.map(param =>
					`${param.parameters_name}:${param.range}:${param.detect_range}:${param.precast_range}:${param.cuvettes_range}:${param.general}`
				).join(',');

				uni.navigateTo({
					url: `/pages/goods/goodsdetail?goods_id=${goods.goods_id}&name=${goods.name}&price=${goods.price}&img=${imgUrls}&parameters=${parameters}&selectedParameter=${this.selectedParameter}`,
					success(res) {
						// console.log("跳转成功", res);
					},
					fail(err) {
						console.error("跳转失败", err);
					}
				});
			},
		}
	};
</script>
<style lang="scss">
	.icon {
		font-size: 26upx;
	}

	.header {
		width: 92%;
		padding: 0 4%;
		height: 79upx;
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		position: fixed;
		top: 0;
		z-index: 10;
		background-color: #fff;
		border-bottom: solid 1upx #eee;

		.target {
			width: 20%;
			height: 60upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 28upx;
			margin-bottom: -2upx;
			color: #aaa;

			&.on {
				color: #555;
				border-bottom: 4upx solid #f06c7a;
				font-weight: 600;
				font-size: 30upx;
			}
		}
	}

	.place {
		background-color: #ffffff;
		height: 100upx;
	}

	.goods-list {
		.loading-text {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 60upx;
			color: #979797;
			font-size: 24upx;
		}

		.product-list {
			width: 92%;
			padding: 0 4% 3vw 4%;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;

			.product {
				width: 48%;
				border-radius: 20upx;
				background-color: #fff;
				margin: 0 0 15upx 0;
				box-shadow: 0upx 5upx 25upx rgba(0, 0, 0, 0.1);

				image {
					width: 100%;
					border-radius: 20upx 20upx 0 0;
				}

				.name {
					width: 92%;
					padding: 10upx 4%;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					overflow: hidden;
					text-overflow: ellipsis; // 如果需要在截断处显示省略号
					line-height: 1.5em; // 调整行高，保证两行显示
					height: 3em; // 设置高度为两行的高度
					font-size: 30upx;
				}

				.info {
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					width: 92%;
					padding: 10upx 4% 10upx 4%;

					.price {
						color: #e65339;
						font-size: 30upx;
						font-weight: 600;
					}

					.slogan {
						color: #807c87;
						font-size: 24upx;
					}
				}
			}
		}
	}
</style>