import { createApp } from "vue";
import { watch, nextTick } from "vue";

import JOS from "jos-animation";
import "jos-animation/css";

import "@fortawesome/fontawesome-free/css/all.css";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);
app.use(router);

app.mount("#app");

JOS.version();
JOS.init({
  animation: "fade",
  duration: 0.4,
  delay: 0,
  once: false,
});

watch(
  () => router.currentRoute.value,
  () => {
    nextTick(() => {
      JOS.refresh();
    });
  }
);

import "./assets/mobile.css";
