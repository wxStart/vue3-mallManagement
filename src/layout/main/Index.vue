<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :key="settingStore.refresh" :is="Component"></component>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import useSettingStore from 'src/store/modules/setting';
const settingStore = useSettingStore();

watch(
  () => settingStore.refresh,
  (next, prev) => {
    console.log('next, prev: ', next, prev);
  },
);
</script>
<script lang="ts">
export default {
  name: 'MainCom',
};
</script>

<style scoped lang="scss">
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}
.fade-enter-active {
  transition: all 0.3s;
}
.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
