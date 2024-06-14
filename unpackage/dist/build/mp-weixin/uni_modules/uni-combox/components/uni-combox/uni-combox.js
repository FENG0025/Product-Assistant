"use strict";const t=require("../../../../common/vendor.js"),e={name:"uniCombox",emits:["input","update:modelValue"],props:{clear:{type:Boolean,default:!0},border:{type:Boolean,default:!0},label:{type:String,default:""},labelWidth:{type:String,default:"auto"},placeholder:{type:String,default:""},candidates:{type:Array,default:()=>[]},emptyTips:{type:String,default:"无匹配项"},modelValue:{type:[String,Number],default:""}},data:()=>({showSelector:!1,inputVal:"",clickedInput:!1}),computed:{labelStyle(){return"auto"===this.labelWidth?"":`width: ${this.labelWidth}`},filterCandidates(){return this.candidates.filter((t=>t.toString().indexOf(this.inputVal)>-1))},filterCandidatesLength(){return this.filterCandidates.length}},watch:{modelValue:{handler(t){this.inputVal=t},immediate:!0}},methods:{clearVal(){this.inputVal=""},toggleSelector(){this.showSelector=!this.showSelector},onFocus(){this.clickedInput=!0,this.showSelector=!0},onBlur(){setTimeout((()=>{""!==this.inputVal||this.clickedInput||(this.showSelector=!1),this.clickedInput=!1}),153)},onSelectorClick(t){this.inputVal=this.filterCandidates[t],this.showSelector=!1,this.$emit("input",this.inputVal),this.$emit("update:modelValue",this.inputVal)},onInput(){setTimeout((()=>{this.$emit("input",this.inputVal),this.$emit("update:modelValue",this.inputVal)}))}}};if(!Array){t.resolveComponent("uni-icons")()}Math;const l=t._export_sfc(e,[["render",function(e,l,i,o,a,n){return t.e({a:i.label},i.label?{b:t.t(i.label),c:t.s(n.labelStyle)}:{},{d:i.placeholder,e:t.o([t=>a.inputVal=t.detail.value,(...t)=>n.onInput&&n.onInput(...t)]),f:t.o(((...t)=>n.onFocus&&n.onFocus(...t))),g:t.o(((...t)=>n.onBlur&&n.onBlur(...t))),h:a.inputVal,i:a.inputVal&&i.clear},a.inputVal&&i.clear?{j:t.o(n.clearVal),k:t.p({type:"clear",color:"#c0c4cc",size:"30"})}:{l:t.o(n.toggleSelector),m:t.p({type:a.showSelector?"top":"bottom",size:"30",color:"#999"})},{n:a.showSelector},a.showSelector?t.e({o:0===n.filterCandidatesLength},0===n.filterCandidatesLength?{p:t.t(i.emptyTips)}:{},{q:t.f(n.filterCandidates,((e,l,i)=>({a:t.t(e),b:l,c:t.o((t=>n.onSelectorClick(l)),l)})))}):{},{r:t.n(i.border?"":"uni-combox__no-border")})}],["__scopeId","data-v-2bfc537e"]]);wx.createComponent(l);
