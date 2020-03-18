/**
 * api接口的统一出口
 */
import http from './http';

/**
 * 获取首页帖子列表数据
 * @param params
 * @returns {Promise<AxiosResponse<T>>}
 */
function getTopics (params) {
  return http.request({
    url: '/v1/topics',
    method: 'GET',
    params
  });
}

/**
 * 获取帖子详情数据
 * @param path
 * @returns {Promise<AxiosResponse<T>>}
 */
function getTopic (path) {
  return http.request({
    url: '/v1' + path,
    method: 'GET',
  });
}

/**
 * 获取用户详情数据
 * @param params
 * @returns {Promise<AxiosResponse<T>>}
 */
function getGitUser (params) {
  return http.request({
    url: '/v1/user/' + params,
    method: 'GET',
  });
}


export default {
  getTopics,
  getTopic,
  getGitUser
}
