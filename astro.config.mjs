// @ts-check

import node from "@astrojs/node";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "server",
  env: {
    schema: {
      API_SECRET_TOKEN: envField.string({ context: "server", access: "secret" }),
    },
  },
  adapter: node({
    // mode: 'standalone' or 'serverless'
    mode: "standalone",
  }),
  integrations: [react(), tailwind()],
});
