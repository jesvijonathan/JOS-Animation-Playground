import { createApp } from "vue";
import { watch, nextTick } from "vue";

import "jos-animation/dist/jos.css";
import JOS from "jos-animation";

import "@fortawesome/fontawesome-free/css/all.css";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
// jos.js and jos.css from jos plugin
// import "jos/dist/jos.css";

const app = createApp(App);
app.use(router);

app.mount("#app");

JOS.version();
JOS.init();

watch(
  () => router.currentRoute.value,
  () => {
    nextTick(() => {
      JOS.refresh();
    });
  }
);
