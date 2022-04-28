import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/project",
    component: () => import("../pages/Project.vue"),
  },
  {
    path: "/project/:id",
    name: "ProjectIn",
    props: true,
    component: () => import("../pages/ProjectIn.vue"),
  },
  {
    path: "/contact",
    component: () => import("../pages/Contact.vue"),
  },
  {
    path: "/about-me",
    component: () => import("../pages/AboutMe.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
