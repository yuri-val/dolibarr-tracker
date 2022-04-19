<template>
  <va-inner-loading :loading="loading">
    <div class="row">
      <div
        class="flex xs12 sm6 md6 lg4 xl3"
        v-for="item in data"
        :key="item.ref"
      >
        <va-card>
          <va-card-title>
            <span class="row justify--space-between">
              <va-badge :text="item.ref" color="warning" class="mr-4" />
              <span class="card-title">{{ item.title }}</span>
            </span>
          </va-card-title>
          <va-card-content>{{ item.description }}</va-card-content>
          <va-card-actions align="right">
            <va-button :to="{ name: 'project.show', params: { id: item.id } }">
              Open
            </va-button>
          </va-card-actions>
        </va-card>
      </div>
    </div>
  </va-inner-loading>
</template>

<script>
import { onMounted, computed } from "vue";
import { useProjectsStore } from "@/stores/projects.js";
import { useMainStore } from "@/stores/main";

export default {
  setup() {
    const store = useProjectsStore();
    const mainStore = useMainStore();
    const loading = computed(() => store.loading.data);
    const data = computed(() => store.data);

    onMounted(() => {
      store.fetchData();
      mainStore.breadcrumbs = [{ label: "Projects", route: "/projects" }];
    });

    return {
      store,
      data,
      loading,
    };
  },
};
</script>

<style scoped lang="scss">
.card-title {
  font-size: 1.5em;
}
</style>
