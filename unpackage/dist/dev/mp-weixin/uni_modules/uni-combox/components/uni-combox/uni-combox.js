"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "uniCombox",
  emits: ["input", "update:modelValue"],
  props: {
    clear: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      default: ""
    },
    labelWidth: {
      type: String,
      default: "auto"
    },
    placeholder: {
      type: String,
      default: ""
    },
    candidates: {
      type: Array,
      default() {
        return [];
      }
    },
    emptyTips: {
      type: String,
      default: "无匹配项"
    },
    modelValue: {
      type: [String, Number],
      default: ""
    }
  },
  data() {
    return {
      showSelector: false,
      inputVal: "",
      clickedInput: false
      // 标记是否点击了输入框
    };
  },
  computed: {
    labelStyle() {
      if (this.labelWidth === "auto") {
        return "";
      }
      return `width: ${this.labelWidth}`;
    },
    filterCandidates() {
      return this.candidates.filter((item) => {
        return item.toString().indexOf(this.inputVal) > -1;
      });
    },
    filterCandidatesLength() {
      return this.filterCandidates.length;
    }
  },
  watch: {
    modelValue: {
      handler(newVal) {
        this.inputVal = newVal;
      },
      immediate: true
    }
  },
  methods: {
    clearVal() {
      this.inputVal = "";
    },
    toggleSelector() {
      this.showSelector = !this.showSelector;
    },
    onFocus() {
      this.clickedInput = true;
      this.showSelector = true;
    },
    onBlur() {
      setTimeout(() => {
        if (this.inputVal === "" && !this.clickedInput) {
          this.showSelector = false;
        }
        this.clickedInput = false;
      }, 153);
    },
    onSelectorClick(index) {
      this.inputVal = this.filterCandidates[index];
      this.showSelector = false;
      this.$emit("input", this.inputVal);
      this.$emit("update:modelValue", this.inputVal);
    },
    onInput() {
      setTimeout(() => {
        this.$emit("input", this.inputVal);
        this.$emit("update:modelValue", this.inputVal);
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.label
  }, $props.label ? {
    b: common_vendor.t($props.label),
    c: common_vendor.s($options.labelStyle)
  } : {}, {
    d: $props.placeholder,
    e: common_vendor.o([($event) => $data.inputVal = $event.detail.value, (...args) => $options.onInput && $options.onInput(...args)]),
    f: common_vendor.o((...args) => $options.onFocus && $options.onFocus(...args)),
    g: common_vendor.o((...args) => $options.onBlur && $options.onBlur(...args)),
    h: $data.inputVal,
    i: $data.inputVal && $props.clear
  }, $data.inputVal && $props.clear ? {
    j: common_vendor.o($options.clearVal),
    k: common_vendor.p({
      type: "clear",
      color: "#c0c4cc",
      size: "30"
    })
  } : {
    l: common_vendor.o($options.toggleSelector),
    m: common_vendor.p({
      type: $data.showSelector ? "top" : "bottom",
      size: "30",
      color: "#999"
    })
  }, {
    n: $data.showSelector
  }, $data.showSelector ? common_vendor.e({
    o: $options.filterCandidatesLength === 0
  }, $options.filterCandidatesLength === 0 ? {
    p: common_vendor.t($props.emptyTips)
  } : {}, {
    q: common_vendor.f($options.filterCandidates, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index,
        c: common_vendor.o(($event) => $options.onSelectorClick(index), index)
      };
    })
  }) : {}, {
    r: common_vendor.n($props.border ? "" : "uni-combox__no-border")
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e602780e"], ["__file", "E:/projects/HBuliderX project/产品助手/uni_modules/uni-combox/components/uni-combox/uni-combox.vue"]]);
wx.createComponent(Component);
