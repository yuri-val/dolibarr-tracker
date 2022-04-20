import { createApp } from "vue";
import { createPinia } from "pinia";
import VueGtag from "vue-gtag";
import withUIComponents from "@/utils/withUIComponents.js";

import App from "./App.vue";
import router from "./router";

import "vuestic-ui/dist/vuestic-ui.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(
  VueGtag,
  {
    config: { id: "G-HKMF5W2Y2C" },
  },
  router
);

withUIComponents(app);

app.mount("#app");
