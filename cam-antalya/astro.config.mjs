import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless'; // Vercel adaptörü eklenmiş

// https://astro.build/config
export default defineConfig({
  // !!! KRİTİK AYAR: Çıktı formatını zorla statik yapıyoruz.
  output: 'static', 
  
  integrations: [react()],
  
  // Vercel adaptörü: Bu, vercel'e dağıtım için gereklidir, ancak statik modu zorlayacağız.
  adapter: vercel({
    // Vercel'i de statik çıktı için yapılandırıyoruz
    webAnalytics: true,
    speedInsights: true,
  }),

  // Projenin derleneceği dizini belirtir (varsayılan 'dist')
  outDir: './dist',
});
