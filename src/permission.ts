import router from './router';

// 进度条
import 'nprogress/nprogress.css';
import nprogress from 'nprogress';

import pinia from './store';
import useUserStore from './store/modules/user';

import type { userInfo } from 'src/api/user/type';
import { ElNotification } from 'element-plus';

import settings from './settings';

nprogress.configure({ showSpinner: false });

const userStore = useUserStore(pinia);
console.log('userStore: ', userStore);

// 全局前置守卫
router.beforeEach(async (to: any, from: any, next: any) => {
  console.log('访问路由之前');
  console.log('from: ', from);
  console.log('to: ', to);
  document.title = `${settings.title} -  ${to.meta.title}`;
  nprogress.start();
  // 读取token

  const token = userStore.user.token;
  console.log('token: ', token);
  if (token) {
    if (to.path == '/login') {
      next({ path: '/' });
    } else {
      const userName = (userStore.user.userInfo as userInfo).userName;
      if (userName) {
        next();
      } else {
        try {
          await userStore.setUserInfo();
          ElNotification({
            type: 'success',
            message: `${(userStore.user.userInfo as userInfo).userName}`,
            title: '你好',
          });
          next();
        } catch (error) {
          userStore.userLogout();
          next({
            path: '/login',
            query: {
              redirect: to.path, // 登录成功后应该去哪里
            },
          });
        }
      }
    }
  } else {
    if (to.path == '/login') {
      next();
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.path, // 登录成功后应该去哪里
        },
      });
    }
  }
});

// 全局后置守卫
router.afterEach((to: any, from: any) => {
  console.log('访问路由之后');
  console.log('from: ', from);
  console.log('to: ', to);
  nprogress.start();
  nprogress.done();
});

/**
 * 用户未登录  只能访问登录页面
 *
 */
/**
 * 登录成功就不可以访问登录页
 */
