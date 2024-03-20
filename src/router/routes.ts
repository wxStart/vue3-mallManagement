import type { RouteRecordRaw } from 'vue-router';

export const constRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/login/Index.vue'),
    name: 'Login',
    meta: {
      title: '登录',
    },
    hidden: true,
  },

  {
    path: '/',
    component: () => import('@/layout/Index.vue'),
    name: 'Layout',
    redirect: '/home',
    meta: {},
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/Index.vue'),
        meta: {
          title: '首页',
          icon: 'HomeFilled',
        },
      },
    ],
  },

  {
    path: '/screen',
    name: 'Screen',
    component: () => import('@/views/screen/Index.vue'),
    meta: {
      title: '数据大屏',
      icon: 'Monitor',
    },
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
];

export const asnycRoute: RouteRecordRaw[] = [
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/layout/Index.vue'),
    meta: {
      title: '权限管理',
      icon: 'Lock',
    },
    redirect: '/auth/user',
    children: [
      {
        path: '/auth/user',
        name: 'AuthUser',
        component: () => import('@/views/auth/user/Index.vue'),
        meta: {
          title: '用户管理',
          icon: 'Avatar',
        },
      },
      {
        path: '/auth/role',
        name: 'AuthRole',
        component: () => import('@/views/auth/user/Index.vue'),
        meta: {
          title: '角色管理',
          icon: 'HelpFilled',
        },
      },
      {
        path: '/auth/menu',
        name: 'AuthMenu',
        component: () => import('@/views/auth/menu/Index.vue'),
        meta: {
          title: '菜单管理',
          icon: 'Menu',
        },
      },
    ],
  },
  {
    path: '/product',
    component: () => import('@/layout/Index.vue'),
    name: 'Product',
    redirect: '/product/attr',
    meta: {
      title: '商品管理',
      icon: 'Stamp',
    },
    children: [
      {
        path: '/product/attr',
        name: 'Attr',
        component: () => import('@/views/product/attr/Index.vue'),
        meta: {
          title: '属性管理',
          icon: 'Opportunity',
        },
      },
      {
        path: '/product/sku',
        name: 'Sku',
        component: () => import('@/views/product/sku/Index.vue'),
        meta: {
          title: 'SKU管理',
          icon: 'GoodsFilled',
        },
      },
      {
        path: '/product/spu',
        name: 'Spu',
        component: () => import('@/views/product/spu/Index.vue'),
        meta: {
          title: 'SPU管理',
          icon: 'Briefcase',
        },
      },
      {
        path: '/product/trademark',
        name: 'Trademark',
        component: () => import('@/views/product/trademark/Index.vue'),
        meta: {
          title: '品牌管理',
          icon: 'ShoppingBag',
        },
      },
    ],
  },
];

export const anyRoute: RouteRecordRaw[] = [
  {
    // 没匹配到时候执行
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '未知',
    },
    hidden: true,
  },
];
