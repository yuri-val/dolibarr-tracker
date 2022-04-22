<script>
import { useMainStore } from "@/stores/main.js";
import { onMounted, defineAsyncComponent } from "vue";
import { toStore } from "@/utils/localStorageStore";

export default {
  name: "app-layout",
  components: {
    navbar: defineAsyncComponent(() => import("@/components/Navbar.vue")),
    breadcrumbs: defineAsyncComponent(() =>
      import("@/components/Breadcrumbs.vue")
    ),
  },
  setup() {
    const store = useMainStore();

    store.$subscribe((mutation, state) => toStore("main", state));

    onMounted(() => {
      store.loadCompany();
      store.loadUser();
    });
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="app-layout">
    <navbar :company="store.company" :user="store.user" />
    <div class="app-layout__content">
      <div class="app-layout__page">
        <breadcrumbs />
        <div class="layout fluid gutter--xl pa-2">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$mobileBreakPointPX: 640px;
$tabletBreakPointPX: 768px;

.app-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;

  &__content {
    display: flex;
    height: calc(100vh - 4rem);
    flex: 1;
    @media screen and (max-width: $tabletBreakPointPX) {
      height: calc(100vh - 6.5rem);
    }
  }
  &__page {
    flex-grow: 2;
    overflow-y: scroll;
  }
}
</style>
