<template>
  <div>登录后的页面</div>
  <div>
    <h1>按钮权限检测</h1>
    <el-button v-has="'search'" icon="Search"></el-button>
    <el-button v-has="'add'" icon="Plus"></el-button>
    <el-button v-has="'delete'" icon="Delete"></el-button>
    <el-button icon="Comment"></el-button>
  </div>
</template>

<script setup lang="ts">
import useUserStore from 'src/store/modules/user';

const userStore = useUserStore();
console.log('userStore: ', userStore);
</script>

<style lang="scss" scoped></style>
