<script>
import { onMounted } from "vue";
import { useMainStore } from "@/stores/main";
import { useMetaData } from "../utils/useMetaData";

export default {
  name: "HomeView",
  props: ["isAuthenticated"],
  setup() {
    const mainStore = useMainStore();

    onMounted(() => {
      useMetaData(mainStore, {
        title: "Home",
        breadcrumbs: [],
      });
    });

    return {
      mainStore,
    };
  },
};
</script>

<template>
  <va-alert
    v-if="mainStore.error"
    color="danger"
    :title="mainStore.error.title"
  >
    {{ mainStore.error.message }}
  </va-alert>
  <main>
    <div class="row">
      <div class="flex xs6 align-text--center">
        <va-button size="7rem" outline icon="account_tree" to="/projects" />
        <div class="title">Projects</div>
      </div>
      <div class="flex xs6 align-text--center">
        <va-button size="7rem" outline icon="settings" to="/settings" />
        <div class="title">Settings</div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  height: 70vh;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;

  .align-text--center {
    text-align: center;
  }

  .va-button {
    border: none;
  }

  .title {
    font-size: 1rem;
    margin-top: 1rem;
  }
}
</style>
