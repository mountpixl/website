// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  site: 'https://mountpixl.com',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },
  adapter: cloudflare(),
  integrations: [sitemap(), robotsTxt()],
  prefetch: {
    defaultStrategy: 'hover',
  },
});
