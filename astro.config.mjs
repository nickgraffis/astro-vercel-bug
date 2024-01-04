import { defineConfig } from "astro/config";
import { nodeExternals } from "rollup-plugin-node-externals";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  build: {
    rollupOptions: {
      plugins: [nodeExternals()],
    },
  },
});
