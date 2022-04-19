import { defineStore } from "pinia";
import { fromStore } from "@/utils/localStorageStore";

export const useSettingsStore = defineStore({
  id: "settings",
  state: () =>
    fromStore("settings", {
      token: "",
      host: "",
    }),
  getters: {},
  actions: {},
});
