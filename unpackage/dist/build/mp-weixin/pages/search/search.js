"use strict";const e=require("../../common/vendor.js"),t=require("../../static/products/products.js"),o={data:()=>({goodsList:t.goodsList,parameters:[],selectedCategory:"仪器类",selectedParameter:"",category:[]}),created(){const e=new Set(this.goodsList.map((e=>e.category)));this.category=Array.from(e).map((e=>({text:e,value:e}))),this.updateCategories()},computed:{filteredGoodsList(){return this.selectedCategory&&this.selectedParameter?this.goodsList.filter((e=>e.category===this.selectedCategory&&e.parameter.some((e=>e.parameters_name===this.selectedParameter)))):this.selectedCategory?this.goodsList.filter((e=>e.category===this.selectedCategory)):this.goodsList}},methods:{updateCategories(){this.selectedCategory?(this.parameters=[],this.goodsList.forEach((e=>{e.category===this.selectedCategory&&e.parameter.forEach((e=>{this.parameters.includes(e.parameters_name)||this.parameters.push(e.parameters_name)}))}))):this.parameters=[],this.selectedParameter=""},toGoods(t){const o=t.img.map((e=>e.url)).join(","),a=t.parameter.map((e=>`${e.parameters_name}:${e.range}:${e.detect_range}:${e.precast_range}:${e.cuvettes_range}:${e.general}`)).join(",");e.index.navigateTo({url:`/pages/goods/goodsdetail?goods_id=${t.goods_id}&name=${t.name}&price=${t.price}&img=${o}&parameters=${a}&selectedParameter=${this.selectedParameter}`,success(e){},fail(e){console.error("跳转失败",e)}})}}};if(!Array){(e.resolveComponent("uni-data-checkbox")+e.resolveComponent("uni-section")+e.resolveComponent("uni-card")+e.resolveComponent("uni-combox"))()}Math||((()=>"../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js")+(()=>"../../uni_modules/uni-combox/components/uni-combox/uni-combox.js"))();const a=e._export_sfc(o,[["render",function(t,o,a,s,r,i){return{a:e.o(i.updateCategories),b:e.o((e=>r.selectedCategory=e)),c:e.p({mode:"tag",localdata:r.category,"selected-color":"#c2e8ff",modelValue:r.selectedCategory}),d:e.p({type:"line"}),e:e.p({"is-shadow":!1,"is-full":!0}),f:e.o((e=>r.selectedParameter=e)),g:e.p({candidates:r.parameters,placeholder:"选择参数",border:!1,modelValue:r.selectedParameter}),h:e.p({title:"基本用法",type:"line"}),i:e.f(i.filteredGoodsList,((t,o,a)=>({a:t.img[0].url,b:e.t(t.name),c:e.t(t.price),d:t.goods_id,e:e.o((e=>i.toGoods(t)),t.goods_id)})))}}]]);wx.createPage(a);
