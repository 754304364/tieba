(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"07d8":function(t,i,e){"use strict";e.r(i);var n=e("680a"),a=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=a.a},"111e":function(t,i,e){"use strict";var n=e("4ea4");e("d3b7"),e("3ca3"),e("ddb0"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=e("304e"),r=n(e("1ef3")),s=n(e("a525")),o={data:function(){return{list:[{name:"关注"},{name:"推荐"},{name:"热榜"},{name:"直播"},{name:"视频号"}],tabs:[1,2,3,4,5],current:1,swiperCurrent:1,maskShow:!1,followShow:!1,recommendData:{article:[],topicId:[]},followData:{acticleArr:[]}}},components:{recommend:s.default,follow:r.default},watch:{current:function(){this.followShow=!0}},onPullDownRefresh:function(){switch(this.current){case 0:this.followData.acticleArr=[],this.followRequest(),this.$nextTick((function(){uni.stopPullDownRefresh()}));break;case 1:this.recommendData={article:[],topicId:[]},this.recommend(),this.$nextTick((function(){uni.stopPullDownRefresh()}));break}},methods:{toSearch:function(){uni.navigateTo({url:"../search/search"})},reply:function(){this.maskShow=!0},toFatie:function(){this.$store.state.login?uni.navigateTo({url:"../fatie/fatie"}):uni.navigateTo({url:"../login/login"})},tabsChange:function(t){this.swiperCurrent=t},transition:function(t){var i=t.detail.dx;this.$refs.uTabs.setDx(i)},animationfinish:function(t){var i=t.detail.current;this.$refs.uTabs.setFinishCurrent(i),this.swiperCurrent=i,this.current=i},recommend:function(){var t=this;(0,a.selectArticle)().then((function(i){console.log(i),t.recommendData.article=i;for(var e=0;e<i.length;e++)t.recommendData.topicId.push(i[e].topicid)})).then((function(){for(var i=function(i){(0,a.selectTopic)(t.recommendData.topicId[i]).then((function(e){t.$set(t.recommendData.article[i],"baimg",e.img),t.$set(t.recommendData.article[i],"name",e.name),t.$set(t.recommendData.article[i],"guanzhu",e.guanzhu),t.$set(t.recommendData.article[i],"tiezi",e.tiezi)}))},e=0;e<t.recommendData.topicId.length;e++)i(e)}))},followRequest:function(){var t=this;if(null!==this.$store.state.user){for(var i=[],e=JSON.parse(JSON.stringify(this.$store.state.user.followUser)),n=0;n<e.length;n++)i[n]=(0,a.selectFollowActicle)(e[n]);Promise.all(i).then((function(i){for(var e=0;e<i.length;e++)for(var n=0;n<i[e].length;n++)t.followData.acticleArr.push(i[e][n]);for(var a=0;a<t.followData.acticleArr.length-1;a++)for(var r=0;r<t.followData.acticleArr.length-1-a;r++)if(t.followData.acticleArr[r].id<t.followData.acticleArr[r+1].id){var s=t.followData.acticleArr[r];t.followData.acticleArr[r]=t.followData.acticleArr[r+1],t.followData.acticleArr[r+1]=s}}))}}},onLoad:function(){this.recommend(),this.followRequest()}};i.default=o},1215:function(t,i,e){"use strict";e.r(i);var n=e("a143"),a=e("6a0c");for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);e("92ad");var s,o=e("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"67203a04",null,!1,n["a"],s);i["default"]=c.exports},"154b":function(t,i,e){t.exports=e.p+"static/img/share.b1c0c40c.png"},"1c1a":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e("304e"),a={name:"recommend",data:function(){return{}},props:["recommendData"],methods:{toArticle:function(t){uni.navigateTo({url:"../tiezicontent/tiezicontent?id="+t})},toTopic:function(t){uni.navigateTo({url:"../topic/topic?id="+t.topicid})},previewImage:function(t,i){uni.previewImage({current:t[i],urls:t,indicator:"default",loop:!0})},reward:function(t,i){var e=this;this.$store.state.login?(0,n.rewardArticle)(t).then((function(t){e.article[i].dznum++})):uni.navigateTo({url:"../login/login"})}},created:function(){}};i.default=a},"1ef3":function(t,i,e){"use strict";e.r(i);var n=e("e7fa"),a=e("07d8");for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);e("fe41");var s,o=e("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"38a101e0",null,!1,n["a"],s);i["default"]=c.exports},"24d4":function(t,i,e){var n=e("e2f6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("516fa444",n,!0,{sourceMap:!1,shadowMode:!1})},"2f8e":function(t,i,e){var n=e("9d0a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("a37443a8",n,!0,{sourceMap:!1,shadowMode:!1})},"40f8":function(t,i,e){var n=e("4d902");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("fdfa9b50",n,!0,{sourceMap:!1,shadowMode:!1})},"4ba5":function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return n}));var n={uNavbar:e("e4e3").default,uMask:e("cc75").default,uImage:e("77e3").default,uTabsSwiper:e("422e").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[e("u-navbar",{staticClass:"top-navbar",attrs:{"is-back":!1,background:{background:"#F5F5F5"}}},[e("v-uni-view",{staticClass:"top-navbar-input",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toSearch.apply(void 0,arguments)}}},[e("v-uni-text",[t._v("搜索")])],1),e("v-uni-view",{staticClass:"top-navbar-btn",attrs:{slot:"right"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.reply.apply(void 0,arguments)}},slot:"right"},[t._v("发布")]),t.maskShow?e("u-mask",{staticClass:"warp",attrs:{"custom-style":{background:"rgba(0, 0, 0, 0.2)"},show:t.maskShow},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.maskShow=!1}}}):t._e()],1),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.maskShow,expression:"maskShow"}],staticClass:"rect"},[e("v-uni-view",{staticClass:"rect-li",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toFatie.apply(void 0,arguments)}}},[e("u-image",{staticClass:"rect-image",attrs:{src:"/static/fatie.png","border-radius":"20",width:"30px",height:"30px",mode:""}}),e("v-uni-text",{staticClass:"text"},[t._v("发帖")])],1),e("v-uni-view",{staticClass:"rect-li"},[e("u-image",{staticClass:"rect-image",attrs:{src:"/static/tupian_image.png","border-radius":"20",width:"30px",height:"30px",mode:""}}),e("v-uni-text",{staticClass:"text"},[t._v("图片/视频")])],1),e("v-uni-view",{staticClass:"rect-li"},[e("u-image",{staticClass:"rect-image",attrs:{src:"/static/Shoot.png","border-radius":"20",width:"30px",height:"30px",mode:""}}),e("v-uni-text",{staticClass:"text"},[t._v("拍摄")])],1),e("v-uni-view",{staticClass:"rect-li"},[e("u-image",{staticClass:"rect-image",attrs:{src:"/static/Live.png","border-radius":"20",width:"30px",height:"30px",mode:""}}),e("v-uni-text",{staticClass:"text"},[t._v("直播")])],1),e("v-uni-view",{staticClass:"rect-li"},[e("u-image",{staticClass:"rect-image",attrs:{src:"/static/vote.png","border-radius":"20",width:"30px",height:"30px",mode:""}}),e("v-uni-text",{staticClass:"text"},[t._v("投票")])],1),e("v-uni-view",{staticClass:"rect-li"},[e("u-image",{staticClass:"rect-image",attrs:{src:"/static/evaluation.png","border-radius":"20",width:"30px",height:"30px",mode:""}}),e("v-uni-text",{staticClass:"text"},[t._v("评价")])],1)],1),e("u-tabs-swiper",{ref:"uTabs",staticClass:"tabs-swiper",attrs:{list:t.list,"bg-color":"#ededed;",current:t.current,"is-scroll":!1,swiperWidth:"750"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.tabsChange.apply(void 0,arguments)}}}),e("v-uni-swiper",{staticClass:"swiper",attrs:{current:t.swiperCurrent},on:{transition:function(i){arguments[0]=i=t.$handleEvent(i),t.transition.apply(void 0,arguments)},animationfinish:function(i){arguments[0]=i=t.$handleEvent(i),t.animationfinish.apply(void 0,arguments)}}},[e("v-uni-swiper-item",{staticClass:"swiper-item"},[e("v-uni-scroll-view",{staticStyle:{width:"100%"},attrs:{"scroll-y":!0}},[t.followShow?e("follow",{attrs:{followData:t.followData}}):t._e()],1)],1),e("v-uni-swiper-item",{staticClass:"swiper-item"},[e("v-uni-scroll-view",{staticStyle:{width:"100%"},attrs:{"scroll-y":!0}},[e("recommend",{attrs:{recommendData:t.recommendData}})],1)],1),e("v-uni-swiper-item",{staticClass:"swiper-item"},[e("v-uni-scroll-view",{staticStyle:{width:"100%"},attrs:{"scroll-y":!0}})],1),e("v-uni-swiper-item",{staticClass:"swiper-item"},[e("v-uni-scroll-view",{staticStyle:{width:"100%"},attrs:{"scroll-y":!0}})],1),e("v-uni-swiper-item",{staticClass:"swiper-item",staticStyle:{"overflow-y":"auto"}},[e("v-uni-scroll-view",{staticStyle:{width:"100%"},attrs:{"scroll-y":!0}})],1)],1)],1)},r=[]},"4d902":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.no-login[data-v-38a101e0]{text-align:center;margin-top:40%}.no-login .login-btn[data-v-38a101e0]{margin-top:20px}',""]),t.exports=i},"4e00":function(t,i,e){"use strict";e.r(i);var n=e("4ba5"),a=e("6ff1");for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);e("7cae");var s,o=e("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"0f87f15e",null,!1,n["a"],s);i["default"]=c.exports},"5a9c":function(t,i,e){"use strict";var n=e("2f8e"),a=e.n(n);a.a},"680a":function(t,i,e){"use strict";var n=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("1215")),r={name:"follow",data:function(){return{}},props:["followData"],components:{acticleContent:a.default},methods:{toLogin:function(){uni.navigateTo({url:"../../pages/login/login"})}},computed:{login:function(){return this.$store.state.login},user:function(){return this.$store.state.user}}};i.default=r},"69b4":function(t,i,e){"use strict";e("c975"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e("304e"),a={name:"acticle-content",props:["res"],data:function(){return{dzSrc:"/static/dianzan.png",isDz:!1}},created:function(){null!==this.$store.state.user&&-1!==this.$store.state.user.support.indexOf(this.res.id+"")&&(this.dzSrc="/static/dianzan2.png",this.isDz=!0)},methods:{toActicle:function(t){uni.navigateTo({url:"../tiezicontent/tiezicontent?id=".concat(t)})},reward:function(t){var i=this;this.$store.state.login?!0===this.isDz||(0,n.rewardArticle)(t).then((function(e){0===e&&(i.res.dznum++,i.isDz=!0,i.dzSrc="/static/dianzan2.png",(0,n.support)(t,i.$store.state.user.id))})):uni.navigateTo({url:"../login/login"})},previewImage:function(t,i){uni.previewImage({current:t[i],urls:t,indicator:"default",loop:!0})}}};i.default=a},"6a0c":function(t,i,e){"use strict";e.r(i);var n=e("69b4"),a=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=a.a},"6ff1":function(t,i,e){"use strict";e.r(i);var n=e("111e"),a=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=a.a},7613:function(t,i,e){var n=e("ec81");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("0906a246",n,!0,{sourceMap:!1,shadowMode:!1})},"7cae":function(t,i,e){"use strict";var n=e("24d4"),a=e.n(n);a.a},"92ad":function(t,i,e){"use strict";var n=e("7613"),a=e.n(n);a.a},"9d0a":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.recommend[data-v-01fd8bd8]{width:100%}.recommend .container[data-v-01fd8bd8]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:%?15?%;width:100%;margin:0 auto;background-color:#fff;margin-top:10px;-webkit-border-radius:10px;border-radius:10px}.recommend .container .title[data-v-01fd8bd8]{height:40px}.recommend .container .title .title-img[data-v-01fd8bd8]{height:40px;width:40px}.recommend .container .title .title-img uni-image[data-v-01fd8bd8]{height:100%;width:100%;-webkit-border-radius:40%;border-radius:40%}.recommend .container .title .title-mes[data-v-01fd8bd8]{height:20px;line-height:20px;margin-left:60px;margin-top:-40px;height:40px}.recommend .container .title .title-num .title-guanzhu[data-v-01fd8bd8], .recommend .container .title .title-num .title-tiezi[data-v-01fd8bd8]{display:inline-block;margin-right:10px}.recommend .container .content[data-v-01fd8bd8]{margin:5px 0 20px 0;margin-bottom:20px}.recommend .container .content .txt[data-v-01fd8bd8]{font-size:14px}.recommend .container .content .article-img[data-v-01fd8bd8]{margin-right:%?15?%;-webkit-border-radius:%?20?%;border-radius:%?20?%}.recommend .container .foot[data-v-01fd8bd8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;height:20px;line-height:20px}.recommend .container .foot .img[data-v-01fd8bd8]{vertical-align:top;height:20px;width:20px;margin-right:5px}',""]),t.exports=i},"9ed1":function(t,i,e){t.exports=e.p+"static/img/dianzan.c5c6418a.png"},a143:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return n}));var n={uImage:e("77e3").default},a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"acticle",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toActicle(t.res.id)}}},[n("u-image",{staticClass:"user-img",attrs:{src:t.res.userimg,width:"50px",height:"50px",shape:"circle","lazy-load":!0}}),n("v-uni-view",{staticClass:"user-data"},[n("v-uni-view",[n("v-uni-text",[t._v(t._s(t.res.username))])],1),n("v-uni-view",[n("v-uni-text",[t._v(t._s(t.res.time))])],1)],1),n("v-uni-view",{staticClass:"acticle-text"},[n("v-uni-rich-text",{staticClass:"rich-text",attrs:{nodes:t.res.txt}})],1),n("v-uni-view",{staticClass:"acticle-img"},t._l(t.res.img,(function(i,e){return n("v-uni-view",{key:e},[n("v-uni-view",{on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.previewImage(t.res.img,i)}}},[n("u-image",{staticClass:"image",attrs:{src:i,"lazy-load":!0,"border-radius":"10px",width:t.res.img.length<2?"450rpx":"213rpx",height:t.res.img.length<2?"500rpx":"220rpx"}})],1)],1)})),1),""!==t.res.video?n("v-uni-video",{staticStyle:{width:"100%"},attrs:{src:t.res.video,controls:!0}}):t._e(),n("v-uni-view",{staticClass:"foot"},[n("v-uni-view",{staticClass:"share"},[n("v-uni-image",{staticClass:"img",attrs:{src:e("154b")}}),n("v-uni-text",[t._v(t._s(t.res.sharenum))])],1),n("v-uni-view",{staticClass:"comment"},[n("v-uni-image",{staticClass:"img",attrs:{src:e("dc04")}}),n("v-uni-text",[t._v(t._s(t.res.commentnum))])],1),n("v-uni-view",{staticClass:"dianzan"},[n("v-uni-image",{staticClass:"img",attrs:{src:t.dzSrc},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.reward(t.res.id)}}}),n("v-uni-text",[t._v(t._s(t.res.dznum))])],1)],1)],1)},r=[]},a525:function(t,i,e){"use strict";e.r(i);var n=e("e280"),a=e("e1ad");for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);e("5a9c");var s,o=e("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"01fd8bd8",null,!1,n["a"],s);i["default"]=c.exports},dc04:function(t,i,e){t.exports=e.p+"static/img/huifu.60a00d8e.png"},e1ad:function(t,i,e){"use strict";e.r(i);var n=e("1c1a"),a=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(i,t,(function(){return n[t]}))}(r);i["default"]=a.a},e280:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"recommend"},t._l(t.recommendData.article,(function(i,a){return n("v-uni-view",{key:a,staticClass:"container",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toArticle(i.id)}}},[n("v-uni-view",{staticClass:"title"},[n("v-uni-view",{staticClass:"title-img"},[n("v-uni-image",{attrs:{src:i.baimg},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.toTopic(i)}}})],1),n("v-uni-view",{staticClass:"title-mes"},[n("v-uni-view",{staticClass:"title-name"},[t._v(t._s(i.name)+"吧")]),n("v-uni-view",{staticClass:"title-num"},[n("v-uni-view",{staticClass:"title-guanzhu"},[t._v("关注:"+t._s(i.guanzhu))]),n("v-uni-view",{staticClass:"title-tiezi"},[t._v("帖子:"+t._s(i.tiezi))])],1)],1)],1),n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"txt",domProps:{innerHTML:t._s(i.txt)}}),t._l(i.img,(function(e,a){return n("v-uni-view",{key:a,staticStyle:{float:"left"}},[a<3&&i.img?n("v-uni-image",{key:a,staticClass:"article-img",style:{width:i.img.length<2?"450rpx":"220rpx",height:i.img.length<2?"500rpx":"220rpx"},attrs:{src:e,mode:"aspectFill"},on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.previewImage(i.img,e)}}}):t._e()],1)})),""!==i.video?n("v-uni-video",{staticStyle:{width:"100%"},attrs:{src:i.video,controls:!0}}):t._e(),n("v-uni-view",{staticStyle:{clear:"both"}})],2),n("v-uni-view",{staticClass:"foot"},[n("v-uni-view",{staticClass:"share"},[n("v-uni-image",{staticClass:"img",attrs:{src:e("154b")}}),n("v-uni-text",[t._v(t._s(i.sharenum))])],1),n("v-uni-view",{staticClass:"comment"},[n("v-uni-image",{staticClass:"img",attrs:{src:e("dc04")}}),n("v-uni-text",[t._v(t._s(i.commentnum))])],1),n("v-uni-view",{staticClass:"dianzan"},[n("v-uni-image",{staticClass:"img",attrs:{src:e("9ed1")},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.reward(i.id,a)}}}),n("v-uni-text",[t._v(t._s(i.dznum))])],1)],1)],1)})),1)},r=[]},e2f6:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-0f87f15e]{background-color:#f5f5f5;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?10?%}.content .top-navbar .top-navbar-input[data-v-0f87f15e]{background-color:#ededed;margin-left:10px;line-height:30px;height:30px;-webkit-border-radius:20px;border-radius:20px;width:60%;padding-left:10%}.content .top-navbar .top-navbar-btn[data-v-0f87f15e]{margin-right:10px;padding:0 20px;-webkit-border-radius:20px;border-radius:20px;background-color:#8a2be2;color:#fff;height:30px;line-height:30px}.content .rect[data-v-0f87f15e]{position:fixed;z-index:999;right:%?15?%;background-color:#000;-webkit-border-radius:10px;border-radius:10px;color:#fff;text-align:center;-webkit-transition:all .3s;transition:all .3s}.content .rect .rect-li[data-v-0f87f15e]{padding:10px;height:50px;border-bottom:.1px solid #606266}.content .rect .rect-li .rect-image[data-v-0f87f15e]{float:left;margin-right:10px}.content .rect .rect-li .text[data-v-0f87f15e]{line-height:30px;float:left}.tabs-swiper[data-v-0f87f15e]{position:fixed}.swiper[data-v-0f87f15e]{margin-top:44px;min-height:calc(100vh - 140px)}.swiper .swiper-item[data-v-0f87f15e]{overflow-y:auto}body.?%PAGE?%[data-v-0f87f15e]{background-color:#f5f5f5}',""]),t.exports=i},e7fa:function(t,i,e){"use strict";e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return n}));var n={uButton:e("1f20").default},a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[null==t.user?e("v-uni-view",{staticClass:"no-login"},[e("v-uni-view",{staticClass:"txt"},[t._v("登录查看吧友最新的帖子~")]),e("u-button",{staticClass:"login-btn",attrs:{type:"primary",shape:"circle",size:"medium"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toLogin.apply(void 0,arguments)}}},[t._v("前往登录")])],1):e("v-uni-view",[0===t.user.followUser.length?e("v-uni-view",[e("v-uni-text",[t._v("嚯~还没有人引起你的关注")])],1):e("v-uni-view",t._l(t.followData.acticleArr,(function(t,i){return e("v-uni-view",{key:i},[e("acticle-content",{attrs:{res:t}})],1)})),1)],1)],1)},r=[]},ec81:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.acticle[data-v-67203a04]{width:%?720?%;padding:10px;margin:0 auto;background-color:#fff;margin-top:10px;-webkit-border-radius:10px;border-radius:10px;font-size:14px}.acticle[data-v-67203a04]::after{display:block;content:"";clear:both}.acticle .user-data[data-v-67203a04]{margin:-50px 0 0 60px;height:50px;line-height:25px}.acticle .acticle-text[data-v-67203a04]{margin-top:10px}.acticle .acticle-text .rich-text[data-v-67203a04]{display:-webkit-box;-webkit-box-orient:vertical;\r\n  /*设置省略号在容器第四行文本后*/-webkit-line-clamp:4;overflow:hidden}.acticle .acticle-img[data-v-67203a04]{-webkit-border-radius:10px;border-radius:10px}.acticle .acticle-img[data-v-67203a04]::after{display:block;content:"";clear:both}.acticle .acticle-img .image[data-v-67203a04]{float:left;margin-right:%?14?%}.acticle .foot[data-v-67203a04]{margin-top:10px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;height:20px;line-height:20px}.acticle .foot .img[data-v-67203a04]{vertical-align:top;height:20px;width:20px;margin-right:5px}',""]),t.exports=i},fe41:function(t,i,e){"use strict";var n=e("40f8"),a=e.n(n);a.a}}]);