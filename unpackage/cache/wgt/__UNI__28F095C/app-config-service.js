
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/jinba/jinba","pages/channel/channel","pages/news/news","pages/user/user","pages/fatie/fatie","pages/tiezicontent/tiezicontent","pages/login/login","pages/topic/topic","pages/search/search"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"backgroundColor":"#fff","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/tabbar/home.png","selectedIconPath":"static/tabbar/home2.png"},{"pagePath":"pages/jinba/jinba","text":"进吧","iconPath":"static/tabbar/jinba.png","selectedIconPath":"static/tabbar/jinba2.png"},{"pagePath":"pages/channel/channel","text":"频道","iconPath":"static/tabbar/channel.png","selectedIconPath":"static/tabbar/channel2.png"},{"pagePath":"pages/news/news","text":"消息","iconPath":"static/tabbar/news.png","selectedIconPath":"static/tabbar/news2.png"},{"pagePath":"pages/user/user","text":"我的","iconPath":"static/tabbar/user.png","selectedIconPath":"static/tabbar/user2.png"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"百度贴吧","compilerVersion":"3.1.8","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":true,"navigationBarTitleText":"贴吧","navigationStyle":"custom"}},{"path":"/pages/jinba/jinba","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/channel/channel","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/news/news","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/user/user","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/fatie/fatie","meta":{},"window":{"navigationStyle":"custom","animationType":"slide-in-bottom","animationDuration":300}},{"path":"/pages/tiezicontent/tiezicontent","meta":{},"window":{"softinputMode":"adjustResize"}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"登录","navigationBarBackgroundColor":"#fff"}},{"path":"/pages/topic/topic","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/search/search","meta":{},"window":{"navigationStyle":"custom","navigationBarTitleText":"","enablePullDownRefresh":false,"animationType":"slide-in-right","animationDuration":300}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});