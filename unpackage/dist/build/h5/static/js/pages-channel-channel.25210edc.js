(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-channel-channel"],{"0624":function(t,e,i){var r=i("dac7");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("4f06").default;n("1116d537",r,!0,{sourceMap:!1,shadowMode:!1})},"154b":function(t,e,i){t.exports=i.p+"static/img/share.b1c0c40c.png"},"1c52":function(t,e,i){"use strict";i.r(e);var r=i("dd21"),n=i("816c");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);var o,c=i("f0c5"),s=Object(c["a"])(n["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);e["default"]=s.exports},"304e":function(t,e,i){"use strict";var r=i("4ea4");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.allFollowTopic=e.support=e.rewardArticle=e.selectFollowActicle=e.selectTopic=e.commentSonTwo=e.commentSon=e.comment=e.queryEveryComSon=e.queryComSon=e.querycomment=e.videoPageRequest=e.selectArticleId=e.selectArticle=e.selectuser=e.registered=e.login=void 0;var n=r(i("1f72")),a=function(t){return(0,n.default)("/login",t,"POST")};e.login=a;var o=function(t){return(0,n.default)("/registered",t,"POST")};e.registered=o;var c=function(t){return(0,n.default)("/selectuser",t,"POST")};e.selectuser=c;var s=function(t){return(0,n.default)("/selectArticle",{},"get")};e.selectArticle=s;var u=function(t){return(0,n.default)("/selectArticleId?id=".concat(t),{},"get")};e.selectArticleId=u;var d=function(){return(0,n.default)("/videoPage",{},"get")};e.videoPageRequest=d;var l=function(t){return(0,n.default)("/querycomment?id=".concat(t),{},"get")};e.querycomment=l;var f=function(t){return(0,n.default)("/queryComSon?fatherid=".concat(t),{},"get")};e.queryComSon=f;var p=function(t){return(0,n.default)("/queryEveryComSon?fatherid=".concat(t),{},"get")};e.queryEveryComSon=p;var v=function(t){return(0,n.default)("/comment",t,"POST")};e.comment=v;var g=function(t){return(0,n.default)("/commentSon",t,"POST")};e.commentSon=g;var h=function(t){return(0,n.default)("/commentSonTwo",t,"POST")};e.commentSonTwo=h;var m=function(t){return(0,n.default)("/selectTopic?id="+t,{},"get")};e.selectTopic=m;var b=function(t){return(0,n.default)("/selectFollowActicle?id="+t,{},"get")};e.selectFollowActicle=b;var w=function(t){return(0,n.default)("/rewardArticle?id="+t,{},"get")};e.rewardArticle=w;var y=function(t,e){return(0,n.default)("/support?id=".concat(t,"&userid=").concat(e),{},"get")};e.support=y;var x=function(t){return(0,n.default)("/allFollowTopic?id="+t,{},"get")};e.allFollowTopic=x},3647:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return r}));var r={uImage:i("77e3").default},n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"acticle",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toActicle(t.res.id)}}},[r("u-image",{staticClass:"user-img",attrs:{src:t.res.userimg,width:"50px",height:"50px",shape:"circle","lazy-load":!0}}),r("v-uni-view",{staticClass:"user-data"},[r("v-uni-view",[r("v-uni-text",[t._v(t._s(t.res.username))])],1),r("v-uni-view",[r("v-uni-text",[t._v(t._s(t.res.time))])],1)],1),r("v-uni-view",{staticClass:"acticle-text"},[r("v-uni-rich-text",{staticClass:"rich-text",attrs:{nodes:t.res.txt}})],1),r("v-uni-view",{staticClass:"acticle-img"},t._l(t.res.img,(function(e,i){return r("v-uni-view",{key:i},[r("v-uni-view",{on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.previewImage(t.res.img,e)}}},[r("u-image",{staticClass:"image",attrs:{src:e,"lazy-load":!0,"border-radius":"10px",width:t.res.img.length<2?"450rpx":"213rpx",height:t.res.img.length<2?"500rpx":"220rpx"}})],1)],1)})),1),""!==t.res.video?r("v-uni-video",{staticStyle:{width:"100%"},attrs:{src:t.res.video,controls:!0}}):t._e(),r("v-uni-view",{staticClass:"foot"},[r("v-uni-view",{staticClass:"share"},[r("v-uni-image",{staticClass:"img",attrs:{src:i("154b")}}),r("v-uni-text",[t._v(t._s(t.res.sharenum))])],1),r("v-uni-view",{staticClass:"comment"},[r("v-uni-image",{staticClass:"img",attrs:{src:i("dc04")}}),r("v-uni-text",[t._v(t._s(t.res.commentnum))])],1),r("v-uni-view",{staticClass:"dianzan"},[r("v-uni-image",{staticClass:"img",attrs:{src:t.dzSrc},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.reward(t.res.id)}}}),r("v-uni-text",[t._v(t._s(t.res.dznum))])],1)],1)],1)},a=[]},"55ec":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"u-image",props:{src:{type:String,default:""},mode:{type:String,default:"aspectFill"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},shape:{type:String,default:"square"},borderRadius:{type:[String,Number],default:0},lazyLoad:{type:Boolean,default:!0},showMenuByLongpress:{type:Boolean,default:!0},loadingIcon:{type:String,default:"photo"},errorIcon:{type:String,default:"error-circle"},showLoading:{type:Boolean,default:!0},showError:{type:Boolean,default:!0},fade:{type:Boolean,default:!0},webp:{type:Boolean,default:!1},duration:{type:[String,Number],default:500},bgColor:{type:String,default:"#f3f4f6"}},data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{}}},watch:{src:{immediate:!0,handler:function(t){t?this.isError=!1:(this.isError=!0,this.loading=!1)}}},computed:{wrapStyle:function(){var t={};return t.width=this.$u.addUnit(this.width),t.height=this.$u.addUnit(this.height),t.borderRadius="circle"==this.shape?"50%":this.$u.addUnit(this.borderRadius),t.overflow=this.borderRadius>0?"hidden":"visible",this.fade&&(t.opacity=this.opacity,t.transition="opacity ".concat(Number(this.durationTime)/1e3,"s ease-in-out")),t}},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(t){this.loading=!1,this.isError=!0,this.$emit("error",t)},onLoadHandler:function(){var t=this;if(this.loading=!1,this.isError=!1,this.$emit("load"),!this.fade)return this.removeBgColor();this.opacity=0,this.durationTime=0,setTimeout((function(){t.durationTime=t.duration,t.opacity=1,setTimeout((function(){t.removeBgColor()}),t.durationTime)}),50)},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};e.default=r},5940:function(t,e,i){"use strict";i.r(e);var r=i("d08b"),n=i.n(r);for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);e["default"]=n.a},"5f38":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return r}));var r={uIcon:i("d92a").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-image",style:[t.wrapStyle,t.backgroundStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.isError?t._e():i("v-uni-image",{staticClass:"u-image__image",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)},attrs:{src:t.src,mode:t.mode,"lazy-load":t.lazyLoad,"show-menu-by-longpress":t.showMenuByLongpress},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.onErrorHandler.apply(void 0,arguments)},load:function(e){arguments[0]=e=t.$handleEvent(e),t.onLoadHandler.apply(void 0,arguments)}}}),t.showLoading&&t.loading?i("v-uni-view",{staticClass:"u-image__loading",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius),backgroundColor:this.bgColor}},[t.$slots.loading?t._t("loading"):i("u-icon",{attrs:{name:t.loadingIcon,width:t.width,height:t.height}})],2):t._e(),t.showError&&t.isError&&!t.loading?i("v-uni-view",{staticClass:"u-image__error",style:{borderRadius:"circle"==t.shape?"50%":t.$u.addUnit(t.borderRadius)}},[t.$slots.error?t._t("error"):i("u-icon",{attrs:{name:t.errorIcon,width:t.width,height:t.height}})],2):t._e()],1)},a=[]},"60e5":function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-image[data-v-3fdd3616]{position:relative;-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out}.u-image__image[data-v-3fdd3616]{width:100%;height:100%}.u-image__loading[data-v-3fdd3616], .u-image__error[data-v-3fdd3616]{position:absolute;top:0;left:0;width:100%;height:100%;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:#f3f4f6;color:#909399;font-size:%?46?%}',""]),t.exports=e},"77e3":function(t,e,i){"use strict";i.r(e);var r=i("5f38"),n=i("e585");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("e338");var o,c=i("f0c5"),s=Object(c["a"])(n["default"],r["b"],r["c"],!1,null,"3fdd3616",null,!1,r["a"],o);e["default"]=s.exports},"816c":function(t,e,i){"use strict";i.r(e);var r=i("e76a"),n=i.n(r);for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);e["default"]=n.a},9660:function(t,e,i){"use strict";var r=i("0624"),n=i.n(r);n.a},"9ca0":function(t,e,i){"use strict";i.r(e);var r=i("3647"),n=i("5940");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("9660");var o,c=i("f0c5"),s=Object(c["a"])(n["default"],r["b"],r["c"],!1,null,"68abd60c",null,!1,r["a"],o);e["default"]=s.exports},b9d4:function(t,e,i){var r=i("60e5");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("4f06").default;n("4661da7d",r,!0,{sourceMap:!1,shadowMode:!1})},d08b:function(t,e,i){"use strict";i("c975"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i("304e"),n={name:"acticle-content",props:["res"],data:function(){return{dzSrc:"/static/dianzan.png",isDz:!1,src:"http://www.res.goomee.top/image/acticle/1618632543164_5622963FED5C1721D974F3EFB9BF7A62.jpg"}},created:function(){null!==this.$store.state.user&&-1!==this.$store.state.user.support.indexOf(this.res.id+"")&&(this.dzSrc="/static/dianzan2.png",this.isDz=!0)},methods:{toActicle:function(t){uni.navigateTo({url:"../tiezicontent/tiezicontent?id=".concat(t)})},reward:function(t){var e=this;this.$store.state.login?!0===this.isDz||(0,r.rewardArticle)(t).then((function(i){0===i&&(e.res.dznum++,e.isDz=!0,e.dzSrc="/static/dianzan2.png",(0,r.support)(t,e.$store.state.user.id))})):uni.navigateTo({url:"../login/login"})},previewImage:function(t,e){uni.previewImage({current:t[e],urls:t,indicator:"default",loop:!0})}}};e.default=n},dac7:function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.acticle[data-v-68abd60c]{width:%?720?%;padding:10px;margin:0 auto;background-color:#fff;margin-top:10px;-webkit-border-radius:10px;border-radius:10px;font-size:14px}.acticle[data-v-68abd60c]::after{display:block;content:"";clear:both}.acticle .user-data[data-v-68abd60c]{margin:-50px 0 0 60px;height:50px;line-height:25px}.acticle .acticle-text[data-v-68abd60c]{margin-top:10px}.acticle .acticle-text .rich-text[data-v-68abd60c]{display:-webkit-box;-webkit-box-orient:vertical;\r\n  /*设置省略号在容器第四行文本后*/-webkit-line-clamp:4;overflow:hidden}.acticle .acticle-img[data-v-68abd60c]{-webkit-border-radius:10px;border-radius:10px}.acticle .acticle-img[data-v-68abd60c]::after{display:block;content:"";clear:both}.acticle .acticle-img .image[data-v-68abd60c]{float:left;margin-right:%?14?%}.acticle .foot[data-v-68abd60c]{margin-top:10px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;height:20px;line-height:20px}.acticle .foot .img[data-v-68abd60c]{vertical-align:top;height:20px;width:20px;margin-right:5px}',""]),t.exports=e},dc04:function(t,e,i){t.exports=i.p+"static/img/huifu.60a00d8e.png"},dd21:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return r}));var r={acticleContent:i("9ca0").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",t._l(t.article,(function(t,e){return i("v-uni-view",{key:e},[i("acticle-content",{attrs:{res:t}})],1)})),1)},a=[]},e338:function(t,e,i){"use strict";var r=i("b9d4"),n=i.n(r);n.a},e585:function(t,e,i){"use strict";i.r(e);var r=i("55ec"),n=i.n(r);for(var a in r)"default"!==a&&function(t){i.d(e,t,(function(){return r[t]}))}(a);e["default"]=n.a},e76a:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i("304e"),n={data:function(){return{article:[]}},created:function(){var t=this;(0,r.selectArticle)().then((function(e){t.article=e}))}};e.default=n}}]);