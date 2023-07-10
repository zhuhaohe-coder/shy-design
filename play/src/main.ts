import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import ShyIcon from '@shy-design/components/icon';
import '@shy-design/theme-chalk/src/index.scss';

const components = [ShyIcon];
// 是否已安装标识
const INSTALLED_KEY = Symbol('INSTALLED_KEY');
// 组件库插件
const ShyDesign = {
  install(app: any) {
    if (app[INSTALLED_KEY]) return;
    app[INSTALLED_KEY] = true;
    components.forEach((component) => app.use(component));
  },
};

const app = createApp(App);
app.use(ShyDesign);
app.mount('#app');
