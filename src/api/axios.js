// 配置API接口地址
var root = '/api';
// 引用axios
var axios = require('axios');

// 自定义判断元素类型JS
function toType(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
// 参数过滤函数
function filterNull(o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key];
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim();
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key]);
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key]);
    }
  }
  return o;
}
/*
  接口处理函数
  需要根据接口的参数进行调整。参考说明文档地址：
  https://cnodejs.org/topic/5378720ed6e2d16149fa16bd
*/

function apiAxios(method, url, params, success, failure) {
  if (params) {
    params = filterNull(params);
  }
  axios({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: root,
    withCredentials: false
  })
    .then(function (res) {
      if (res.data.success === true) {
        if (success) {
          success(res.data);
        }
      } else {
        if (failure) {
          failure(res.data);
        } else {
          window.alert('error: ' + JSON.stringify(res.data));
        }
      }
    })
    .catch(function (error) {
      let res = error.response;
      if (res) {
        console.log("测试",res.data);
        console.log("测试",res.status);
        console.log("测试",res.headers);
      }else{
        console.log('error',res.data);
      }
    });
}

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure);
  },
  post: function (url, params, success, failure) {
    return apiAxios('POST', url, params, success, failure);
  },
  put: function (url, params, success, failure) {
    return apiAxios('PUT', url, params, success, failure);
  },
  delete: function (url, params, success, failure) {
    return apiAxios('DELETE', url, params, success, failure);
  }
};