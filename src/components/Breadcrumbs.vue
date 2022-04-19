<template>
  <div class="row pa-2">
    <span>
      <va-icon name="home" class="breadcrumb-icon pa-1"></va-icon>
      <router-link class="title breadcrumb" to="/">Home</router-link>
    </span>
    <span v-for="item in items" :key="item.label">
      <va-icon name="navigate_next" class="breadcrumb-icon pa-1"></va-icon>
      <router-link class="title breadcrumb" :to="item.route">{{
        item.label
      }}</router-link>
    </span>
  </div>
</template>

<script>
import { useMainStore } from "@/stores/main";
import { computed } from "vue";

export default {
  name: "Breadcrumbs",
  setup() {
    const mainStore = useMainStore();

    const items = computed(() => mainStore.breadcrumbs);
    return {
      items,
      mainStore,
    };
  },
};
</script>

<style scoped>
.title.breadcrumb {
  font-size: 0.7rem;
  font-weight: bold;
}
</style>
