import { defineStore } from "pinia";
import { tasks as api } from "@/utils/api/resources.js";
import compose from "@/utils/stores.js";

export const useTasksStore = defineStore(
  compose(
    "tasks",
    { api },
    {
      state: {},
      getters: {},
      actions: {},
    }
  )
);
