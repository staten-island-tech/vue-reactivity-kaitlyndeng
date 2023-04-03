import { createRouter, createWebHistory } from "vue-router";
import order from "../views/order.vue";
import confirm from "../views/confirm.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "order",
      component: order,
    },
    {
      path: "/confirm",
      name: "confirm",
      component: confirm,
      component: () => import("../views/confirm.vue"),
    },
  ],
});

export default router;
