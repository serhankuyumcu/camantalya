import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // Vercel adaptörünü içe akta 

// https://astro.build/config
export default defineConfig({
  // React ve Tailwind entegrasyonları
  integrations: [
    react(),
    tailwind(),
  ],
  output: 'server',
   adapter: vercel({
    // serverless veya edge fonksiyonlarını burada ayarlayabilirsiniz
    // buildOutput: true, // Varsayılan olarak Astro, Vercel'de çıktıyı ayarlar.
  }),
});
