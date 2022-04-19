import { defineStore } from "pinia";
import { projects as api } from "@/utils/api/resources.js";
import compose from "@/utils/stores.js";

export const useProjectsStore = defineStore(
  compose(
    "projects",
    { api },
    {
      state: {
        itemTasks: [],
        loadingItemTasks: false,
      },
      getters: {},
      actions: {
        fetchItemTasks(id) {
          this.loadingItemTasks = true;
          api.tasks(id).then((response) => {
            this.itemTasks = response.data;
            this.loadingItemTasks = false;
          });
        },
      },
    }
  )
);
