import axios from 'axios';
import qs from 'qs';
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
export const util = {
  // 通过axios获取数据
  fetchData (params) {
    let {url = '', method = 'post', headers = {}, data = null} = params;
    if (!url) {return};
    return new Promise( res => {
      data = qs.stringify(params.data);
      headers = {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        ...headers
      };
      axios({url, method, headers, data}).then(response => {
        res(response);
      }).catch(error => {
        throw new Error(error);
      })
    })
  },
  // 获取查询参数
  getQueryString (name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    let start = window.location.href.indexOf(name);
    let r = window.location.href.substr(start).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }
};
