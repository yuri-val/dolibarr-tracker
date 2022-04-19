import { createApp } from "vue";
import { createPinia } from "pinia";
import { VuesticPlugin } from "vuestic-ui";
import axios from "axios";
import VueAxios from "vue-axios";

import App from "./App.vue";
import router from "./router";

import "vuestic-ui/dist/vuestic-ui.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(VuesticPlugin);
app.use(VueAxios, axios);

app.mount("#app");
