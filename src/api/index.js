/**
 * api接口的统一出口
 */
import http from './http';

/**
 * @param params
 */
function getTopics (params) {
  return http.request({
    url: '/v1/topics',
    method: 'GET',
    params
  });
}

function getTopic (path) {
  return http.request({
    url: '/v1' + path,
    method: 'GET',
  });
}

function getPath (path) {
  return http.request({
    url: '/v1' + path,
    method: 'GET',
  });
}

function getGitUser (params) {
  return http.request({
    url: '/v1/user/' + params,
    method: 'GET',
  });
}


export default {
  getTopics,
  getTopic,
  getPath,
  getGitUser
}
