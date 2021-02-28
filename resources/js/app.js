require("./bootstrap");
require('alpinejs');

import { createApp } from "vue";
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes.js';

const router = createRouter({
  history: createWebHistory(),
  routes: routes.routes,
});

import Home from "./components/Home.vue";
import Dashboard from "./components/Dashboard.vue";
import App from "./components/App.vue";

const app = createApp({
  components: {
    Home,
    Dashboard,
    App
  }
});
app.use(router);
app.mount("#app");
