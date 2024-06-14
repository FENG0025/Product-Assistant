<template>
	<uv-sticky bgColor="#f0ffff">
		<uv-search :showAction="true" actionText="搜索" :animation="true"  height="40"  search-icon-size="30"
			 @change="onChange" @search="onSearch" @custom="onSearch"></uv-search>
		<uv-tabs :list="list" line-width="30" @click="handleTabClick">
				<!-- <template v-slot:right>
					<view style="padding-left: 6px;padding-right: 15px;" @click="open">
						<uv-icon name="list" size="30" bold></uv-icon>
					</view>
				</template> -->
			</uv-tabs>
	</uv-sticky>
	<!-- <uv-popup ref="popup" mode="right" @change="change">
		<view style="width: 650rpx;">
			<uv-text text="量程范围"></uv-text>
		</view>
	</uv-popup> -->
	<view>
		<!-- 商品列表 -->
		<view class="goods-list" >
			<view class="product-list" :style="productListStyle">
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
import { goodsList } from '../../static/products/products.js';
export default {
  data() {
	Component:[
		goodsList
	]
    return {
      value: "",
      searchResult: [],
	  goodsList,
	  list:[
		  {id: 0 , name: "全部" },
		  {id: 1 , name: "快检仪" },
		  {id: 2 , name: "比色计" },
		  {id: 3 , name: "分析仪" },
		  {id: 4 , name: "消解仪" },
		  {id: 5 , name: "快检包和试剂" },
	  ],
	  selectedTabId: 0 ,// 默认选中全部
	  isDissolverTabClicked: false 
    };
  },
    computed: {
      filteredGoodsList() {
        if (this.selectedTabId === 0) {
			 return this.goodsList; // 全部商品
        } else if (this.selectedTabId === 1) {
          return this.goodsList.filter(goods => goods.goods_id >= 0 && goods.goods_id <= 3); // 快检仪
        } else if (this.selectedTabId === 2) {
          return this.goodsList.filter(goods => goods.goods_id >= 10 && goods.goods_id <= 13); // 比色计
        } else if (this.selectedTabId === 3) {
          return this.goodsList.filter(goods => goods.goods_id >= 4 && goods.goods_id <= 8); // 分析仪
        } else if (this.selectedTabId === 4) {
          return this.goodsList.filter(goods => goods.goods_id === 9); // 消解仪
        } else if (this.selectedTabId === 5) {
          return this.goodsList.filter(goods => goods.goods_id >= 14 && goods.goods_id <= 16); // 试剂
        }
      },
	   productListStyle() {
	              if (this.isDissolverTabClicked) {
	                  return {
	                      padding: "5vw 5% 82% 5%" // 点击到消解仪时的样式
	                  };
	              } else {
	                  return {
	                      padding: "5vw 5% 14vw 5%" // 其他情况下的样式
	                  };
	              }
	          }
	  
    },
  // onLoad: function (option) {
  //   console.log(option.cid);
	 //  console.log(option.cid);
	 //  console.log(option.name); 
  //   uni.setNavigationBarTitle({
  //     title: option.name
  //   });
  // },
  
  onPageScroll(e) {
    if (e.scrollTop >= 0) {
      this.headerPosition = "fixed";
    } else {
      this.headerPosition = "absolute";
    }
  },
  onPullDownRefresh() {
    setTimeout(() => {
      this.reload();
      uni.stopPullDownRefresh();
    }, 1000);
  },
  onReachBottom() {
    // uni.showToast({ title: '触发上拉加载' });
  },
  methods: {
	  // open(){
	  // 	this.$refs.popup.open();
	  // },
	  change(e){
	  	console.log('弹窗状态改变：',e);
	  },
		toast() {
						uni.showToast({
							icon: 'none',
							title: '插槽被点击'
						})
					},
	    handleTabClick(tab) {
	          this.selectedTabId = tab.id;
			  this.isDissolverTabClicked = (tab.id === 4); // 点击到消解仪标签时为true，其他情况为false
	      },
		toGoods(goods) {
		  // 将图片数组转换为以逗号分隔的字符串
		  const imgUrls = goods.img.map(img => img.url).join(',');
		
		  // 构造参数字符串
		  const parameters = goods.parameter.map(param => `${param.parameters_name}:${param.range}:${param.detect_range}:${param.precast_range}:${param.cuvettes_range}`).join(',');
		 
		  uni.navigateTo({
		    url: `/pages/goods/goodsdetail?goods_id=${goods.goods_id}&name=${goods.name}&price=${goods.price}&img=${imgUrls}&parameters=${parameters}`,
		    success(res) {
		      // console.log("跳转成功", res);
		    },
		    fail(err) {
		      console.error("跳转失败", err);
		    }
		  });
		},




    onChange(e) {
      this.value = e;
    },
	onSearch() {
	  if (this.value.trim() === "") {
	    // 如果搜索框为空，清空搜索结果数组
	    this.searchResult = [];
	  } else {
	    const keyword = this.value.trim().toLowerCase(); // 将输入的关键词转换为小写并去除首尾空格
	    // 在商品列表中搜索匹配关键词的商品名称、商品种类和参数名称
	    this.searchResult = this.goodsList.filter(goods => {
	      // 将商品名称、商品种类和参数名称转换为小写
	      const name = goods.name.toLowerCase();
	      const kind = goods.kind.toLowerCase();
	      const parameterNames = goods.parameter.map(param => param.parameters_name.toLowerCase());
	      // 如果商品名称中包含输入的关键词，或者商品种类中包含输入的关键词，或者参数名称中有任意一个包含输入的关键词，则该商品符合条件
	      if (name.includes(keyword) || kind.includes(keyword) || parameterNames.some(name => name.includes(keyword))) {
	        return true;
	      }
	      return false;
	    });
	
	    // 页面跳转或其他处理
	    if (this.searchResult.length > 0) {
	      // 如果有搜索结果
	      let goods = JSON.stringify(this.searchResult);
	      uni.navigateTo({
	        url: '/pages/goods/goods?goodsData=' + JSON.stringify(this.searchResult)
	      });
	    } else {
	      // 如果没有搜索结果
	      uni.showToast({
	        title: '暂无匹配商品'
	      });
	    }
	  }
	}




  },
};
</script>

<style lang="scss">
.uv-tabs {
  font-size: 20px;
}
.goods-list {
  .product-list {
	background-color: azure;
    width: 90%;
     @if isDissolverTabClicked {
            padding: 5vw 5% 100% 5%; /* 点击到"消解仪"标签时的padding */
        } @else {
            padding: 5vw 5% 20vw 5%; /* 其他情况下的padding */
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
