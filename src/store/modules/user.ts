import { defineStore } from 'pinia';
import { reactive } from 'vue';
// import { reqLogin } from '../../api/user/index';
import { reqLogin, reqUserInfo } from 'src/api/user/index';
import type { loginForm } from '../../api/user/type';
import type { UserState } from './types/type';
import { setToken } from 'src/utils/token';
import { constRoutes } from 'src/router/routes';

const useUserStore = defineStore('User', () => {
  const user: UserState = reactive<UserState>({
    userInfo: {},
    token: sessionStorage.getItem('token'),
    menuLists: constRoutes,
  });

  async function handleLogin(data: loginForm) {
    const result = await reqLogin(data);
    if (result.code == 200) {
      user.token = result.data.token;
      // 本地存储
      // window.sessionStorage.setItem('token', user.token);
      setToken(user.token);
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
