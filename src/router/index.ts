import { createRouter, createWebHashHistory } from 'vue-router';

import { constRoutes } from './routes';
const router = createRouter({
  // 路由的mosjh
  history: createWebHashHistory(),
  routes: constRoutes,
});

export default router;
