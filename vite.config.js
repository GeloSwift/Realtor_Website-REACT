import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import forms from "@tailwindcss/forms";
import path from "path";
import { viteCommonjs, esbuildCommonjs } from "@originjs/vite-plugin-commonjs";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      plugins: [forms],
    }),
  ],
  
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildCommonjs(["react-moment"])],
    },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
