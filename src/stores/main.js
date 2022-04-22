import { defineStore } from "pinia";
import { setup as api, users as apiUsers } from "@/utils/api/resources.js";
import { fromStore } from "../utils/localStorageStore";
import get from "lodash/get";

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
      user: {},
      breadcrumbs: [],
    }),
  getters: {},
  actions: {
    async loadCompany() {
      try {
        const { data } = await api.company();
        this.company = data;
        this.isAuthenticated = true;
        this.error = null;
      } catch (e) {
        this.error = {
          title: e.toString(),
          message: get(e, "response.data.error.message"),
          data: e.response,
        };
        this.isAuthenticated = false;
        this.company = defaultCompany;
      }
    },
    async loadUser() {
      try {
        const { data } = await apiUsers.info();
        this.user = data;
      } catch (e) {
        this.user = {};
      }
    },
  },
});
