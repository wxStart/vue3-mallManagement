<script setup lang="ts">
import { ElConfigProvider } from 'element-plus';
import { ref } from 'vue';
import { Menu } from '@element-plus/icons-vue';
import zhCn from 'element-plus/dist/locale/zh-cn';

const size = ref<'default' | 'large' | 'small'>('default');
const time = ref('');
const locale = zhCn;
</script>

<template>
  <div>
    <el-config-provider :locale="locale">
      <el-button type="primary" :icon="Menu">Primary</el-button>
      <el-date-picker
        v-model="time"
        type="date"
        placeholder="Pick a day"
        :size="size"
      />
      <SvgIcon name="car" width="30px" height="30px" />
      <SvgIcon name="motuo" color="red" />
    </el-config-provider>
  </div>
</template>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
h1 {
  color: #646cff;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
