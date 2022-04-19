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
        options.api.index().then((response) => {
          this.data = response.data;
          this.loading.data = false;
        });
      },
      fetchItem(id) {
        this.loading.item = true;
        options.api.show(id).then((response) => {
          this.item = response.data;
          this.loading.item = false;
        });
      },
      ...extend.actions,
    },
  };
}
