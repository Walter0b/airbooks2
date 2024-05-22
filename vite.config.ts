import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, Plugin } from "vite";


const __dirname = path.resolve();
const root = path.resolve(__dirname,'./src')

export default defineConfig({
  plugins: [react()] as unknown as Plugin[],
  resolve: {
    alias: {
      '@': path.resolve(root),
      '@public': path.resolve(__dirname, "./public")
    },
  },
});
