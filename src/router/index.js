import { createRouter, createWebHistory } from "vue-router";

import Root from "@/views/Root.vue";
import Playground from "@/views/Playground.vue";

// "/" should redirect to "/home"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: Root,
    },
    {
      path: "/root",
      redirect: "/home",
    },
    {
      path: "/playground",
      name: "playground",
      component: Playground,
    },
  ],
});

export default router;
