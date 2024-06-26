import type { RouteRecordRaw } from 'vue-router';

// 定义小仓库数据类型
export interface UserState {
  token: string | null;
  userInfo: object;
  menuLists: RouteRecordRaw[];
  routes: string[];
  buttons: string[];
  userName: string;
}
