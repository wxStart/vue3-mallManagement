<template>
  <el-button icon="Refresh" circle />
  <el-button icon="FullScreen" circle />
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
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 16px;
}
</style>
