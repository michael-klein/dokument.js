import preactRefresh from "@prefresh/vite";
import { defineConfig } from "vite";
import alias from "@rollup/plugin-alias";

const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment"
  },
  plugins: [preactRefresh()],
  build: {
    sourcemap: true,

    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      name: "dokumentjs"
    }
  },
  alias: {
    react: "preact/compat"
  }
});
