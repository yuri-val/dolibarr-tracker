import { createRouter, createWebHistory } from "vue-router";
import { useMainStore } from "../stores/main";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("@/features/settings/Edit/index.vue"),
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("@/features/projects/List/index.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/projects/:id",
      name: "project.show",
      component: () => import("@/features/projects/Show/index.vue"),
      meta: { requiresAuth: true },
    },

    {
      path: "/tasks/create",
      name: "task.create",
      component: () => import("@/features/tasks/Create.vue"),
      meta: { requiresAuth: true },
    },

    {
      path: "/tasks/:id/add_time",
      name: "task.add_time",
      component: () => import("@/features/tasks/AddTime/index.vue"),
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const store = useMainStore();
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    store.isAuthenticated ? next() : next("/settings");
  } else {
    next();
  }
});

export default router;
