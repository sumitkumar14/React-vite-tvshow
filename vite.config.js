import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  test: {
    include: ["src/**/*.test.{js,ts,jsx}", "test/**/*.spec.{js,ts,jsx}"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: ["src/**/*.js", "src/**/*.ts", "src/**/*.jsx"],
    },

    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.js",
  },
})
