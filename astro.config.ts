import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sitemap(),
  ],
  site: "https://accessible-forms.netlify.app",
  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
  },
});
