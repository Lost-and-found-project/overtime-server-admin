import { createRouter, createWebHashHistory } from "vue-router";
import { menuRoutes } from "./menu/index.js";
import Nprogress from "nprogress"
import "nprogress/nprogress.css"

const Home = () => import("../views/home/index.vue");

const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/home",
    redirect: "/index",
    component: Home,
    children: [...menuRoutes],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  Nprogress.start()
  next()
})
router.afterEach(() => {
  Nprogress.done()
})

export default router;
