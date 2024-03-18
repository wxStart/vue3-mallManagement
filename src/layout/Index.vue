<template>
  <div class="layout_container">
    <div class="layout_slider">
      <Logo />
      <el-scrollbar class="scrollbar">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#000"
          text-color="#fff"
        >
          <Menu :menuList="userStore.user.menuLists" />
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout_tabber"></div>
    <div class="layout_mian">
      <div style="height: 10000px">fdhkjsafhdajs</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/Index.vue';
import Menu from './menu/Index.vue';
import useUserStore from 'src/store/modules/user';
const userStore = useUserStore();
console.log('userStore: ', userStore);
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
    background-color: gold;
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
  }
}
</style>
