(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-jinba-jinba"],{"0c4a":function(t,e,n){var i=n("5cfa");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("2e86ccb2",i,!0,{sourceMap:!1,shadowMode:!1})},"1a41":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uTabsSwiper:n("422e").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("u-tabs-swiper",{ref:"uTabs",attrs:{list:t.list,current:t.current,"is-scroll":!1,swiperWidth:"750"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.tabsChange.apply(void 0,arguments)}}}),n("v-uni-swiper",{staticStyle:{"min-height":"100vh"},attrs:{current:t.swiperCurrent},on:{transition:function(e){arguments[0]=e=t.$handleEvent(e),t.transition.apply(void 0,arguments)},animationfinish:function(e){arguments[0]=e=t.$handleEvent(e),t.animationfinish.apply(void 0,arguments)}}},[n("v-uni-swiper-item",{staticClass:"swiper-item"},[n("v-uni-scroll-view",{staticStyle:{height:"100vh",width:"100%"},attrs:{"scroll-y":!0}},[n("my-topic")],1)],1),n("v-uni-swiper-item",{staticClass:"swiper-item"},[n("v-uni-scroll-view",{staticStyle:{height:"100vh",width:"100%","background-color":"#fff"},attrs:{"scroll-y":!0}},[n("v-uni-view",{staticClass:"topic-square-left"},t._l(t.topicClass,(function(e,i){return n("v-uni-view",{key:i,staticClass:"topic-class",class:{selected:t.topicClassSelected===i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changetopicClassSelected(i)}}},[t._v(t._s(e))])})),1),n("v-uni-view",{staticStyle:{float:"left"}},[t._v("123")])],1)],1)],1)],1)},a=[]},4063:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.vertically-centered[data-v-0cfa0894]{height:100vh;width:%?750?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.my-follow[data-v-0cfa0894]{width:%?720?%;margin:%?15?%;font-size:16px;background-color:#fff;-webkit-border-radius:10px;border-radius:10px}.my-follow .topic-list[data-v-0cfa0894]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:100%}.my-follow .topic-list .topic[data-v-0cfa0894]{padding:10px;width:50%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}',""]),t.exports=e},"5cfa":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.topic-square-left[data-v-6511d51c]{float:left}.topic-square-left .topic-class[data-v-6511d51c]{width:%?150?%;height:%?150?%;line-height:%?150?%;text-align:center;background-color:#f5f5f5}.topic-square-left .selected[data-v-6511d51c]{background-color:#fff}.topic-square-left .selected[data-v-6511d51c]::after{position:absolute;display:block;background-color:#8a2be2;content:"";margin-top:%?-150?%;height:%?150?%;width:5px}',""]),t.exports=e},"7cdf":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("f9c0")),a={data:function(){return{followTopicArr:[],list:[{name:"我的吧"},{name:"吧广场"}],current:0,swiperCurrent:0,topicClass:["推荐","热门","黑马","游戏","动漫","明星","数码","影视","教育","体育","交友","地区","自然","历史","文学","社会","服务"],topicClassSelected:0}},components:{myTopic:r.default},mounted:function(){},computed:{followTopic:function(){return this.$store.state.user.followTopic}},onShow:function(){},methods:{tabsChange:function(t){this.swiperCurrent=t},transition:function(t){var e=t.detail.dx;this.$refs.uTabs.setDx(e)},animationfinish:function(t){var e=t.detail.current;this.$refs.uTabs.setFinishCurrent(e),this.swiperCurrent=e,this.current=e},changetopicClassSelected:function(t){this.topicClassSelected=t}}};e.default=a},"943a":function(t,e,n){"use strict";n.r(e);var i=n("c07d"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"9a5f":function(t,e,n){var i=n("4063");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("58ccae82",i,!0,{sourceMap:!1,shadowMode:!1})},aeb1:function(t,e,n){"use strict";var i=n("9a5f"),r=n.n(i);r.a},bc0e:function(t,e,n){"use strict";n.r(e);var i=n("1a41"),r=n("ecd0");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("c10c");var o,c=n("f0c5"),s=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"6511d51c",null,!1,i["a"],o);e["default"]=s.exports},c07d:function(t,e,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("304e"),r={name:"mytopic",data:function(){return{followTopic:[]}},computed:{user:function(){return this.$store.state.user}},watch:{user:function(t){for(var e=this,n=[],r=0;r<this.user.followTopic.length;r++)n[r]=(0,i.allFollowTopic)(this.user.followTopic[r]);Promise.all(n).then((function(t){e.followTopic=t}))}},methods:{toLogin:function(){uni.navigateTo({url:"../../pages/login/login"})},allFollowTopic:function(t){(0,i.allFollowTopic)(t)},toTopic:function(t){uni.navigateTo({url:"../../pages/topic/topic?id=".concat(t)})}},created:function(){var t=this,e=[];if(null!==this.user){for(var n=0;n<this.user.followTopic.length;n++)e[n]=(0,i.allFollowTopic)(this.user.followTopic[n]);Promise.all(e).then((function(e){t.followTopic=e}))}}};e.default=r},c10c:function(t,e,n){"use strict";var i=n("0c4a"),r=n.n(i);r.a},e008:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uButton:n("1f20").default,uImage:n("77e3").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[null===t.user?n("v-uni-view",{staticClass:"vertically-centered"},[n("u-button",{attrs:{type:"primary",shape:"circle"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toLogin.apply(void 0,arguments)}}},[t._v("您还未登录")])],1):n("v-uni-view",[0===t.user.followTopic.length?n("v-uni-view",{staticClass:"vertically-centered"},[n("v-uni-text",[t._v("您还未关注吧")])],1):n("v-uni-view",{staticClass:"my-follow"},[n("v-uni-text",{staticStyle:{"font-weight":"bold"}},[t._v("我关注的吧")]),n("v-uni-view",{staticClass:"topic-list"},t._l(t.followTopic,(function(e,i){return n("v-uni-view",{key:i,staticClass:"topic",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toTopic(e.id)}}},[n("v-uni-view",[n("u-image",{attrs:{src:e.img,width:"50px",height:"50px","border-radius":"15px"}})],1),n("v-uni-view",{staticStyle:{"margin-top":"15px"}},[n("v-uni-text",[t._v(t._s(e.name))])],1)],1)})),1)],1)],1)],1)},a=[]},ecd0:function(t,e,n){"use strict";n.r(e);var i=n("7cdf"),r=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},f9c0:function(t,e,n){"use strict";n.r(e);var i=n("e008"),r=n("943a");for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("aeb1");var o,c=n("f0c5"),s=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"0cfa0894",null,!1,i["a"],o);e["default"]=s.exports}}]);