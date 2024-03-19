import axios from 'axios';
import { ElMessage } from 'element-plus';

import useUserStore from 'src/store/modules/user';

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
});

request.interceptors.request.use((config) => {
  const userStore = useUserStore();
  const token = userStore.user.token;
  console.log('token: ', token);
  if (token) {
    config.headers.token = token;
  }
  return config;
});

// 影响拦截器
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // 失败回调，http网络错误
    let message = '';
    // http状态码
    const status = error.response.status;

    switch (status) {
      case 401:
        message = 'token 过期';
        break;
      case 403:
        message = '无权限访问';
        break;
      case 404:
        message = '请求地址错误';
        break;
      case 500:
        message = '服务器出现问题';
        break;
      default:
        message = '网络出现问题';
        break;
    }
    ElMessage({
      type: 'error',
      message,
    });
    return Promise.reject(error);
  },
);

export default request;
