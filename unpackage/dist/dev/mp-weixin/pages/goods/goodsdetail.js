"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      selectedGoods: {
        parameter: []
      }
    };
  },
  onLoad(options) {
    var _a;
    const params = options;
    const parameters = params.parameters.split(",").map((param) => {
      const [parameters_name, range, detect_range, precast_range, cuvettes_range, general] = param.split(
        ":"
      );
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
      img: params.img.split(","),
      parameter: parameters,
      selectedParameter: params.selectedParameter
      // 保存选中的检测项目名称
    };
    common_vendor.index.setNavigationBarTitle({
      title: params.name
    });
    const selectedGeneral = (_a = this.selectedGoods.parameter.find((param) => param.parameters_name === this.selectedGoods.selectedParameter)) == null ? void 0 : _a.general;
    if (selectedGeneral) {
      this.selectedGoods.parameter.forEach((param) => {
        if (param.general === selectedGeneral) {
          param.highlighted = true;
        }
      });
    }
    const highlightedParams = this.selectedGoods.parameter.filter((param) => param.highlighted);
    highlightedParams.forEach((param) => {
      const index = this.selectedGoods.parameter.indexOf(param);
      this.selectedGoods.parameter.splice(index, 1);
      this.selectedGoods.parameter.unshift(param);
    });
  }
};
if (!Array) {
  const _easycom_uv_swiper2 = common_vendor.resolveComponent("uv-swiper");
  const _easycom_uv_sticky2 = common_vendor.resolveComponent("uv-sticky");
  (_easycom_uv_swiper2 + _easycom_uv_sticky2)();
}
const _easycom_uv_swiper = () => "../../uni_modules/uv-swiper/components/uv-swiper/uv-swiper.js";
const _easycom_uv_sticky = () => "../../uni_modules/uv-sticky/components/uv-sticky/uv-sticky.js";
if (!Math) {
  (_easycom_uv_swiper + _easycom_uv_sticky)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      list: $data.selectedGoods.img,
      height: "340",
      previousMargin: "30",
      nextMargin: "30",
      circular: true,
      autoplay: true,
      interval: "5000",
      radius: "30",
      bgColor: "#ffffff"
    }),
    b: common_vendor.t($data.selectedGoods.name),
    c: common_vendor.t($data.selectedGoods.price),
    d: $data.selectedGoods.goods_id >= 0 && $data.selectedGoods.goods_id <= 7
  }, $data.selectedGoods.goods_id >= 0 && $data.selectedGoods.goods_id <= 7 ? {} : {}, {
    e: common_vendor.p({
      bgColor: "#ffffff"
    }),
    f: common_vendor.f($data.selectedGoods.parameter, (param, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(param.parameters_name)
      }, $data.selectedGoods.goods_id >= 0 && $data.selectedGoods.goods_id <= 7 ? {
        b: common_vendor.t(param.detect_range),
        c: common_vendor.t(param.precast_range),
        d: common_vendor.t(param.cuvettes_range)
      } : {
        e: common_vendor.t(param.range)
      }, {
        f: index,
        g: param.highlighted ? 1 : ""
      });
    }),
    g: $data.selectedGoods.goods_id >= 0 && $data.selectedGoods.goods_id <= 7
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/projects/HBuliderX project/产品助手/pages/goods/goodsdetail.vue"]]);
wx.createPage(MiniProgramPage);
