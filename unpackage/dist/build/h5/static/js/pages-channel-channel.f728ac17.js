(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-channel-channel"],{"1c52":function(n,t,e){"use strict";e.r(t);var i=e("c815"),r=e("816c");for(var a in r)"default"!==a&&function(n){e.d(t,n,(function(){return r[n]}))}(a);var u,s=e("f0c5"),c=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"056479a8",null,!1,i["a"],u);t["default"]=c.exports},"816c":function(n,t,e){"use strict";e.r(t);var i=e("e76a"),r=e.n(i);for(var a in i)"default"!==a&&function(n){e.d(t,n,(function(){return i[n]}))}(a);t["default"]=r.a},c815:function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return i}));var i={uTabsSwiper:e("422e").default},r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("u-tabs-swiper",{ref:"uTabs",attrs:{list:n.list,current:n.current,"is-scroll":!1,swiperWidth:"750"},on:{change:function(t){arguments[0]=t=n.$handleEvent(t),n.tabsChange.apply(void 0,arguments)}}}),e("v-uni-swiper",{attrs:{current:n.swiperCurrent},on:{transition:function(t){arguments[0]=t=n.$handleEvent(t),n.transition.apply(void 0,arguments)},animationfinish:function(t){arguments[0]=t=n.$handleEvent(t),n.animationfinish.apply(void 0,arguments)}}},n._l(n.tabs,(function(t,i){return e("v-uni-swiper-item",{key:i,staticClass:"swiper-item"},[e("v-uni-scroll-view",{staticStyle:{height:"100vh",width:"100%"},attrs:{"scroll-y":!0}},[n._v(n._s(t))])],1)})),1)],1)},a=[]},e76a:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{list:[{name:"关注"},{name:"推荐"},{name:"热榜"},{name:"直播"},{name:"视频号"}],tabs:[1,2,3,4,5],current:1,swiperCurrent:1}},mounted:function(){},methods:{tabsChange:function(n){this.swiperCurrent=n},transition:function(n){var t=n.detail.dx;this.$refs.uTabs.setDx(t)},animationfinish:function(n){var t=n.detail.current;this.$refs.uTabs.setFinishCurrent(t),this.swiperCurrent=t,this.current=t}}};t.default=i}}]);