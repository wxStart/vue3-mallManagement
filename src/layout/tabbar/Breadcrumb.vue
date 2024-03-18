<template>
  <el-icon class="expand" @click="settingStore.changeFold">
    <component :is="settingStore.fold ? 'Fold' : 'Expand'"></component>
  </el-icon>
  <el-breadcrumb separator-icon="DArrowRight">
    <el-breadcrumb-item
      v-for="item in $route.matched"
      :key="item.path"
      :to="{ path: item.path }"
      v-show="item.meta.title"
    >
      <el-icon color="#333" class="icon">
        <Component :is="item.meta.icon" />
      </el-icon>
      <span>
        {{ item.meta.title }}
      </span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

import useSettingStore from 'src/store/modules/setting';
const settingStore = useSettingStore();
const $route = useRoute();
console.log('$route: ', $route.matched);
</script>

<style scoped lang="scss">
.expand {
  margin-right: 8px;
  cursor: pointer;
}
.icon {
  margin: 0 5px;
  position: relative;
  top: 2px;
}
</style>
