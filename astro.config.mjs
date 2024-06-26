import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://miksevigny.com',
  integrations: [icon()],
  markdown: {
    shikiConfig: {
      theme: 'tokyo-night',
    },
  },
});
