require("./bootstrap");
require('alpinejs');

import { createApp } from "vue";
import Home from "./components/Home.vue";
import Dashboard from "./components/Dashboard.vue";

const app = createApp({
  components: {
    Home,
    Dashboard
  }
});

app.mount("#app");
