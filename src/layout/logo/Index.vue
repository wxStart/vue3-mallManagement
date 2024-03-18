<template>
  <div v-if="setting.logoShow" class="logo_container">
    <img :src="setting.logo" alt="" srcset="" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
import setting from 'src/settings';
</script>

<style scoped lang="scss">
.logo_container {
  display: flex;
  align-items: center;
  height: $base-menu-logo-height;
  padding: 0 10px;
  img {
    width: 30px;
  }
  p {
    color: #fff;
    margin-left: 10px;
    font-size: $base-menu-logo-fz;
  }
}
</style>
