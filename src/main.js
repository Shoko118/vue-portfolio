import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import { createPinia } from "pinia";
import "./css/tail.css";

createApp(App).use(createPinia()).use(router).mount("#app");
