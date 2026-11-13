import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.explauradise.com',
  output: 'static',
  vite: { plugins: [tailwindcss()] },
});
