import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  resolve: { extensions: [".js", ".ts", ".tsx", ".jsx"] },
  plugins: [react()],
  base: "/Portfolio-V1/",
});
