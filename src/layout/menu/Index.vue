<template>
  <template v-for="menuItem in showLists" :key="menuItem.path">
    <!-- 没有子路由 -->
    <el-menu-item
      v-if="!menuItem.children"
      :index="menuItem.path"
      @click="toPage(menuItem)"
    >
      <el-icon color="#409EFC" class="no-inherit">
        <Component :is="menuItem.meta.icon" />
      </el-icon>
      <!-- icon 要放在外面才可以在这贴的时候看到 -->
      <template #title>
        <span>
          {{ menuItem.meta.title }}
        </span>
      </template>
    </el-menu-item>
    <!-- 只有一个子路由 -->
    <el-menu-item
      v-if="menuItem.children && menuItem.children.length == 1"
      :index="menuItem.children[0].path"
      @click="toPage(menuItem.children[0])"
    >
      <el-icon color="#409EFC" class="no-inherit">
        <Component :is="menuItem.meta.icon" />
      </el-icon>
      <template #title>
        <span>
          {{ menuItem.children[0].meta.title }}
        </span>
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
        <span>
          <!--  这里要用sapn元素 在折叠时候才有效 -->
          {{ menuItem.meta.title }}
        </span>
      </template>
      <MenuCom
        v-if="menuItem?.children"
        :menuList="menuItem.children"
      ></MenuCom>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
// import Menu1 from './Index1.vue';
import type { _RouteRecordBase } from 'vue-router';
import { useRouter } from 'vue-router';

const props = defineProps(['menuList']);

const showLists = props.menuList.filter((el: _RouteRecordBase) => !el.hidden);

const $router = useRouter();
const toPage = (item: _RouteRecordBase) => {
  $router.push(item.path);
};
</script>
<script lang="ts">
export default {
  // eslint-disable-next-line vue/no-reserved-component-names
  name: 'MenuCom',
};
</script>

<style scoped lang="scss"></style>
