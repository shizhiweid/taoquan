(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-official-stock-details-index"],{"115e":function(t,e,n){"use strict";var i=n("f3ab"),a=n.n(i);a.a},"1ad9":function(t,e,n){"use strict";n.r(e);var i=n("471a"),a=n("1d66");for(var u in a)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(u);n("115e");var o=n("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"31ff447a",null,!1,i["a"],void 0);e["default"]=s.exports},"1d66":function(t,e,n){"use strict";n.r(e);var i=n("dafa"),a=n.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=a.a},"24f2":function(t,e,n){var i=n("5da2");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("09968bdc",i,!0,{sourceMap:!1,shadowMode:!1})},"42a2":function(t,e,n){"use strict";n.r(e);var i=n("816c"),a=n.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=a.a},"471a":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}));var i={uniNumberBox:n("b829").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"details"},[n("v-uni-view",{staticClass:"product-info"},[n("v-uni-text",[t._v("获取股票时间："+t._s(t.data.getStockTime))]),n("v-uni-text",[t._v("股票名："+t._s(t.data.stockName))])],1),n("v-uni-view",{staticClass:"product-info"},[n("v-uni-text",[t._v("股票数："+t._s(t.data.stockNumber))]),n("v-uni-text",[t._v("股票单股价格："+t._s(t.data.stockPrice))])],1),n("v-uni-view",{staticClass:"page"},[t._v("数量："),n("uni-number-box",{attrs:{value:t.data.stockNumber},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"button-group"},t._l(t.buttons,(function(e,i){return n("v-uni-view",{key:i,staticClass:"button-item",class:{active:t.selectedSaleAnalysis===e.label},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleButtonClick(e)}}},[t._v(t._s(e.label))])})),1)],1)},u=[]},"5da2":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* uni.scss */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-numbox[data-v-23eb097b]{display:flex;flex-direction:row}.uni-numbox-btns[data-v-23eb097b]{display:flex;flex-direction:row;align-items:center;justify-content:center;padding:0 8px;background-color:#f5f5f5;cursor:pointer}.uni-numbox__value[data-v-23eb097b]{margin:0 2px;background-color:#f5f5f5;width:40px;height:26px;text-align:center;font-size:14px;border-left-width:0;border-right-width:0;color:#333}.uni-numbox__minus[data-v-23eb097b]{border-top-left-radius:2px;border-bottom-left-radius:2px}.uni-numbox__plus[data-v-23eb097b]{border-top-right-radius:2px;border-bottom-right-radius:2px}.uni-numbox--text[data-v-23eb097b]{line-height:20px;margin-bottom:2px;font-size:20px;font-weight:300;color:#333}.uni-numbox .uni-numbox--disabled[data-v-23eb097b]{color:silver!important;cursor:not-allowed}',""]),t.exports=e},"64ec":function(t,e,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.userLogin=e.userInfo=e.taskList=e.stockSell=e.stockList=e.stocBkuy=e.luckUser=void 0;var a=i(n("d05f"));e.userLogin=function(t){return(0,a.default)("/user/login","POST",t)};e.userInfo=function(t){return(0,a.default)("/user/userInfo","GET")};e.stockList=function(t){return(0,a.default)("/stock/stockList","GET")};e.taskList=function(t){return(0,a.default)("/task/taskList","GET")};e.stockSell=function(t){return(0,a.default)("/stock/sell","PUT",t)};e.stocBkuy=function(t){return(0,a.default)("/stock/buy","PUT",t)};e.luckUser=function(t){return(0,a.default)({url:"/luck/user",method:"GET",params:t})}},"6b4e":function(t,e,n){"use strict";var i=n("24f2"),a=n.n(i);a.a},"816c":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3");var i={name:"UniNumberBox",emits:["change","input","update:modelValue","blur","focus"],props:{value:{type:[Number,String],default:1},modelValue:{type:[Number,String],default:1},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},background:{type:String,default:"#f5f5f5"},color:{type:String,default:"#333"},disabled:{type:Boolean,default:!1}},data:function(){return{inputValue:0}},watch:{value:function(t){this.inputValue=+t},modelValue:function(t){this.inputValue=+t}},created:function(){1===this.value&&(this.inputValue=+this.modelValue),1===this.modelValue&&(this.inputValue=+this.value)},methods:{_calcValue:function(t){if(!this.disabled){var e=this._getDecimalScale(),n=this.inputValue*e,i=this.step*e;if("minus"===t){if(n-=i,n<this.min*e)return;n>this.max*e&&(n=this.max*e)}if("plus"===t){if(n+=i,n>this.max*e)return;n<this.min*e&&(n=this.min*e)}this.inputValue=(n/e).toFixed(String(e).length-1),this.$emit("input",+this.inputValue),this.$emit("update:modelValue",+this.inputValue),this.$emit("change",+this.inputValue)}},_getDecimalScale:function(){var t=1;return~~this.step!==this.step&&(t=Math.pow(10,String(this.step).split(".")[1].length)),t},_onBlur:function(t){this.$emit("blur",t);var e=t.detail.value;if(isNaN(e))this.inputValue=this.min;else{e=+e,e>this.max?e=this.max:e<this.min&&(e=this.min);var n=this._getDecimalScale();this.inputValue=e.toFixed(String(n).length-1),this.$emit("input",+this.inputValue),this.$emit("update:modelValue",+this.inputValue),this.$emit("change",+this.inputValue)}},_onFocus:function(t){this.$emit("focus",t)}}};e.default=i},b829:function(t,e,n){"use strict";n.r(e);var i=n("b8cf"),a=n("42a2");for(var u in a)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(u);n("6b4e");var o=n("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"23eb097b",null,!1,i["a"],void 0);e["default"]=s.exports},b8cf:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-numbox"},[n("v-uni-view",{staticClass:"uni-numbox__minus uni-numbox-btns",style:{background:t.background},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._calcValue("minus")}}},[n("v-uni-text",{staticClass:"uni-numbox--text",class:{"uni-numbox--disabled":t.inputValue<=t.min||t.disabled},style:{color:t.color}},[t._v("-")])],1),n("v-uni-input",{staticClass:"uni-numbox__value",style:{background:t.background,color:t.color},attrs:{disabled:t.disabled,type:"number"},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t._onFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t._onBlur.apply(void 0,arguments)}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}}),n("v-uni-view",{staticClass:"uni-numbox__plus uni-numbox-btns",style:{background:t.background},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._calcValue("plus")}}},[n("v-uni-text",{staticClass:"uni-numbox--text",class:{"uni-numbox--disabled":t.inputValue>=t.max||t.disabled},style:{color:t.color}},[t._v("+")])],1)],1)},a=[]},d05f:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("d3b7");var i={DEV:"/api",PRO:"http://111.111.111.111:8080"}["DEV"];function a(t,e,n,a){return new Promise((function(a,u){uni.request({url:i+t,method:e,data:n,success:function(t){a(t.data)},fail:function(t){uni.showToast({icon:"none",title:"服务响应失败"}),console.error(t),u(t)},complete:function(){uni.hideLoading()}})}))}function u(t,e,n,a,u){return new Promise((function(a,o){uni.request({url:i+t,method:e,data:n,header:{Authorization:u},success:function(t){console.log("%c响应拦截："," background:green",t),t.data.code,a(t.data)},fail:function(t){uni.showToast({icon:"none",title:"服务响应失败"}),console.error(t),o(t)},complete:function(){uni.hideLoading()}})}))}e.default=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=uni.getStorageSync("access_token");return i&&uni.showLoading({title:"加载中",mask:!0}),""!=o?u(t,e,n,i,o):a(t,e,n,i)}},dafa:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("64ec");i.stockSell;var a={data:function(){return{selectedSaleAnalysis:"今年",buttons:[{label:"卖出",getUrl:"getTerminalYearSaleInfo",xlength:12},{label:"买入",getUrl:"getTerminalMonthSaleInfo",xlength:30}],data:{}}},onLoad:function(t){uni.hideShareMenu({menus:["shareAppMessage","shareTimeline"]}),this.data=JSON.parse(t.data),this.data.stockNumber=1},methods:{getstockSell:function(){console.log(this.data.stockNumber),(0,i.stockSell)(this.data).then((function(t){console.log("res",t)}))},getStocBkuy:function(){console.log(this.data.stockNumber),(0,i.stocBkuy)(this.data).then((function(t){console.log("res",t)}))},handleButtonClick:function(t){var e=this;this.selectedSaleAnalysis=t.label,console.log("button",t.label),uni.showModal({title:"提示",content:"是否确认".concat(t.label),success:function(n){n.confirm&&("卖出"==t.label?e.getstockSell():e.getStocBkuy())}})},change:function(t){this.data.stockNumber=t}}};e.default=a},f3ab:function(t,e,n){var i=n("f9ae");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("1a975ad7",i,!0,{sourceMap:!1,shadowMode:!1})},f9ae:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* uni.scss */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.details[data-v-31ff447a]{padding:0 %?20?%;width:100vw;height:100vh}.details .product-info[data-v-31ff447a]{display:flex;justify-content:space-between}.details .button-group[data-v-31ff447a]{display:flex;margin:%?20?% %?30?%;width:90vw;position:fixed;bottom:%?10?%}.details .button-item[data-v-31ff447a]{flex:1;text-align:center;padding:10px;border:1px solid #ccc;border-left:none;cursor:pointer}.details .button-group .button-item[data-v-31ff447a]:first-child{border-top-left-radius:20px;border-bottom-left-radius:20px;border-top-right-radius:0;border-bottom-right-radius:0;border-left:1px solid #ccc}.details .button-group .button-item[data-v-31ff447a]:last-child{border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:20px;border-bottom-right-radius:20px}.details .button-group .button-item[data-v-31ff447a]:not(:first-child):not(:last-child){border-radius:0}.details .active[data-v-31ff447a]{background-color:#007aff;color:#fff;border:none;border-top:1px solid #007aff;border-bottom:1px solid #007aff}.details .page[data-v-31ff447a]{display:flex;margin:%?20?% %?30?%;width:90vw;position:fixed;bottom:%?150?%}',""]),t.exports=e}}]);