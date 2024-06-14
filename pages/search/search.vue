<template>
	<view class="check">
		<uni-section type="line">
			<view class="uni-px-5 uni-pb-5">
				<view class="text">产品类型：</view>
				<uni-data-checkbox mode="tag" v-model="selectedCategory" :localdata="category" selected-color="#c2e8ff"
					@change="updateCategories"></uni-data-checkbox>
			</view>
		</uni-section>
		<view class="container">
			<uni-card :is-shadow="false" is-full>
				<text class="text" style="padding-left: 10px; padding-right: 10px; padding-bottom: 10px;">检测项目:</text>
			</uni-card>
			<uni-section title="基本用法" type="line">
				<view class="example-body">
					<uni-combox v-model="selectedParameter" :candidates="parameters" placeholder="选择参数"
						class="parameters_input" :border="false">
					</uni-combox>
				</view>
			</uni-section>
		</view>
	</view>
	<!-- 	<view class="range">
		<view class="parameters_range">
			<text class="text" style="padding-left: 10px; padding-right: 10px; padding-bottom: 10px;" >量程筛选</text>
		</view>
		<view class="choose_range">
			<input class="input_range" placeholder=""/>
			<text class="text_range">-</text>
			<input class="input_range" placeholder=""/>
		</view>
	</view> -->
	<view>
		<!-- 产品列表 -->
		<view class="goods-list">
			<view class="product-list">
				<view class="product" v-for="(goods) in filteredGoodsList" :key="goods.goods_id" @tap="toGoods(goods)">
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
	import { goodsList } from '../../static/products/products'
	export default {
		data() {
			return {
				goodsList,
				parameters: [],
				selectedCategory: '仪器类',
				selectedParameter: '', // 选择的参数
				category: []
			}
		},
		created() {
			const uniqueCategories = new Set(this.goodsList.map(item => item.category));
			this.category = Array.from(uniqueCategories).map(category => ({
				text: category,
				value: category
			}));
			this.updateCategories(); // 初始化参数列表
		},
		computed: {
			filteredGoodsList() {
				if (this.selectedCategory && this.selectedParameter) {
					return this.goodsList.filter(item => {
						return item.category === this.selectedCategory && item.parameter.some(param => param
							.parameters_name === this.selectedParameter);
					});
				} else if (this.selectedCategory) {
					return this.goodsList.filter(item => item.category === this.selectedCategory);
				} else {
					return this.goodsList;
				}
			}
		},
		methods: {
			updateCategories() {
				if (this.selectedCategory) {
					this.parameters = []; // 清空之前的参数列表
					this.goodsList.forEach(item => {
						if (item.category === this.selectedCategory) {
							item.parameter.forEach(param => {
								if (!this.parameters.includes(param.parameters_name)) {
									this.parameters.push(param.parameters_name);
								}
							});
						}
					});
				} else {
					this.parameters = []; // 若未选择类别，则清空参数列表
				}
				this.selectedParameter = ''; // 重置选择的参数
			},

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




		},
	}
</script>

<style lang="scss">
	.check {
		background-color: #f0ffff;
	}

	.text {
		font-size: 15px;
		color: #55557f;
		margin-top: 0px;
	}

	.uni-px-5 {
		padding-left: 10px;
		padding-right: 10px;
	}

	.uni-pb-5 {
		padding-bottom: 10px;
	}

	.parameters_input {
		height: 20px;
	}

	.range {
		background-color: #f0ffff;
	}

	.input_range {
		flex: 1;
		max-width: 45%;
		height: 100%;
		background-color: #F7F7F7;
		border-radius: 40upx;
		box-sizing: border-box;
		text-align: center;
		font-size: 24upx;
	}

	.text_range {
		color: #999;
	}

	.choose_range {
		padding: 0 30upx;
		height: 60upx;
		line-height: 60upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 30upx;
	}

	.goods-list {
		.product-list {
			background-color: azure;
			width: 90%;

			@if isDissolverTabClicked {
				padding: 5vw 5% 100% 5%;
				/* 点击到"消解仪"标签时的padding */
			}

			@else {
				padding: 5vw 5% 20vw 5%;
				/* 其他情况下的padding */
			}

			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;

			.product {
				width: 48%;
				border-radius: 30upx;
				background-color: white;
				margin: 0 0 45upx 0;
				box-shadow: 0upx 50upx 25upx rgba(0, 0, 0, 0.1);

				image {
					padding: 5px;
					width: 300rpx;
					height: 300rpx;
				}

				.name {
					width: 90%;
					padding: 5upx 4% 10upx 5%;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					overflow: hidden;
					text-overflow: ellipsis; // 如果需要在截断处显示省略号
					height: 3em; // 设置高度为两行的高度
					font-size: 28rpx;
					font-family: 苹方;
					line-height: 40rpx;
					color: #000000;
				}

				.info {
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					width: 92%;
					padding: 8upx 4% 10upx 4%;

					.price {
						font-size: 30rpx;
						font-family: MiSans;
						line-height: 30rpx;
						color: #d43030;
					}
				}
			}
		}
	}
</style>