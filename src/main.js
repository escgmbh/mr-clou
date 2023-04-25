import { createApp } from 'vue';
import './index.css';
import './lato.css';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import routes from '~pages';

import { i18n } from './i18n';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount('#app');
