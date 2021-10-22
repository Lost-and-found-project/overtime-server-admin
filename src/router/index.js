import { createRouter, createWebHashHistory } from "vue-router";
import { menuRoutes } from "./menu/index.js";

const Home = () => import("../views/home/index.vue");

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
    children: [...menuRoutes],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
