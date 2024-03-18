import SvgIcon from './SvgIcon/Index.vue';
import {
  type App,
  type Component,
  type ComputedOptions,
  type MethodOptions,
} from 'vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const allGolbal: {
  [propNmae: string]: Component<any, any, any, ComputedOptions, MethodOptions>;
} = {
  SvgIcon,
};

export default {
  install(app: App) {
    Object.keys(allGolbal).forEach((item) => {
      const com: Component<any, any, any, ComputedOptions, MethodOptions> =
        allGolbal[item];
      app.component(item, com);
    });

    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  },
};
