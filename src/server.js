import axios from 'axios'

import qs from 'qs'

// axios 配置
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://127.0.0.1:3000/note';

//POST传参序列化
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  _.toast("错误的传参", 'fail');
  return Promise.reject(error);
});

export function fetchPost(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function fetchGet(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
  login(params) {
    return fetchPost('/login', params);
  },
  register(params) {
    return fetchPost('/registe', params);
  },
  getNoteList(params) {
    return fetchPost('/notelist', params);
  },
  getPreviewInfo(params) {
    return fetchPost('/notedetail', params);
  },
  postNote(params) {
    return fetchPost('/editcontent', params);
  },
  refreshNote(params) {
    return fetchPost('/refreshcontent', params);
  },
  logout(params) {
    return fetchPost('./exit', params);
  }
}
