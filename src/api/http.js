/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
//qs转对象 转字符串
import axios from 'axios';
// import QS from 'qs';
// import { Toast } from 'vant';
// import store from '../store/index'
// import store from '../store/state' 

// 环境的切换
if (process.env.NODE_ENV == 'development') { 
 axios.defaults.baseURL = 'https://testdiv.com/mock/5df1ea3664d0c26e1eee47fc/example/';
} else if (process.env.NODE_ENV == 'debug') { 
 axios.defaults.baseURL = '';
} else if (process.env.NODE_ENV == 'production') { 
 axios.defaults.baseURL = 'http://api.123dailu.com/';
}
 
// 请求超时时间
axios.defaults.timeout = 10000;
 
//公共的请求头
// axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
 

// 请求拦截（配置发送请求的信息）
// axios.interceptors.request.use(function (config){
//   // 处理请求之前的配置
//   return config;
//   }, function (error){
//   // 请求失败的处理
//   return Promise.reject(error);
//   });
 
 
//  // 响应拦截（配置请求回来的信息）
//  axios.interceptors.response.use(function (response){
//   // 处理响应数据
//   return response;
//   }, function (error){
//   // 处理响应失败
//   return Promise.reject(error);
//   });



// 处理get请求
const get = (url, params, config = {}) => axios.get(url, { ...config, params })
// 处理delete请求，为了防止和关键词delete冲突，方法名定义为deletes
const deletes = (url, params, config = {}) => axios.delete(url, { ...config, params })
// 处理post请求
const post = (url, params, config = {}) => axios.post(url, params, config)
// 处理put请求
const put = (url, params, config = {}) => axios.put(url, params, config)
export default {
    get,
    deletes,
    post,
    put
}




