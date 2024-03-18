<template>
  <template v-for="menuItem in showLists" :key="menuItem.path">
    <!-- 没有子路由 -->
    <el-menu-item
      v-if="!menuItem.children"
      :index="menuItem.path"
      @click="toPage(menuItem)"
    >
      <template #title>
        <div>
          <el-icon color="#409EFC" class="no-inherit">
            <Component :is="menuItem.meta.icon" />
          </el-icon>
          {{ menuItem.meta.title }}
        </div>
      </template>
    </el-menu-item>
    <!-- 只有一个子路由 -->
    <el-menu-item
      v-if="menuItem.children && menuItem.children.length == 1"
      :index="menuItem.children[0].path"
      @click="toPage(menuItem)"
    >
      <template #title>
        <div>
          <el-icon color="#409EFC" class="no-inherit">
            <Component :is="menuItem.meta.icon" />
          </el-icon>
          {{ menuItem.children[0].meta.title }}
        </div>
      </template>
    </el-menu-item>
    <el-sub-menu
      v-if="menuItem.children && menuItem.children.length > 1"
      :index="menuItem.path"
    >
      <template #title>
        <el-icon color="#409EFC" class="no-inherit">
          <Component :is="menuItem.meta.icon" />
        </el-icon>
        {{ menuItem.meta.title }}
      </template>
      <Menu :menuList="menuItem.children"></Menu>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
import type { _RouteRecordBase } from 'vue-router';
const props = defineProps(['menuList']);
const showLists = props.menuList.filter((el: _RouteRecordBase) => !el.hidden);

const toPage = (item: _RouteRecordBase) => {
  console.log('item: ', item);
};
</script>
<script lang="ts">
export default {
  // eslint-disable-next-line vue/no-reserved-component-names
  name: 'Menu',
};
</script>

<style scoped lang="scss"></style>
