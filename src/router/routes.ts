export const constRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/Index.vue'),
    name: 'login',
  },
  {
    path: '/',
    component: () => import('@/views/home/Index.vue'),
    name: 'home',
  },
  {
    path: '/404',
    component: () => import('@/views/404/Index.vue'),
    name: '404',
  },
  {
    // 没匹配到时候执行
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
];
