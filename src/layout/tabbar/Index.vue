<template>
  <div class="tabbar_contaier">
    <div class="bar_left">
      <Breadcrumb />
    </div>
    <div class="bar_right">
      <UserSettings />
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from './Breadcrumb.vue';
import UserSettings from './UserSettings.vue';
</script>

<script lang="ts">
export default {
  name: 'Tabbar',
};
</script>

<style scoped lang="scss">
.tabbar_contaier {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  .bar_left {
    display: flex;
    align-items: center;
  }
  .bar_right {
    display: flex;
    align-items: center;
    vertical-align: middle;
  }
}
</style>
