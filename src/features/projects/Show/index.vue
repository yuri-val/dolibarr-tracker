<template>
  <va-inner-loading :loading="loading">
    <div class="title">
      <router-link to="/projects"
        ><va-icon name="arrow_back_ios"
      /></router-link>
      {{ item.title }}
    </div>
    <p class="text--secondary">
      {{ item.description }}
    </p>
    <va-inner-loading :loading="loadingTasks">
      <va-list>
        <va-list-label> Tasks </va-list-label>
        <va-button
          v-if="item.id"
          size="small"
          icon="add_circle_outline"
          class="mr-4"
          :to="{ name: 'task.create', query: { projectId: item.id } }"
        >
          Add
        </va-button>
        <va-list-item v-for="task in itemTasks" :key="task.ref">
          <va-list-item-section>
            <va-list-item-label>
              <va-badge :text="task.ref" color="warning" class="mr-4" />
              {{ task.label }}
            </va-list-item-label>

            <va-list-item-label caption>
              {{ task.description }}
            </va-list-item-label>
            <va-list-item-label caption>
              Spent: {{ task.duration / 3600 }} h
            </va-list-item-label>
          </va-list-item-section>

          <va-list-item-section icon>
            <router-link
              :to="{ name: 'task.add_time', params: { id: task.id } }"
            >
              <va-icon name="alarm_add" />
            </router-link>
          </va-list-item-section>
        </va-list-item>
      </va-list>
    </va-inner-loading>
  </va-inner-loading>
</template>

<script>
import { onMounted, computed } from "vue";
import { useProjectsStore } from "@/stores/projects.js";
import { useMainStore } from "@/stores/main";
import { useRoute } from "vue-router";

export default {
  name: "ShowProject",
  setup() {
    const store = useProjectsStore();
    const mainStore = useMainStore();
    const route = useRoute();
    const loading = computed(() => store.loading.item);
    const loadingTasks = computed(() => store.loadingItemTasks);
    const item = computed(() => store.item);
    const itemTasks = computed(() => store.itemTasks);

    const setBreadcrumb = () => {
      mainStore.breadcrumbs = [
        { label: "Projects", route: "/projects" },
        {
          label: item.value.ref,
          route: { name: "project.show", params: { id: route.params.id } },
        },
      ];
    };

    onMounted(() => {
      store.fetchItem(route.params.id).then(() => setBreadcrumb());
      store.fetchItemTasks(route.params.id);
    });

    return {
      store,
      item,
      itemTasks,
      loading,
      loadingTasks,
    };
  },
};
</script>
