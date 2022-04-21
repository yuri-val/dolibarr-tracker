import api from "./provider.js";
import compose from "./compose";

export const projects = compose(api, "projects", {
  tasks: (id, options = {}) => api.get(`projects/${id}/tasks`, options),
});

export const tasks = compose(api, "tasks", {
  add_time: (id, options = {}) => api.post(`tasks/${id}/addtimespent`, options),
});

export const setup = {
  company: (options = {}) => api.get("setup/company", options),
};

export const users = compose(api, "users", {
  info: (options = {}) => api.get("users/info", options),
});
