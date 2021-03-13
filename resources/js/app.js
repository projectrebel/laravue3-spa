require("./bootstrap");
require('alpinejs');

import { createApp } from "vue";
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes.js';

const router = createRouter({
  history: createWebHistory(),
  routes: routes.routes,
});

import App from "./components/App.vue";
import Dashboard from "./components/Dashboard.vue";
import Home from "./components/Home.vue";

const app = createApp({
  components: {
    App,
    Dashboard,
    Home,
  }
});

app.use(router);
app.mount("#app");
