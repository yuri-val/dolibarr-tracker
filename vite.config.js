import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";


const pwaConfig = {
  includeAssets: [
    "favicon.svg",
    "favicon.ico",
    "robots.txt",
    "apple-touch-icon.png",
  ],
  manifest: {
    name: "Dolibarr Tracker",
    short_name: "DT",
    description:
      "Web interface for quick time tracking by tasks in the Dolibarr ERP system",
    theme_color: "#2c82e0",
    icons: [
      {
        src: "android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA(pwaConfig),
  ],
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
