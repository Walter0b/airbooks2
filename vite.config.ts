import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, Plugin } from "vite";

const __dirname = path.resolve();

export default defineConfig({
  plugins: [react()] as unknown as Plugin[],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
