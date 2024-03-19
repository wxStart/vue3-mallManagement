<template>
  <el-button icon="Refresh" circle @click="settingStore.changeRefresh" />
  <el-button icon="FullScreen" circle @click="onFullScreen" />
  <el-button icon="Setting" circle />
  <img class="img" src="src/assets/images/background.jpeg" alt="" />
  <el-dropdown>
    <span class="el-dropdown-link">
      张三
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="outLogin">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import useSettingStore from 'src/store/modules/setting';
import useUserStore from 'src/store/modules/user';

import { useRouter, useRoute } from 'vue-router';
const settingStore = useSettingStore();
const userStore = useUserStore();

function onFullScreen() {
  const full = document.fullscreenElement;
  console.log('full: ');
  console.log('document.fullscreenElement: ', full);
  if (!full) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
const $router = useRouter();
const $route = useRoute();

const outLogin = () => {
  //1. 向服务发请求  token 无效了
  //2. 清楚token  清除用户信息相关
  userStore.userLogout();
  //3. 跳转到登录页面
  $router.push({
    path: '/login',
    query: {
      redirect: $route.path,
    },
  });
};
</script>

<style scoped lang="scss">
.img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 16px;
}
</style>
