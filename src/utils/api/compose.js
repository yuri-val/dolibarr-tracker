export default function compose(api, name, extend) {
  return {
    index: (options = {}) => api.get(name, options),
    create: (data, options = {}) => api.post(name, data, options),
    delete: (id, options = {}) => api.delete(`${name}/${id}`, options),
    show: (id, options = {}) => api.get(`${name}/${id}`, options),
    update: (id, data, options = {}) => api.put(`${name}/${id}`, data, options),
    ...extend,
  };
}
