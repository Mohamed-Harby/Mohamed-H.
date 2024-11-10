import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import mdPlugin from "vite-plugin-md";

export default defineConfig({
  plugins: [
    react(),
    // mdPlugin({
    //   mode: "react", // Optional if you want to treat markdown files as React components
    // }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/_variables.scss";
          @import "./src/styles/_mixins.scss";
        `,
      },
    },
  },
  assetsInclude: ["**/*.md"], // Ensure .md files are included as assets
});
