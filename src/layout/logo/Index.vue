<template>
  <div v-if="setting.logoShow" class="logo_container">
    <img :src="setting.logo" alt="" srcset="" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
import setting from 'src/settings';
</script>
<script lang="ts">
export default {
  name: 'LOGO',
};
</script>

<style scoped lang="scss">
.logo_container {
  display: flex;
  align-items: center;
  height: $base-menu-logo-height;
  padding-left: 10px;
  overflow: hidden;
  img {
    width: 30px;
    margin-right: 10px;
    margin-left: 10px;
  }
  p {
    flex: 1 0 20px;
    overflow: hidden;
    color: #fff;
    font-size: $base-menu-logo-fz;
    white-space: nowrap;
  }
}
</style>
