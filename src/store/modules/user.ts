import { defineStore } from 'pinia';
import { reactive } from 'vue';
// import { reqLogin } from '../../api/user/index';
import { reqLogin, reqUserInfo } from 'src/api/user/index';
import type { loginForm } from '../../api/user/type';

const useUserStore = defineStore('User', () => {
  const user = reactive({
    userInfo: {},
    token: '',
  });

  async function handleLogin(data: loginForm) {
    const result = await reqLogin(data);
    if (result.code == 200) {
      user.token = result.data.token;
      // 本地存储
      window.sessionStorage.setItem('token', user.token);
      setUserInfo();
      return { ok: true, mssage: '登录成功' };
    } else {
      return Promise.reject(new Error(result.message));
    }
  }

  async function setUserInfo() {
    try {
      const result = await reqUserInfo();
      console.log('result:reqUserInfo  ', result);
      if (result.code == 200) {
        user.userInfo = result.data.user;
      }
    } catch (error) {
      console.log('handleLogin: ', error);
    }
  }
  return { user, handleLogin };
});

export default useUserStore;
