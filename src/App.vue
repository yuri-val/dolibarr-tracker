<template>
  <app-layout />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    "app-layout": defineAsyncComponent(() => import("./views/AppLayout.vue")),
  },
};
</script>
