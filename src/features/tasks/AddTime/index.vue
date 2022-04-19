<template>
  <h5 class="display-5">Add time to task</h5>
  <div class="title mt-3">
    {{ item.label }}
  </div>
  <va-date-input class="mt-3" label="date" v-model="form.date" outline />
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
  <div class="row pa-3">
    <div class="flex xs5 text--end">
      <va-button
        color="warning"
        outline
        size="small"
        icon="remove"
        @click="changeHours(-1)"
      />
      <span class="hm-label title pa-2">{{ hours }}</span> h.
      <va-button
        color="warning"
        outline
        size="small"
        icon="add"
        @click="changeHours(1)"
      />
    </div>
    <div class="flex xs2">
      <va-divider vertical />
    </div>
    <div class="flex xs5 text--start">
      <va-button
        color="warning"
        outline
        size="small"
        icon="remove"
        @click="changeMinutes(-1)"
      />
      <span class="hm-label title pa-2">{{ minutes }}</span> m.
      <va-button
        color="warning"
        outline
        size="small"
        icon="add"
        @click="changeMinutes(1)"
      />
    </div>
  </div>
  <va-input
    outline
    class="mb-4"
    v-model="form.note"
    type="textarea"
    label="Note"
  />

  <va-button block @click="onSave"> Save </va-button>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useTasksStore } from "@/stores/tasks";
import { useMainStore } from "@/stores/main";
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
    const mainStore = useMainStore();
    const router = useRouter();
    const route = useRoute();

    const loading = computed(() => store.loading.item);
    const item = computed(() => store.item);

    const hours = computed(() => Math.floor(form.value.duration / 3600));
    const minutes = computed(() =>
      Math.floor((form.value.duration % 3600) / 60)
    );

    const changeHours = (value) => {
      form.value.duration += value * 3600;
    };

    const changeMinutes = (value) => {
      form.value.duration += value * 60;
    };

    const setBreadcrumb = () => {
      mainStore.breadcrumbs = [
        { label: "Projects", route: "/projects" },
        {
          label: "Project",
          route: {
            name: "project.show",
            params: { id: item.value.fk_project },
          },
        },
        {
          label: item.value.ref,
          route: { name: "task.add_time", params: { id: item.value.id } },
        },
      ];
    };

    onMounted(() => {
      store.fetchItem(route.params.id).then(() => setBreadcrumb());
    });

    const onSave = () => {
      store.addTime(item.value.id, form.value);
      router.push({
        name: "project.show",
        params: { id: item.value.fk_project },
      });
    };

    return {
      form,
      loading,
      item,
      spentTimes,
      onSave,
      hours,
      minutes,
      changeHours,
      changeMinutes,
    };
  },
};
</script>

<style>
.text--end {
  text-align: end;
}

.text--start {
  text-align: start;
}

.hm-label.title {
  font-size: 1rem;
}
</style>
