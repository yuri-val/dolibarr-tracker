import { defineStore } from "pinia";
import { setup as api } from "@/utils/api/resources.js";
import { fromStore } from "../utils/localStorageStore";

const defaultCompany = {
  name: "NEED AUTHORIZATION",
  idprof1: "go to settings -->",
};

export const useMainStore = defineStore({
  id: "main",
  state: () =>
    fromStore("main", {
      isAuthenticated: false,
      error: null,
      company: defaultCompany,
    }),
  getters: {},
  actions: {
    async loadCompany() {
      try {
        const { data } = await api.company();
        this.company = data;
        this.isAuthenticated = true;
      } catch (e) {
        console.log(e);
        this.error = e;
        this.isAuthenticated = false;
        this.company = defaultCompany;
      }
    },
  },
});
