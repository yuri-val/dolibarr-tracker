<template>
  <h5 class="display-5">Create new task...</h5>

  <div class="mt-4 mb-4">
    <va-input
      class="mb-4"
      v-model="form.label"
      placeholder="Outline"
      label="Label"
      outline
    />
  </div>

  <va-button block @click="onSave"> Save </va-button>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { useTasksStore } from "@/stores/tasks";
import { ref } from "vue";
export default {
  name: "CreateTask",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useTasksStore();

    const form = ref({
      label: "",
      ref: (Math.random() + 1).toString(36).substring(2),
      fk_project: route.query.projectId,
    });

    const newRef = (id) => {
      const date = new Date();
      const year = date.getFullYear() - 2000;
      const month = (100 + date.getMonth() + 1).toString().substr(1);
      const number = (10000 + parseInt(id)).toString().substr(1);

      return `TK${year}${month}-${number}`;
    };

    const onSave = () => {
      store.createItem(form.value).then((id) => {
        store.updateItem(id, { ref: newRef(id) }).then(() => {
          router.push({
            name: "project.show",
            params: { id: route.query.projectId },
          });
        });
      });
    };
    return {
      form,
      onSave,
    };
  },
};
</script>

<style lang="scss" scoped></style>
