(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tiezicontent/tiezicontent"],{"0715":function(t,e,n){"use strict";n.r(e);var o=n("bda2"),i=n("4423");for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);n("e136");var s,r=n("f0c5"),c=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);e["default"]=c.exports},4423:function(t,e,n){"use strict";n.r(e);var o=n("a9e4"),i=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);e["default"]=i.a},"4eaa":function(t,e,n){},"60e9":function(t,e,n){"use strict";(function(t){n("b09c");o(n("66fd"));var e=o(n("0715"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},a9e4:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("304e"),i=function(){n.e("components/comments/comments").then(function(){return resolve(n("4d1d"))}.bind(null,n)).catch(n.oe)},u=function(){n.e("components/reply/reply").then(function(){return resolve(n("dd8c"))}.bind(null,n)).catch(n.oe)},s={data:function(){return{data:[],articleImg:[],user:[],replyShow:!1,articleid:0,commentsData:[],replyType:"tiezi",follow:!1,followText:"关注",login:!1}},components:{comments:i,reply:u},computed:{isLogin:function(){return this.$store.state.login},userImg:function(){if(null!==this.$store.state.user)return this.$store.state.user.img}},methods:{toReply:function(){this.$store.commit("updateReplyShow",!0),this.$store.commit("updateReplyType","tiezi"),this.$store.commit("updateReplyData",{articleid:this.articleid})},toLogin:function(){t.navigateTo({url:"../login/login"})},previewImage:function(e,n){t.previewImage({current:e[n],urls:e,indicator:"default",loop:!0})},followUser:function(e){var n=this;this.$store.state.login?this.follow||this.$request("/followUser",{account:this.$store.state.user.account,id:e},"post").then((function(t){0==t&&(n.follow=!0,n.followText="已关注")})):t.navigateTo({url:"../login/login"})},requestActicle:function(e){var n=this;(0,o.selectArticleId)(e).then((function(e){if(n.data=e,(0,o.selectTopic)(e.topicid).then((function(e){t.setNavigationBarTitle({title:e.name+"吧"})})),n.articleImg=n.data.img.split(","),n.$store.state.login){var i=n.$store.state.user.followUser;i.indexOf(n.data.userid+"")>-1&&(n.follow=!0,n.followText="已关注")}}))},requestComment:function(t){var e=this;(0,o.querycomment)(t).then((function(t){e.commentsData=t}))}},onLoad:function(e){t.showLoading({title:"加载中"}),this.articleid=e.id,this.requestActicle(e.id),this.requestComment(e.id)},onShow:function(){if(null!==this.$store.state.user){var t=this.$store.state.user.followUser;t.indexOf(this.data.userid+"")>-1&&(this.follow=!0,this.followText="已关注")}},onPullDownRefresh:function(){this.data=[],this.commentsData=[],this.requestActicle(this.articleid),this.requestComment(this.articleid),this.$nextTick((function(){t.stopPullDownRefresh()}))},onUnload:function(){this.$store.commit("updateReplyShow",!1)},onReady:function(){t.setNavigationBarTitle({title:"新的标题"})}};e.default=s}).call(this,n("543d")["default"])},bda2:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return o}));var o={uIcon:function(){return n.e("node-modules/uview-ui/components/u-icon/u-icon").then(n.bind(null,"d92a"))},uGap:function(){return n.e("node-modules/uview-ui/components/u-gap/u-gap").then(n.bind(null,"bcb9"))},comments:function(){return n.e("components/comments/comments").then(n.bind(null,"4d1d"))},reply:function(){return n.e("components/reply/reply").then(n.bind(null,"dd8c"))}},i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$u.timeFrom(t.data.second,"yyyy年mm月dd日"));t.$mp.data=Object.assign({},{$root:{g0:n}})},u=[]},e136:function(t,e,n){"use strict";var o=n("4eaa"),i=n.n(o);i.a}},[["60e9","common/runtime","common/vendor"]]]);