import { createApp } from "vue";
import { createPinia } from "pinia";
import withUIComponents from "@/utils/withUIComponents.js";

import App from "./App.vue";
import router from "./router";

import "vuestic-ui/dist/vuestic-ui.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

withUIComponents(app);

app.mount("#app");
