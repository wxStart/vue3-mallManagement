import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import 'virtual:svg-icons-register';
import globaleComponent from './components/index.ts';

import router from './router/index.ts';
import pinia from './store/index.ts';

import App from 'src/App.vue';

const app = createApp(App);

app.use(globaleComponent);
app.use(router);
app.use(pinia);

app.use(ElementPlus);
app.mount('#app');
