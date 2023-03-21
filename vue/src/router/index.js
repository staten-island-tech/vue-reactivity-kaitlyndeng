import { createRouter, createWebHistory } from "vue-router";
import base from "../views/base.vue";
import toppings from "../views/toppings.vue";
import confirmation from "../views/confirmation.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "base",
      component: base,
    },
    {
      path: "/toppings",
      name: "toppings",
      component: toppings,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/toppings.vue"),
    },
    {
      path: "/confirmation",
      name: "confirmation",
      component: confirmation,
    },
  ],
});

export default router;
