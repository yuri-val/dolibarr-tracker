import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "https://yuri-val.github.io/dolibarr-tracker/",

  // [vuestic-ui] Add alias for ~normalize.css.
  resolve: {
    alias: [
      { find: /^~(.*)$/, replacement: "$1" },
      { find: "@", replacement: path.resolve(__dirname, "./src") },
    ],
  },
});
