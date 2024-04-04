import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteGlsl from "vite-plugin-glsl";

export default defineConfig({
  plugins: [react(), ViteGlsl()],
});
