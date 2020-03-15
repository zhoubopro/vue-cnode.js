/**
 * 全局配置文件
 */
let baseURL;

let staticUrl = 'http://127.0.0.1:3000';


// 开发接口
export const URI_DEV = 'https://cnodejs.org/api';

// 生产地址
export const URI_PRO = 'https://cnodejs.org/api';

// 成功状态
export const SUCCESS = 200;

// 错误状态
export const ERR_CODE = {
  0: '连接错误',
  400: '错误请求',
  401: '未授权，请重新登录',
  403: '拒绝访问',
  404: '请求错误,未找到该资源',
  405: '请求方法未允许',
  408: '请求超时',
  500: '服务器端出错',
  501: '网络未实现',
  502: '网络错误',
  503: '服务不可用',
  504: '网络超时',
  505: 'http版本不支持该请求',
  'fail': '连接到服务器失败'
};


if (process.env.NODE_ENV === 'development') {
  baseURL = URI_DEV;
}
else {
  baseURL = URI_PRO;
}

function httpCheck(data) {
  const state = data.state;
  if ('NoLogin' === state) {
    window.location.href = '/login';
    return false;
  }
  return true;
}

export default {
  staticUrl,
  baseURL,
  SUCCESS,
  ERR_CODE,
  httpCheck
};
