<template>
  <div class="layout_container">
    <div class="layout_slider" :class="{ flod: settingStore.fold }">
      <Logo />
      <el-scrollbar class="scrollbar">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#000"
          text-color="#fff"
          class="el-menu-vertical-demo"
          :default-active="$route.path"
          :collapse="settingStore.fold"
        >
          <Menu :menuList="userStore.user.menuLists" />
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout_tabber" :class="{ flod: settingStore.fold }">
      <TabBar />
    </div>
    <div class="layout_mian" :class="{ flod: settingStore.fold }">
      <MainPage />
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/Index.vue';
import Menu from './menu/Index.vue';
import MainPage from './main/Index.vue';
import TabBar from './tabbar/Index.vue';
import { useRoute } from 'vue-router';

import useUserStore from 'src/store/modules/user';
import useSettingStore from 'src/store/modules/setting';

const userStore = useUserStore();
const $route = useRoute();
const settingStore = useSettingStore();
</script>
<script lang="ts">
export default {
  name: 'Layout',
};
</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-bgcolor;
    transition: all 0.3s;
    &.flod {
      width: $base-menu-collapse-width;
    }
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
      .el-menu {
        border-right: 0px;
      }
    }
  }
  .layout_tabber {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    right: 0;
    top: 0;
    transition: all 0.3s;
    &.flod {
      width: calc(100% - $base-menu-collapse-width);
    }
  }
  .layout_mian {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    background-color: yellowgreen;
    left: $base-menu-width;
    top: $base-tabbar-height;
    padding: 20px;
    overflow-y: auto;
    transition: all 0.3s;
    &.flod {
      left: $base-menu-collapse-width;
      width: calc(100% - $base-menu-collapse-width);
    }
  }
}
</style>
