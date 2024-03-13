import { createApp } from 'vue';
import './style.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import 'virtual:svg-icons-register';
import globaleComponent from './components/index.ts';

import App from '@/App.vue';

const app = createApp(App);

app.use(globaleComponent);

app.use(ElementPlus);
app.mount('#app');
