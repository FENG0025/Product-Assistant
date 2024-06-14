<template>
	<view>
		<!-- 图片轮播容器 -->
		<view class="swiper-container">
			<!-- UV-Swiper 轮播图组件 -->
			<uv-swiper :list="selectedGoods.img" height="340" previousMargin="30" nextMargin="30" circular autoplay
				interval="5000" radius="30" bgColor="#ffffff">
			</uv-swiper>
		</view>

		<!-- 标题 价格 -->
		<view class="info-box goods-info">
			<view class="price">{{ selectedGoods.name }}</view>
			<view class="title">
				{{ selectedGoods.price }}
			</view>
		</view>
	</view>

	<view class="container">
		<view class="table-container">
			<uv-sticky bgColor="#ffffff">
				<view class="table-row table-header">
					<text class="table-cell">检测项目</text>
					<!-- 根据条件渲染列 -->
					<template v-if="selectedGoods.goods_id >= 0 && selectedGoods.goods_id <= 7">
						<text class="table-cell">检测试剂</text>
						<text class="table-cell">预制试剂</text>
						<text class="table-cell">比色皿</text>
					</template>
					<template v-else>
						<text class="table-cell">检测范围</text>
					</template>
				</view>
			</uv-sticky>
			<view class="table-row" v-for="(param, index) in selectedGoods.parameter" :key="index"
				:class="{ 'highlighted': param.highlighted }">
				<!-- 检测项目对应parameters_name -->
				<text class="table-cell">{{ param.parameters_name }}</text>
				<!-- 根据条件渲染列 -->
				<template v-if="selectedGoods.goods_id >= 0 && selectedGoods.goods_id <= 7">
					<text class="table-cell">{{ param.detect_range }}</text>
					<text class="table-cell">{{ param.precast_range }}</text>
					<text class="table-cell">{{ param.cuvettes_range }}</text>
				</template>
				<template v-else>
					<text class="table-cell">{{ param.range }}</text>
				</template>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selectedGoods: {
					parameter: [],
				},
			};
		},
		onLoad(options) {
			const params = options;
			const parameters = params.parameters.split(',').map(param => {
				const [parameters_name, range, detect_range, precast_range, cuvettes_range, general] = param.split(
					':');
				return {
					parameters_name,
					range,
					detect_range,
					precast_range,
					cuvettes_range,
					general
				};
			});

			this.selectedGoods = {
				goods_id: parseInt(params.goods_id),
				name: params.name,
				price: params.price,
				img: params.img.split(','),
				parameter: parameters,
				selectedParameter: params.selectedParameter // 保存选中的检测项目名称
			};

			uni.setNavigationBarTitle({
				title: params.name
			});

			const selectedGeneral = this.selectedGoods.parameter.find(param => param.parameters_name === this.selectedGoods
				.selectedParameter)?.general;

			if (selectedGeneral) {
				this.selectedGoods.parameter.forEach(param => {
					if (param.general === selectedGeneral) {
						param.highlighted = true;
					}
				});
			}

			// 将高亮项目移到数据数组的第一个位置
			const highlightedParams = this.selectedGoods.parameter.filter(param => param.highlighted);
			highlightedParams.forEach(param => {
				const index = this.selectedGoods.parameter.indexOf(param);
				this.selectedGoods.parameter.splice(index, 1);
				this.selectedGoods.parameter.unshift(param);
			});
		},
	};
</script>

<style lang="scss">
	@import '@/uni_modules/uv-ui-tools/libs/css/color.scss';

	.swiper-container {
		height: 85vw; // 设置容器高度，根据需要进行调整
		margin-bottom: 5px;
		margin-top: 5px;
	}

	.info-box {
		width: 92%;
		padding: 20upx 4%;
		background-color: #fff;
		margin-bottom: 20upx;
	}

	.goods-info {
		.price {
			font-size: 46upx;
			font-weight: 600;
			color: #f47925;
		}

		.title {
			font-size: 30upx;
		}
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		/* 设置为顶部对齐 */
		height: 100vh;
	}

	.table-container {
		width: 90%;
		border: 1px solid #1e1e1e;
		border-collapse: collapse;
		margin-top: 20px;
	}

	.table-row {
		display: flex;
		flex-direction: row;
	}

	.table-header {
		font-weight: bold;
	}

	.table-cell {
		flex: 1;
		padding: 6px 4px;
		text-align: center;
		border: 1upx solid #1e1e1e;
	}

	.highlighted {
		background-color: #55ffff; // 突出显示选中的检测项目
	}
</style>