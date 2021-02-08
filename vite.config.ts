import preactRefresh from "@prefresh/vite";
import { defineConfig } from "vite";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment"
  },
  plugins: [preactRefresh()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      name: "dokumentjs"
    }
  }
});
