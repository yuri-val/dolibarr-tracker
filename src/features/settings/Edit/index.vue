<template>
  <div class="title">Edit settings</div>

  <div class="text-block">
    <p class="pa-1">
      To setup this app go to this
      <a
        href="https://wiki.dolibarr.org/index.php?title=Module_Web_Services_API_REST_(developer)#Installation"
        target="_blank"
        >manual</a
      >
      activate the module API REST and configure the url and the key. Key you
      can find in the your\'s Dolibarr account.
    </p>
  </div>

  <va-input
    class="mb-4 pa-1"
    v-model="form.host"
    placeholder="https://my.domain.com"
    label="Host"
    outline
  />
  <va-input
    class="mb-4 pa-1"
    v-model="form.token"
    :placeholder="(Math.random() + 1).toString(36).substring(2)"
    label="API Key (DOLAPIKEY)"
    outline
  />

  <va-button block @click="onSave"> Save </va-button>
</template>

<script>
import { useSettingsStore } from "@/stores/settings";
import { useMainStore } from "@/stores/main";
import { ref, onMounted } from "vue";
import { fromStore, toStore } from "@/utils/localStorageStore";
import { setSettingsMetaData } from "../utils";
import { useRouter } from "vue-router";

export default {
  name: "Settings",
  setup() {
    const router = useRouter();
    const store = useSettingsStore();
    const mainStore = useMainStore();
    const form = ref(
      fromStore("settings", {
        host: "",
        token: "",
      })
    );

    store.$subscribe((mutation, state) => toStore("settings", state));

    const onSave = () => {
      store.$patch(form.value);
      window.location.replace(router.resolve({ name: "home" }).href);
    };

    onMounted(() => {
      setSettingsMetaData(mainStore);
    });

    return {
      form,
      onSave,
    };
  },
};
</script>

<style></style>
