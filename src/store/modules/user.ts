import { defineStore } from 'pinia';
import { reactive } from 'vue';
// import { reqLogin } from '../../api/user/index';
import { reqLogin, reqUserInfo } from 'src/api/user/index';
import type { loginForm } from '../../api/user/type';
import type { UserState } from './types/type';
import { setToken, getToken, clearToken } from 'src/utils/token';
import { constRoutes, asnycRoute, anyRoute } from 'src/router/routes';
import router from 'src/router/index';
import type { RouteRecordRaw } from 'vue-router';

import cloneDeep from 'lodash/cloneDeep';

// 过滤异步路由
const filterAsnycRoute = (routes: RouteRecordRaw[], userRoutes: string[]) => {
  return routes.filter((item) => {
    if (userRoutes.includes(item.name as string)) {
      if (item.children && item.children.length > 0) {
        item.children = filterAsnycRoute(item.children, userRoutes);
        item.redirect = item.children[0].path;
      }
      return true;
    }
  });
};

const useUserStore = defineStore('User', () => {
  const user: UserState = reactive<UserState>({
    userInfo: {},
    token: getToken(),
    routes: [],
    menuLists: constRoutes,
    buttons: [],
    userName: '',
  });

  async function handleLogin(data: loginForm) {
    const result = await reqLogin(data);
    if (result.code == 200) {
      user.token = result.data.token;
      // 本地存储
      // window.sessionStorage.setItem('token', user.token);
      setToken(user.token);
      return { ok: true, mssage: '登录成功' };
    } else {
      return Promise.reject(new Error(result.message));
    }
  }

  async function setUserInfo() {
    const result = await reqUserInfo();
    console.log('result:reqUserInfo  ', result);
    if (result.code == 200) {
      user.userInfo = result.data.user;
      const userRoutes = result.data.user.routes;
      user.routes = userRoutes;
      user.buttons = result.data.user.buttons;
      user.userName = result.data.user.userName;

      const userAsnycRoute = filterAsnycRoute(
        cloneDeep(asnycRoute),
        userRoutes,
      );
      console.log('userAsnycRoute: ', userAsnycRoute);
      const menuLists = [...constRoutes, ...userAsnycRoute, ...anyRoute];
      // 根据权限动态添加路由
      // 异步添加路由
      [...userAsnycRoute, ...anyRoute].forEach((el) => {
        router.addRoute(el);
      });
      user.menuLists = menuLists;
      console.log('menuLists: ', menuLists);
      return 'ok';
    } else {
      return Promise.reject('获取用户信息失败');
    }
  }

  function userLogout() {
    user.token = null;
    user.userInfo = {};
    clearToken();
  }
  return { user, handleLogin, setUserInfo, userLogout };
});

export default useUserStore;
