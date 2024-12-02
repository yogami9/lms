import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0', // listen on all network interfaces
    // eslint-disable-next-line no-undef
    port: Number(process.env.PORT) || 10000, // use the port specified by Render
  }
});
