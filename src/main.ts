/** @format */

import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./router/index";
import store, { key } from "./store";

createApp(App).use(store, key).use(router).mount("#app");
