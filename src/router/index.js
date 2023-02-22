import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import About from "@/views/AboutView.vue";
import Manage from "@/views/Manage.vue";
import useUserstore from "@/stores/user";

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "about",
    path: "/about",
    component: About,
  },
  {
    name: "manage",
    path: "/manage-music",
    component: Manage,
    beforeEnter: (to, from, next) => {
      console.log("Manage Route Guard");
      next();
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/manage",
    redirect: { name: "manage" },
  },
  {
    path: "/:catchAll(.*)*",
    redirect: { name: "home" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: "text-yellow-500",
});

router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) {
    next();
    return;
  }

  const store = useUserstore();

  if (store.userLoggedIn) {
    next();
  } else {
    next({ name: "home" });
  }
});

export default router;
