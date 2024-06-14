"use strict";
const common_vendor = require("../../common/vendor.js");
const static_products_products = require("../../static/products/products.js");
const _sfc_main = {
  data() {
    return {
      value: "",
      searchResult: [],
      goodsList: static_products_products.goodsList,
      list: [
        { id: 0, name: "全部" },
        { id: 1, name: "快检仪" },
        { id: 2, name: "比色计" },
        { id: 3, name: "分析仪" },
        { id: 4, name: "消解仪" },
        { id: 5, name: "快检包和试剂" }
      ],
      selectedTabId: 0,
      // 默认选中全部
      isDissolverTabClicked: false
    };
  },
  computed: {
    filteredGoodsList() {
      if (this.selectedTabId === 0) {
        return this.goodsList;
      } else if (this.selectedTabId === 1) {
        return this.goodsList.filter((goods) => goods.goods_id >= 0 && goods.goods_id <= 3);
      } else if (this.selectedTabId === 2) {
        return this.goodsList.filter((goods) => goods.goods_id >= 10 && goods.goods_id <= 13);
      } else if (this.selectedTabId === 3) {
        return this.goodsList.filter((goods) => goods.goods_id >= 4 && goods.goods_id <= 8);
      } else if (this.selectedTabId === 4) {
        return this.goodsList.filter((goods) => goods.goods_id === 9);
      } else if (this.selectedTabId === 5) {
        return this.goodsList.filter((goods) => goods.goods_id >= 14 && goods.goods_id <= 16);
      }
    },
    productListStyle() {
      if (this.isDissolverTabClicked) {
        return {
          padding: "5vw 5% 82% 5%"
          // 点击到消解仪时的样式
        };
      } else {
        return {
          padding: "5vw 5% 14vw 5%"
          // 其他情况下的样式
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
      common_vendor.index.stopPullDownRefresh();
    }, 1e3);
  },
  onReachBottom() {
  },
  methods: {
    // open(){
    // 	this.$refs.popup.open();
    // },
    change(e) {
      console.log("弹窗状态改变：", e);
    },
    toast() {
      common_vendor.index.showToast({
        icon: "none",
        title: "插槽被点击"
      });
    },
    handleTabClick(tab) {
      this.selectedTabId = tab.id;
      this.isDissolverTabClicked = tab.id === 4;
    },
    toGoods(goods) {
      const imgUrls = goods.img.map((img) => img.url).join(",");
      const parameters = goods.parameter.map((param) => `${param.parameters_name}:${param.range}:${param.detect_range}:${param.precast_range}:${param.cuvettes_range}`).join(",");
      common_vendor.index.navigateTo({
        url: `/pages/goods/goodsdetail?goods_id=${goods.goods_id}&name=${goods.name}&price=${goods.price}&img=${imgUrls}&parameters=${parameters}`,
        success(res) {
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
        this.searchResult = [];
      } else {
        const keyword = this.value.trim().toLowerCase();
        this.searchResult = this.goodsList.filter((goods) => {
          const name = goods.name.toLowerCase();
          const kind = goods.kind.toLowerCase();
          const parameterNames = goods.parameter.map((param) => param.parameters_name.toLowerCase());
          if (name.includes(keyword) || kind.includes(keyword) || parameterNames.some((name2) => name2.includes(keyword))) {
            return true;
          }
          return false;
        });
        if (this.searchResult.length > 0) {
          JSON.stringify(this.searchResult);
          common_vendor.index.navigateTo({
            url: "/pages/goods/goods?goodsData=" + JSON.stringify(this.searchResult)
          });
        } else {
          common_vendor.index.showToast({
            title: "暂无匹配商品"
          });
        }
      }
    }
  }
};
if (!Array) {
  const _easycom_uv_search2 = common_vendor.resolveComponent("uv-search");
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  const _easycom_uv_sticky2 = common_vendor.resolveComponent("uv-sticky");
  (_easycom_uv_search2 + _easycom_uv_tabs2 + _easycom_uv_sticky2)();
}
const _easycom_uv_search = () => "../../uni_modules/uv-search/components/uv-search/uv-search.js";
const _easycom_uv_tabs = () => "../../uni_modules/uv-tabs/components/uv-tabs/uv-tabs.js";
const _easycom_uv_sticky = () => "../../uni_modules/uv-sticky/components/uv-sticky/uv-sticky.js";
if (!Math) {
  (_easycom_uv_search + _easycom_uv_tabs + _easycom_uv_sticky)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.onChange),
    b: common_vendor.o($options.onSearch),
    c: common_vendor.o($options.onSearch),
    d: common_vendor.p({
      showAction: true,
      actionText: "搜索",
      animation: true,
      height: "40",
      ["search-icon-size"]: "30"
    }),
    e: common_vendor.o($options.handleTabClick),
    f: common_vendor.p({
      list: $data.list,
      ["line-width"]: "30"
    }),
    g: common_vendor.p({
      bgColor: "#f0ffff"
    }),
    h: common_vendor.f($options.filteredGoodsList, (goods, k0, i0) => {
      return {
        a: goods.img[0].url,
        b: common_vendor.t(goods.name),
        c: common_vendor.t(goods.price),
        d: goods.goods_id,
        e: common_vendor.o(($event) => $options.toGoods(goods), goods.goods_id)
      };
    }),
    i: common_vendor.s($options.productListStyle)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/projects/HBuliderX project/产品助手/pages/home/home.vue"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
