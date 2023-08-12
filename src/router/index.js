import { createRouter, createWebHistory } from "vue-router";

import Root from "@/views/Root.vue";
import Playground from "@/views/Playground.vue";
import PlaygroundFrame from "@/views/PlaygroundFrame.vue";
import PathNotFound from "@/views/pathnotfound.vue";

// "/" should redirect to "/home"

// if demo, redirect to https://jesvijonathan.github.io/JOS-Animation-Library/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Root,
    },
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/root",
      redirect: "/",
    },
    {
      path: "/playground",
      name: "playground",
      component: Playground,
    },
    {
      path: "/playgroundFrame",
      name: "playgroundFrame",
      component: PlaygroundFrame,
    },
    {
      path: "/demo",
      redirect: "https://jesvijonathan.github.io/JOS-Animation-Library/",
    },

    {
      path: "/404",
      name: "404",
      return: "failed",
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/404",
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.length === 0) {
//     next("/404");
//   } else {
//     next();
//   }
// });

// // render only PathNotFound component if path is not found, no need for a layout
// router.onError((error) => {
//   if (error.name === "NavigationDuplicated") {
//     router.push(error.location);
//   } else {
//     router.push("/404");
//   }
// });

export default router;
