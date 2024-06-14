"use strict";
const common_vendor = require("../../common/vendor.js");
const static_products_products = require("../../static/products/products.js");
const _sfc_main = {
  data() {
    return {
      goodsList: static_products_products.goodsList,
      parameters: [],
      selectedCategory: "仪器类",
      selectedParameter: "",
      // 选择的参数
      category: []
    };
  },
  created() {
    const uniqueCategories = new Set(this.goodsList.map((item) => item.category));
    this.category = Array.from(uniqueCategories).map((category) => ({
      text: category,
      value: category
    }));
    this.updateCategories();
  },
  computed: {
    filteredGoodsList() {
      if (this.selectedCategory && this.selectedParameter) {
        return this.goodsList.filter((item) => {
          return item.category === this.selectedCategory && item.parameter.some((param) => param.parameters_name === this.selectedParameter);
        });
      } else if (this.selectedCategory) {
        return this.goodsList.filter((item) => item.category === this.selectedCategory);
      } else {
        return this.goodsList;
      }
    }
  },
  methods: {
    updateCategories() {
      if (this.selectedCategory) {
        this.parameters = [];
        this.goodsList.forEach((item) => {
          if (item.category === this.selectedCategory) {
            item.parameter.forEach((param) => {
              if (!this.parameters.includes(param.parameters_name)) {
                this.parameters.push(param.parameters_name);
              }
            });
          }
        });
      } else {
        this.parameters = [];
      }
      this.selectedParameter = "";
    },
    toGoods(goods) {
      const imgUrls = goods.img.map((img) => img.url).join(",");
      const parameters = goods.parameter.map(
        (param) => `${param.parameters_name}:${param.range}:${param.detect_range}:${param.precast_range}:${param.cuvettes_range}:${param.general}`
      ).join(",");
      common_vendor.index.navigateTo({
        url: `/pages/goods/goodsdetail?goods_id=${goods.goods_id}&name=${goods.name}&price=${goods.price}&img=${imgUrls}&parameters=${parameters}&selectedParameter=${this.selectedParameter}`,
        success(res) {
        },
        fail(err) {
          console.error("跳转失败", err);
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  const _component_uni_section = common_vendor.resolveComponent("uni-section");
  const _component_uni_card = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_combox2 = common_vendor.resolveComponent("uni-combox");
  (_easycom_uni_data_checkbox2 + _component_uni_section + _component_uni_card + _easycom_uni_combox2)();
}
const _easycom_uni_data_checkbox = () => "../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
const _easycom_uni_combox = () => "../../uni_modules/uni-combox/components/uni-combox/uni-combox.js";
if (!Math) {
  (_easycom_uni_data_checkbox + _easycom_uni_combox)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.updateCategories),
    b: common_vendor.o(($event) => $data.selectedCategory = $event),
    c: common_vendor.p({
      mode: "tag",
      localdata: $data.category,
      ["selected-color"]: "#c2e8ff",
      modelValue: $data.selectedCategory
    }),
    d: common_vendor.p({
      type: "line"
    }),
    e: common_vendor.p({
      ["is-shadow"]: false,
      ["is-full"]: true
    }),
    f: common_vendor.o(($event) => $data.selectedParameter = $event),
    g: common_vendor.p({
      candidates: $data.parameters,
      placeholder: "选择参数",
      border: false,
      modelValue: $data.selectedParameter
    }),
    h: common_vendor.p({
      title: "基本用法",
      type: "line"
    }),
    i: common_vendor.f($options.filteredGoodsList, (goods, k0, i0) => {
      return {
        a: goods.img[0].url,
        b: common_vendor.t(goods.name),
        c: common_vendor.t(goods.price),
        d: goods.goods_id,
        e: common_vendor.o(($event) => $options.toGoods(goods), goods.goods_id)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/projects/HBuliderX project/产品助手/pages/search/search.vue"]]);
wx.createPage(MiniProgramPage);
