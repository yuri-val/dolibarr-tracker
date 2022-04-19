<template>
  <h5 class="display-5">Add time to task</h5>
  <div class="title">
    {{ item.label }}
  </div>
  <va-date-input class="mb-4" label="date" v-model="form.date" outline />
  <div class="row">
    <div
      class="flex xs3 sm2 md2 lg1 xl1"
      v-for="time in spentTimes"
      :key="time.value"
    >
      <va-button
        size="small"
        :rounded="false"
        :outline="time.value !== form.duration"
        class="mr-4"
        @click="form.duration = time.value"
      >
        {{ time.label }}
      </va-button>
    </div>
  </div>
  <va-input
    outline
    class="mb-4"
    v-model="form.note"
    type="textarea"
    label="Note"
  />

  <va-button block> Save </va-button>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useTasksStore } from "@/stores/tasks";
import { spentTimes } from "@/utils/selectItems";

export default {
  name: "AddTime",
  setup() {
    const form = ref({
      date: new Date(),
      duration: 1800,
      note: "",
    });

    const store = useTasksStore();
    const route = useRoute();

    const loading = computed(() => store.loading.item);
    const item = computed(() => store.item);

    onMounted(() => {
      store.fetchItem(route.params.id);
    });

    return {
      form,
      loading,
      item,
      spentTimes,
    };
  },
};
</script>

<style></style>
