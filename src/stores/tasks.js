import { defineStore } from "pinia";
import { tasks as api } from "@/utils/api/resources.js";
import compose from "@/utils/stores.js";

const formatDate = (date) => {
  const iso = date.toISOString();
  const [fDate] = iso.split(".");
  return fDate.replace(/T/, " ");
};

export const useTasksStore = defineStore(
  compose(
    "tasks",
    { api },
    {
      state: {},
      getters: {},
      actions: {
        addTime(id, options) {
          return api.add_time(id, {
            ...options,
            user_id: 0,
            date: formatDate(options.date),
          });
        },
      },
    }
  )
);
