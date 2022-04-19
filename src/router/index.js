import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Projects from "@/features/projects/index";
import Tasks from "@/features/tasks";
import Settings from "@/features/settings";
import { useMainStore } from "../stores/main";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings.Edit,
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects.List,
      meta: { requiresAuth: true },
    },
    {
      path: "/projects/:id",
      name: "project.show",
      component: Projects.Show,
      meta: { requiresAuth: true },
    },

    {
      path: "/tasks/:id/add_time",
      name: "task.add_time",
      component: Tasks.AddTime,
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
