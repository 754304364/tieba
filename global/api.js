
import request from '../components/request/request.js'
// 登录
export const login = data => request('/login', data, 'POST');
 
 // 注册 registered
 export const registered = data => request('/registered', data, 'POST');
 
 //查询用户信息
export const selectuser = data => request('/selectuser', data, 'POST');

// 首页查询所有文章
export const selectArticle = data => request('/selectArticle', {}, 'get');
 
 // 请求帖子内容
 export const selectArticleId = data => request(`/selectArticleId?id=${data}`, {}, 'get');
 
 // 请求 回复内容
 export const querycomment = data => request(`/querycomment?id=${data}`, {}, 'get');
// 请求 4个2级 回复 内容
export const queryComSon = data => request(`/queryComSon?fatherid=${data}`, {}, 'get');
// 请求全部 2级回复
export const queryEveryComSon = data => request(`/queryEveryComSon?fatherid=${data}`, {}, 'get');

// 回复
export const comment = data => request('/comment', data, 'POST');
export const commentSon = data => request('/commentSon', data, 'POST');
export const commentSonTwo = data => request('/commentSonTwo', data, 'POST');


 
 
 // 查询 吧 信息
 export const selectTopic = id => request('/selectTopic?id='+ id, {}, 'get');
 
 // 查询关注的用户发的文章
 export const selectFollowActicle = (id) => request('/selectFollowActicle?id='+ id, {}, 'get');
 
 //点赞文章
 export const rewardArticle = id => request('/rewardArticle?id='+ id, {}, 'get');
 // 用户点赞后添加记录
 export const support = (id,userid) => request(`/support?id=${id}&userid=${userid}`, {}, 'get');
 
 
 // 获取登录用户关注的所有 吧
 export const allFollowTopic = (id) => request('/rewardArticle?id='+ id, {}, 'get');
 
 
