require("./bootstrap");
require('alpinejs');

import { createApp } from "vue";
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes.js';

import { store } from './store/app';

const router = createRouter({
  history: createWebHistory(),
  routes: routes.routes,
});

import TheApp from "./base/components/TheApp.vue";
import Dashboard from "./components/Dashboard.vue";
import Home from "./components/Home.vue";

const app = createApp({
  components: {
    TheApp,
    Dashboard,
    Home,
  }
});

app.use(router);
app.use(store);
app.mount("#app");
