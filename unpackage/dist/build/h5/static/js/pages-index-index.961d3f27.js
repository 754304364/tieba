(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0624":function(t,e,i){var a=i("dac7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("1116d537",a,!0,{sourceMap:!1,shadowMode:!1})},"07d8":function(t,e,i){"use strict";i.r(e);var a=i("680a"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"107b":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={uImage:i("77e3").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"acticle",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toActicle(t.res.id)}}},[a("u-image",{staticClass:"user-img",attrs:{src:t.res.userimg,width:"50px",height:"50px",shape:"circle","lazy-load":!0}}),a("v-uni-view",{staticClass:"user-data"},[a("v-uni-view",[a("v-uni-text",[t._v(t._s(t.res.username))])],1),a("v-uni-view",[a("v-uni-text",[t._v(t._s(t.res.time))])],1)],1),a("v-uni-view",{staticClass:"acticle-text"},[a("v-uni-rich-text",{staticClass:"rich-text",attrs:{nodes:t.res.txt}})],1),a("v-uni-view",{staticClass:"acticle-img"},t._l(t.res.img,(function(e,i){return a("v-uni-view",{key:i},[a("v-uni-view",{on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.previewImage(t.res.img,e)}}},[a("u-image",{staticClass:"image",attrs:{src:e,"lazy-load":!0,"border-radius":"10px",width:t.res.img.length<2?"450rpx":"213rpx",height:t.res.img.length<2?"500rpx":"220rpx"}})],1)],1)})),1),""!==t.res.video?a("v-uni-video",{staticStyle:{width:"100%"},attrs:{src:t.res.video,poster:"http://www.res.goomee.top/image/acticle/1618632543164_5622963FED5C1721D974F3EFB9BF7A62.jpg",controls:!0}}):t._e(),a("v-uni-view",{staticClass:"foot"},[a("v-uni-view",{staticClass:"share"},[a("v-uni-image",{staticClass:"img",attrs:{src:i("154b")}}),a("v-uni-text",[t._v(t._s(t.res.sharenum))])],1),a("v-uni-view",{staticClass:"comment"},[a("v-uni-image",{staticClass:"img",attrs:{src:i("dc04")}}),a("v-uni-text",[t._v(t._s(t.res.commentnum))])],1),a("v-uni-view",{staticClass:"dianzan"},[a("v-uni-image",{staticClass:"img",attrs:{src:t.dzSrc},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.reward(t.res.id)}}}),a("v-uni-text",[t._v(t._s(t.res.dznum))])],1)],1)],1)},r=[]},"10b3":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.no-login[data-v-58af256a]{text-align:center;margin-top:40%}.no-login .login-btn[data-v-58af256a]{margin-top:20px}',""]),t.exports=e},"111e":function(t,e,i){"use strict";var a=i("4ea4");i("d3b7"),i("3ca3"),i("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("304e"),r=a(i("1ef3")),s=a(i("a525")),c=a(i("6e83")),o={data:function(){return{list:[{name:"关注"},{name:"推荐"},{name:"热榜"},{name:"直播"},{name:"视频号"}],tabs:[1,2,3,4,5],current:1,swiperCurrent:1,maskShow:!1,followShow:!1,videoPageShow:!1,recommendData:{article:[],topicId:[]},followData:{acticleArr:[]},videoPageArr:[],refresherTriggered:!1}},components:{recommend:s.default,follow:r.default,videoPage:c.default},watch:{current:function(t){switch(t){case 0:this.followShow||(this.followRequest(),this.followShow=!0);break;case 4:this.videoPageRequest(),this.videoPageShow=!0;break}}},onPullDownRefresh:function(){switch(this.current){case 0:this.followData.acticleArr=[],this.followRequest(),this.$nextTick((function(){uni.stopPullDownRefresh()}));break;case 1:this.recommendData={article:[],topicId:[]},this.recommend(),this.$nextTick((function(){uni.stopPullDownRefresh()}));break;case 4:this.videoPageArr=[],this.videoPageRequest(),this.$nextTick((function(){uni.stopPullDownRefresh()}));break}},methods:{toSearch:function(){uni.navigateTo({url:"../search/search"})},reply:function(){this.maskShow=!0},toFatie:function(){this.$store.state.login?uni.navigateTo({url:"../fatie/fatie"}):uni.navigateTo({url:"../login/login"})},tabsChange:function(t){this.swiperCurrent=t},change:function(t){},transition:function(t){var e=t.detail.dx;this.$refs.uTabs.setDx(e)},animationfinish:function(t){var e=t.detail.current;this.$refs.uTabs.setFinishCurrent(e),this.swiperCurrent=e,this.current=e},recommend:function(){var t=this;(0,n.selectArticle)().then((function(e){t.recommendData.article=e;for(var i=0;i<e.length;i++)t.recommendData.topicId.push(e[i].topicid)})).then((function(){for(var e=function(e){(0,n.selectTopic)(t.recommendData.topicId[e]).then((function(i){t.$set(t.recommendData.article[e],"baimg",i.img),t.$set(t.recommendData.article[e],"name",i.name),t.$set(t.recommendData.article[e],"guanzhu",i.guanzhu),t.$set(t.recommendData.article[e],"tiezi",i.tiezi)}))},i=0;i<t.recommendData.topicId.length;i++)e(i)}))},followRequest:function(){var t=this;if(null!==this.$store.state.user){for(var e=[],i=JSON.parse(JSON.stringify(this.$store.state.user.followUser)),a=0;a<i.length;a++)e[a]=(0,n.selectFollowActicle)(i[a]);Promise.all(e).then((function(e){for(var i=0;i<e.length;i++)for(var a=0;a<e[i].length;a++)t.followData.acticleArr.push(e[i][a]);for(var n=0;n<t.followData.acticleArr.length-1;n++)for(var r=0;r<t.followData.acticleArr.length-1-n;r++)if(t.followData.acticleArr[r].id<t.followData.acticleArr[r+1].id){var s=t.followData.acticleArr[r];t.followData.acticleArr[r]=t.followData.acticleArr[r+1],t.followData.acticleArr[r+1]=s}}))}},videoPageRequest:function(){var t=this;(0,n.videoPageRequest)().then((function(e){t.videoPageArr=e}))}},onLoad:function(){this.recommend()}};e.default=o},1215:function(t,e,i){"use strict";i.r(e);var a=i("107b"),n=i("6a0c");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("ca78");var s,c=i("f0c5"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"5aa83fbe",null,!1,a["a"],s);e["default"]=o.exports},"154b":function(t,e,i){t.exports=i.p+"static/img/share.b1c0c40c.png"},"16db":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.recommend[data-v-c83b0600]{width:100%}.recommend .container[data-v-c83b0600]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:%?15?%;width:100%;margin:0 auto;background-color:#fff;margin-top:10px;-webkit-border-radius:10px;border-radius:10px}.recommend .container .title[data-v-c83b0600]{height:40px}.recommend .container .title .title-img[data-v-c83b0600]{height:40px;width:40px}.recommend .container .title .title-img uni-image[data-v-c83b0600]{height:100%;width:100%;-webkit-border-radius:40%;border-radius:40%}.recommend .container .title .title-mes[data-v-c83b0600]{height:20px;line-height:20px;margin-left:60px;margin-top:-40px;height:40px}.recommend .container .title .title-num .title-guanzhu[data-v-c83b0600], .recommend .container .title .title-num .title-tiezi[data-v-c83b0600]{display:inline-block;margin-right:10px}.recommend .container .content[data-v-c83b0600]{margin:5px 0 20px 0;margin-bottom:20px}.recommend .container .content .txt[data-v-c83b0600]{font-size:14px}.recommend .container .content .article-img[data-v-c83b0600]{margin-right:%?15?%;-webkit-border-radius:%?20?%;border-radius:%?20?%}.recommend .container .foot[data-v-c83b0600]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;height:20px;line-height:20px}.recommend .container .foot .img[data-v-c83b0600]{vertical-align:top;height:20px;width:20px;margin-right:5px}',""]),t.exports=e},1873:function(t,e,i){"use strict";var a=i("d022"),n=i.n(a);n.a},"1c1a":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("304e"),n={name:"recommend",data:function(){return{src:"http://www.res.goomee.top/image/acticle/1618632543164_5622963FED5C1721D974F3EFB9BF7A62.jpg"}},props:["recommendData"],methods:{toArticle:function(t){uni.navigateTo({url:"../tiezicontent/tiezicontent?id="+t})},toTopic:function(t){uni.navigateTo({url:"../topic/topic?id="+t.topicid})},previewImage:function(t,e){uni.previewImage({current:t[e],urls:t,indicator:"default",loop:!0})},reward:function(t,e){var i=this;this.$store.state.login?(0,a.rewardArticle)(t).then((function(t){i.article[e].dznum++})):uni.navigateTo({url:"../login/login"})}},created:function(){}};e.default=n},"1ef3":function(t,e,i){"use strict";i.r(e);var a=i("6273"),n=i("07d8");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("b384");var s,c=i("f0c5"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"58af256a",null,!1,a["a"],s);e["default"]=o.exports},"22bd":function(t,e,i){"use strict";var a=i("fcf6"),n=i.n(a);n.a},"29ae":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"recommend"},t._l(t.recommendData.article,(function(e,n){return a("v-uni-view",{key:n,staticClass:"container",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toArticle(e.id)}}},[a("v-uni-view",{staticClass:"title"},[a("v-uni-view",{staticClass:"title-img"},[a("v-uni-image",{attrs:{src:e.baimg},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.toTopic(e)}}})],1),a("v-uni-view",{staticClass:"title-mes"},[a("v-uni-view",{staticClass:"title-name"},[t._v(t._s(e.name)+"吧")]),a("v-uni-view",{staticClass:"title-num"},[a("v-uni-view",{staticClass:"title-guanzhu"},[t._v("关注:"+t._s(e.guanzhu))]),a("v-uni-view",{staticClass:"title-tiezi"},[t._v("帖子:"+t._s(e.tiezi))])],1)],1)],1),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"txt",domProps:{innerHTML:t._s(e.txt)}}),t._l(e.img,(function(i,n){return a("v-uni-view",{key:n,staticStyle:{float:"left"}},[n<3&&e.img?a("v-uni-image",{key:n,staticClass:"article-img",style:{width:e.img.length<2?"450rpx":"220rpx",height:e.img.length<2?"500rpx":"220rpx"},attrs:{src:i,mode:"aspectFill"},on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.previewImage(e.img,i)}}}):t._e()],1)})),""!==e.video?a("v-uni-video",{staticStyle:{width:"100%"},attrs:{poster:t.src,src:e.video,controls:!0}}):t._e(),a("v-uni-view",{staticStyle:{clear:"both"}})],2),a("v-uni-view",{staticClass:"foot"},[a("v-uni-view",{staticClass:"share"},[a("v-uni-image",{staticClass:"img",attrs:{src:i("154b")}}),a("v-uni-text",[t._v(t._s(e.sharenum))])],1),a("v-uni-view",{staticClass:"comment"},[a("v-uni-image",{staticClass:"img",attrs:{src:i("dc04")}}),a("v-uni-text",[t._v(t._s(e.commentnum))])],1),a("v-uni-view",{staticClass:"dianzan"},[a("v-uni-image",{staticClass:"img",attrs:{src:i("9ed1")},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.reward(e.id,n)}}}),a("v-uni-text",[t._v(t._s(e.dznum))])],1)],1)],1)})),1)},r=[]},3647:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={uImage:i("77e3").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"acticle",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toActicle(t.res.id)}}},[a("u-image",{staticClass:"user-img",attrs:{src:t.res.userimg,width:"50px",height:"50px",shape:"circle","lazy-load":!0}}),a("v-uni-view",{staticClass:"user-data"},[a("v-uni-view",[a("v-uni-text",[t._v(t._s(t.res.username))])],1),a("v-uni-view",[a("v-uni-text",[t._v(t._s(t.res.time))])],1)],1),a("v-uni-view",{staticClass:"acticle-text"},[a("v-uni-rich-text",{staticClass:"rich-text",attrs:{nodes:t.res.txt}})],1),a("v-uni-view",{staticClass:"acticle-img"},t._l(t.res.img,(function(e,i){return a("v-uni-view",{key:i},[a("v-uni-view",{on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.previewImage(t.res.img,e)}}},[a("u-image",{staticClass:"image",attrs:{src:e,"lazy-load":!0,"border-radius":"10px",width:t.res.img.length<2?"450rpx":"213rpx",height:t.res.img.length<2?"500rpx":"220rpx"}})],1)],1)})),1),""!==t.res.video?a("v-uni-video",{staticStyle:{width:"100%"},attrs:{src:t.res.video,controls:!0}}):t._e(),a("v-uni-view",{staticClass:"foot"},[a("v-uni-view",{staticClass:"share"},[a("v-uni-image",{staticClass:"img",attrs:{src:i("154b")}}),a("v-uni-text",[t._v(t._s(t.res.sharenum))])],1),a("v-uni-view",{staticClass:"comment"},[a("v-uni-image",{staticClass:"img",attrs:{src:i("dc04")}}),a("v-uni-text",[t._v(t._s(t.res.commentnum))])],1),a("v-uni-view",{staticClass:"dianzan"},[a("v-uni-image",{staticClass:"img",attrs:{src:t.dzSrc},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.reward(t.res.id)}}}),a("v-uni-text",[t._v(t._s(t.res.dznum))])],1)],1)],1)},r=[]},3702:function(t,e,i){var a=i("10b3");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("45c443c3",a,!0,{sourceMap:!1,shadowMode:!1})},"4e00":function(t,e,i){"use strict";i.r(e);var a=i("60b9"),n=i("6ff1");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("22bd");var s,c=i("f0c5"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"045bfc5e",null,!1,a["a"],s);e["default"]=o.exports},5940:function(t,e,i){"use strict";i.r(e);var a=i("d08b"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"60b9":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={uNavbar:i("e4e3").default,uMask:i("cc75").default,uImage:i("77e3").default,uTabsSwiper:i("422e").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("u-navbar",{staticClass:"top-navbar",attrs:{"is-back":!1,background:{background:"#F5F5F5"}}},[i("v-uni-view",{staticClass:"top-navbar-input",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toSearch.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("搜索")])],1),i("v-uni-view",{staticClass:"top-navbar-btn",attrs:{slot:"right"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.reply.apply(void 0,arguments)}},slot:"right"},[t._v("发布")]),t.maskShow?i("u-mask",{staticClass:"warp",attrs:{"custom-style":{background:"rgba(0, 0, 0, 0.2)"},show:t.maskShow},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.maskShow=!1}}}):t._e()],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.maskShow,expression:"maskShow"}],staticClass:"rect"},[i("v-uni-view",{staticClass:"rect-li",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toFatie.apply(void 0,arguments)}}},[i("u-image",{staticClass:"rect-image",attrs:{src:"/static/fatie.png","border-radius":"20",width:"30px",height:"30px",mode:""}}),i("v-uni-text",{staticClass:"text"},[t._v("发帖")])],1),i("v-uni-view",{staticClass:"rect-li"},[i("u-image",{staticClass:"rect-image",attrs:{src:"/static/tupian_image.png","border-radius":"20",width:"30px",height:"30px",mode:""}}),i("v-uni-text",{staticClass:"text"},[t._v("图片/视频")])],1),i("v-uni-view",{staticClass:"rect-li"},[i("u-image",{staticClass:"rect-image",attrs:{src:"/static/Shoot.png","border-radius":"20",width:"30px",height:"30px",mode:""}}),i("v-uni-text",{staticClass:"text"},[t._v("拍摄")])],1),i("v-uni-view",{staticClass:"rect-li"},[i("u-image",{staticClass:"rect-image",attrs:{src:"/static/Live.png","border-radius":"20",width:"30px",height:"30px",mode:""}}),i("v-uni-text",{staticClass:"text"},[t._v("直播")])],1),i("v-uni-view",{staticClass:"rect-li"},[i("u-image",{staticClass:"rect-image",attrs:{src:"/static/vote.png","border-radius":"20",width:"30px",height:"30px",mode:""}}),i("v-uni-text",{staticClass:"text"},[t._v("投票")])],1),i("v-uni-view",{staticClass:"rect-li"},[i("u-image",{staticClass:"rect-image",attrs:{src:"/static/evaluation.png","border-radius":"20",width:"30px",height:"30px",mode:""}}),i("v-uni-text",{staticClass:"text"},[t._v("评价")])],1)],1),i("u-tabs-swiper",{ref:"uTabs",staticClass:"tabs-swiper",attrs:{list:t.list,"bg-color":"#ededed;",current:t.current,"is-scroll":!1,swiperWidth:"750"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.tabsChange.apply(void 0,arguments)}}}),i("v-uni-swiper",{staticClass:"swiper",attrs:{duration:"300",current:t.swiperCurrent},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)},transition:function(e){arguments[0]=e=t.$handleEvent(e),t.transition.apply(void 0,arguments)},animationfinish:function(e){arguments[0]=e=t.$handleEvent(e),t.animationfinish.apply(void 0,arguments)}}},[i("v-uni-swiper-item",{staticClass:"swiper-item"},[i("v-uni-scroll-view",{staticStyle:{width:"100%"},attrs:{"scroll-y":!0}},[t.followShow?i("follow",{attrs:{followData:t.followData}}):t._e()],1)],1),i("v-uni-swiper-item",{staticClass:"swiper-item"},[i("v-uni-scroll-view",{staticStyle:{width:"100%"},attrs:{"scroll-y":!0}},[i("recommend",{attrs:{recommendData:t.recommendData}})],1)],1),i("v-uni-swiper-item",{staticClass:"swiper-item"},[i("v-uni-scroll-view",{staticStyle:{width:"100%"},attrs:{"scroll-y":!0}})],1),i("v-uni-swiper-item",{staticClass:"swiper-item"},[i("v-uni-scroll-view",{staticStyle:{width:"100%"},attrs:{"scroll-y":!0}})],1),i("v-uni-swiper-item",{staticClass:"swiper-item",staticStyle:{"overflow-y":"auto"}},[i("v-uni-scroll-view",{staticStyle:{width:"100%"},attrs:{"scroll-y":!0}},[t.videoPageShow?i("video-page",{attrs:{res:t.videoPageArr}}):t._e()],1)],1)],1)],1)},r=[]},6273:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={uButton:i("1f20").default,acticleContent:i("9ca0").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[null==t.user?i("v-uni-view",{staticClass:"no-login"},[i("v-uni-view",{staticClass:"txt"},[t._v("登录查看吧友最新的帖子~")]),i("u-button",{staticClass:"login-btn",attrs:{type:"primary",shape:"circle",size:"medium"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toLogin.apply(void 0,arguments)}}},[t._v("前往登录")])],1):i("v-uni-view",[0===t.user.followUser.length?i("v-uni-view",[i("v-uni-text",[t._v("嚯~还没有人引起你的关注")])],1):i("v-uni-view",t._l(t.followData.acticleArr,(function(t,e){return i("v-uni-view",{key:e},[i("acticle-content",{attrs:{res:t}})],1)})),1)],1)],1)},r=[]},"680a":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"follow",data:function(){return{}},props:["followData"],methods:{toLogin:function(){uni.navigateTo({url:"../../pages/login/login"})}},computed:{login:function(){return this.$store.state.login},user:function(){return this.$store.state.user}}};e.default=a},"69b4":function(t,e,i){"use strict";i("c975"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("304e"),n={name:"acticle-content",props:["res"],data:function(){return{dzSrc:"/static/dianzan.png",isDz:!1}},created:function(){null!==this.$store.state.user&&-1!==this.$store.state.user.support.indexOf(this.res.id+"")&&(this.dzSrc="/static/dianzan2.png",this.isDz=!0)},methods:{toActicle:function(t){uni.navigateTo({url:"../tiezicontent/tiezicontent?id=".concat(t)})},reward:function(t){var e=this;this.$store.state.login?!0===this.isDz||(0,a.rewardArticle)(t).then((function(i){0===i&&(e.res.dznum++,e.isDz=!0,e.dzSrc="/static/dianzan2.png",(0,a.support)(t,e.$store.state.user.id))})):uni.navigateTo({url:"../login/login"})},previewImage:function(t,e){uni.previewImage({current:t[e],urls:t,indicator:"default",loop:!0})}}};e.default=n},"6a0c":function(t,e,i){"use strict";i.r(e);var a=i("69b4"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"6e83":function(t,e,i){"use strict";i.r(e);var a=i("dea0"),n=i("fd72");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);var s,c=i("f0c5"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"377115f7",null,!1,a["a"],s);e["default"]=o.exports},"6ff1":function(t,e,i){"use strict";i.r(e);var a=i("111e"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"895d":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-045bfc5e]{background-color:#f5f5f5;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?10?%}.content .top-navbar .top-navbar-input[data-v-045bfc5e]{background-color:#ededed;margin-left:10px;line-height:30px;height:30px;-webkit-border-radius:20px;border-radius:20px;width:60%;padding-left:10%}.content .top-navbar .top-navbar-btn[data-v-045bfc5e]{margin-right:10px;padding:0 20px;-webkit-border-radius:20px;border-radius:20px;background-color:#8a2be2;color:#fff;height:30px;line-height:30px}.content .rect[data-v-045bfc5e]{position:fixed;z-index:999;right:%?15?%;background-color:#000;-webkit-border-radius:10px;border-radius:10px;color:#fff;text-align:center;-webkit-transition:all .3s;transition:all .3s}.content .rect .rect-li[data-v-045bfc5e]{padding:10px;height:50px;border-bottom:.1px solid #606266}.content .rect .rect-li .rect-image[data-v-045bfc5e]{float:left;margin-right:10px}.content .rect .rect-li .text[data-v-045bfc5e]{line-height:30px;float:left}.swiper[data-v-045bfc5e]{min-height:calc(100vh - 140px)}.swiper .swiper-item[data-v-045bfc5e]{overflow-y:auto}body.?%PAGE?%[data-v-045bfc5e]{background-color:#f5f5f5}',""]),t.exports=e},9459:function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i("304e");var n=a(i("1215")),r={name:"videoPage",data:function(){return{}},props:["res"],components:{acticleContent:n.default},created:function(){}};e.default=r},9660:function(t,e,i){"use strict";var a=i("0624"),n=i.n(a);n.a},"9ca0":function(t,e,i){"use strict";i.r(e);var a=i("3647"),n=i("5940");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("9660");var s,c=i("f0c5"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"68abd60c",null,!1,a["a"],s);e["default"]=o.exports},"9ed1":function(t,e,i){t.exports=i.p+"static/img/dianzan.c5c6418a.png"},a525:function(t,e,i){"use strict";i.r(e);var a=i("29ae"),n=i("e1ad");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("1873");var s,c=i("f0c5"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"c83b0600",null,!1,a["a"],s);e["default"]=o.exports},b384:function(t,e,i){"use strict";var a=i("3702"),n=i.n(a);n.a},c0a7:function(t,e,i){var a=i("f700");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("6e81fce5",a,!0,{sourceMap:!1,shadowMode:!1})},ca78:function(t,e,i){"use strict";var a=i("c0a7"),n=i.n(a);n.a},d022:function(t,e,i){var a=i("16db");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("6c1fc60e",a,!0,{sourceMap:!1,shadowMode:!1})},d08b:function(t,e,i){"use strict";i("c975"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("304e"),n={name:"acticle-content",props:["res"],data:function(){return{dzSrc:"/static/dianzan.png",isDz:!1,src:"http://www.res.goomee.top/image/acticle/1618632543164_5622963FED5C1721D974F3EFB9BF7A62.jpg"}},created:function(){null!==this.$store.state.user&&-1!==this.$store.state.user.support.indexOf(this.res.id+"")&&(this.dzSrc="/static/dianzan2.png",this.isDz=!0)},methods:{toActicle:function(t){uni.navigateTo({url:"../tiezicontent/tiezicontent?id=".concat(t)})},reward:function(t){var e=this;this.$store.state.login?!0===this.isDz||(0,a.rewardArticle)(t).then((function(i){0===i&&(e.res.dznum++,e.isDz=!0,e.dzSrc="/static/dianzan2.png",(0,a.support)(t,e.$store.state.user.id))})):uni.navigateTo({url:"../login/login"})},previewImage:function(t,e){uni.previewImage({current:t[e],urls:t,indicator:"default",loop:!0})}}};e.default=n},dac7:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.acticle[data-v-68abd60c]{width:%?720?%;padding:10px;margin:0 auto;background-color:#fff;margin-top:10px;-webkit-border-radius:10px;border-radius:10px;font-size:14px}.acticle[data-v-68abd60c]::after{display:block;content:"";clear:both}.acticle .user-data[data-v-68abd60c]{margin:-50px 0 0 60px;height:50px;line-height:25px}.acticle .acticle-text[data-v-68abd60c]{margin-top:10px}.acticle .acticle-text .rich-text[data-v-68abd60c]{display:-webkit-box;-webkit-box-orient:vertical;\r\n  /*设置省略号在容器第四行文本后*/-webkit-line-clamp:4;overflow:hidden}.acticle .acticle-img[data-v-68abd60c]{-webkit-border-radius:10px;border-radius:10px}.acticle .acticle-img[data-v-68abd60c]::after{display:block;content:"";clear:both}.acticle .acticle-img .image[data-v-68abd60c]{float:left;margin-right:%?14?%}.acticle .foot[data-v-68abd60c]{margin-top:10px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;height:20px;line-height:20px}.acticle .foot .img[data-v-68abd60c]{vertical-align:top;height:20px;width:20px;margin-right:5px}',""]),t.exports=e},dc04:function(t,e,i){t.exports=i.p+"static/img/huifu.60a00d8e.png"},dea0:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={acticleContent:i("9ca0").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",t._l(t.res,(function(t,e){return i("v-uni-view",{key:e},[i("acticle-content",{attrs:{res:t}})],1)})),1)},r=[]},e1ad:function(t,e,i){"use strict";i.r(e);var a=i("1c1a"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},f700:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.acticle[data-v-5aa83fbe]{width:%?720?%;padding:10px;margin:0 auto;background-color:#fff;margin-top:10px;-webkit-border-radius:10px;border-radius:10px;font-size:14px}.acticle[data-v-5aa83fbe]::after{display:block;content:"";clear:both}.acticle .user-data[data-v-5aa83fbe]{margin:-50px 0 0 60px;height:50px;line-height:25px}.acticle .acticle-text[data-v-5aa83fbe]{margin-top:10px}.acticle .acticle-text .rich-text[data-v-5aa83fbe]{display:-webkit-box;-webkit-box-orient:vertical;\r\n  /*设置省略号在容器第四行文本后*/-webkit-line-clamp:4;overflow:hidden}.acticle .acticle-img[data-v-5aa83fbe]{-webkit-border-radius:10px;border-radius:10px}.acticle .acticle-img[data-v-5aa83fbe]::after{display:block;content:"";clear:both}.acticle .acticle-img .image[data-v-5aa83fbe]{float:left;margin-right:%?14?%}.acticle .foot[data-v-5aa83fbe]{margin-top:10px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;height:20px;line-height:20px}.acticle .foot .img[data-v-5aa83fbe]{vertical-align:top;height:20px;width:20px;margin-right:5px}',""]),t.exports=e},fcf6:function(t,e,i){var a=i("895d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("f5dd2bdc",a,!0,{sourceMap:!1,shadowMode:!1})},fd72:function(t,e,i){"use strict";i.r(e);var a=i("9459"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a}}]);