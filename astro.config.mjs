// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [
      // your chosen wikilink / callout / embed resolver plugins here
    ],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    routing: {
      prefixDefaultLocale: false, // English at /, French at /fr/
    },
  },
});
