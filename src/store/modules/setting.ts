import { defineStore } from 'pinia';
import { ref } from 'vue';

const useSettingStore = defineStore('setting', () => {
  const fold = ref(false);
  const refresh = ref(Date.now());
  return {
    fold,
    changeFold() {
      fold.value = !fold.value;
    },
    refresh,
    changeRefresh() {
      refresh.value = Date.now();
    },
  };
});

export default useSettingStore;
