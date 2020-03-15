//引入axios
import axios from 'axios';
import config from './config';

// 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let pending = [];
// 创建axios实例
let instance = axios.create();
// 基础路径
instance.defaults.baseURL = config.baseURL;
// 超时时间设置
instance.defaults.timeout = 1000 * 60 * 3;
let cancelToken = axios.CancelToken;
let removePending = ever => {
  for (let p in pending) {
    if (pending[p].u === ever.url + '&' + JSON.stringify(ever.data) + '&' + ever.method) { //当当前请求在数组中存在时执行函数体
      pending[p].fn(); //执行取消操作
      pending.splice(p, 1); //把这条记录从数组中移除
    }
  }
  // console.log(pending);
};
// Cooike 信息
// instance.defaults.withCredentials = true;
//请求拦截器
instance.interceptors.request.use(
  config => {
    config.headers = {
      // 'Content-Type': 'application/x-www-form-urlencoded'
      'Content-Type': 'application/json;charset=UTF-8'
    };
    config.data = JSON.stringify(config.data);
    // ------------------------------------------------------------------------------------
    removePending(config); //在一个ajax发送前执行一下取消操作
    config.cancelToken = new cancelToken(c => {
      // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
      pending.push({
        u: config.url + '&' + JSON.stringify(config.data) + '&' + config.method,
        fn: c
      });
    });
    // -----------------------------------------------------------------------------------------
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器即异常处理
instance.interceptors.response.use(
  response => {
    // ------------------------------------------------------------------------------------------
    removePending(response.config);  //在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
    // -------------------------------------------------------------------------------------------
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据 否则的话抛出错误
    // console.log(response.config.url, '请求结束：' + new Date().toLocaleTimeString());
    if (response.status === config.SUCCESS) {
      let state = config.httpCheck(response.data);
      if (response.status === config.SUCCESS && state) {
        return Promise.resolve(response);
      }
      else {
        return Promise.reject(response);
      }
    }
    else {
      return Promise.reject(response);
    }
  },
  err => {
    if (err && err.response) {
      err.message = config.ERR_CODE[err.response.status] || `${config.ERR_CODE[0]}${err.response.status}`;
    }
    else {
      err.message = config.ERR_CODE['fail'];
    }
    return Promise.reject(err);
  }
);

export default instance;
