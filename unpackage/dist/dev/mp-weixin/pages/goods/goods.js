"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.goodsData, (goods, k0, i0) => {
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/projects/HBuliderX project/产品助手/pages/goods/goods.vue"]]);
wx.createPage(MiniProgramPage);
