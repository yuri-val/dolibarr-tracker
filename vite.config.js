import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/dolibarr-tracker",
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules"))
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
        },
      },
    },
  },
  resolve: {
    alias: [
      { find: /^~(.*)$/, replacement: "$1" },
      { find: "@", replacement: path.resolve(__dirname, "./src") },
    ],
  },
});
