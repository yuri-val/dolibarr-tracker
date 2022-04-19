export default function compose(name, options, extend) {
  return {
    id: name,
    state: () => ({
      data: [],
      item: {},
      itemTasks: [],
      loading: {
        data: false,
        item: false,
        itemTasks: false,
      },
      ...extend.state,
    }),
    getters: {
      ...extend.getters,
    },
    actions: {
      fetchData() {
        this.loading.data = true;
        return options.api.index().then((response) => {
          this.data = response.data;
          this.loading.data = false;
        });
      },
      fetchItem(id) {
        this.loading.item = true;
        return options.api.show(id).then((response) => {
          this.item = response.data;
          this.loading.item = false;
        });
      },
      createItem(data) {
        this.loading.item = true;
        return options.api.create(data).then((response) => {
          const id = response.data;
          this.fetchItem(id);
          return Promise.resolve(id);
        });
      },
      updateItem(id, data) {
        this.loading.item = true;
        return options.api.update(id, data).then((response) => {
          this.item = response.data;
          this.loading.item = false;
        });
      },
      ...extend.actions,
    },
  };
}
