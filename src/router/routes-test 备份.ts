import type { RouteRecordRaw } from 'vue-router';

export const constRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/login/Index.vue'),
    name: 'login',
    meta: {
      title: '登录',
    },
    hidden: true,
  },
  {
    path: '/test',
    component: () => import('@/layout/Index.vue'),
    name: 'layout',
    meta: {
      title: '布局',
      icon: 'StarFilled',
    },
    children: [
      {
        path: '/test1',
        component: () => import('@/views/home/Index.vue'),
        meta: {
          title: 'test1',
          icon: 'StarFilled',
        },
        children: [
          {
            path: '/test1/test1',
            component: () => import('@/views/home/Index.vue'),
            meta: {
              title: 'test1-1',
              icon: 'StarFilled',
            },
          },
          {
            path: '/test1/test2',
            component: () => import('@/views/home/Index.vue'),
            meta: {
              title: 'test1-2',
              icon: 'StarFilled',
            },
            hidden: true,
          },
        ],
      },
      {
        path: '/test2',
        component: () => import('@/views/home/Index.vue'),
        meta: {
          title: 'test2',
          icon: 'Grid',
        },
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layout/Index.vue'),
    name: 'layout',
    meta: {
      title: '布局',
      icon: 'Operation',
    },
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/Index.vue'),
        meta: {
          title: '首页',
          icon: 'House',
        },
      },
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/404/Index.vue'),
    name: '404',
    meta: {
      title: '404',
    },
    hidden: true,
  },
  {
    // 没匹配到时候执行
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    meta: {
      title: '未知',
    },
    hidden: true,
  },
];
