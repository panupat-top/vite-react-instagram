import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  server: { port: 3000 },
  plugins: [react(), tsconfigPaths(), svgr()],
  esbuild: { logOverride: { "this-is-undefined-in-esm": "silent" } },
});
