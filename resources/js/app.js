require("./bootstrap");
require('alpinejs');

import { createApp } from "vue";
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

app.mount("#app");
