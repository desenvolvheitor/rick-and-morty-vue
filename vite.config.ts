import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    vue(),
    VitePWA({
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.ts', // O arquivo fonte que criaremos
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifest: {
        name: 'Rick and Morty Explorer',
        short_name: 'RM Explorer',
        theme_color: '#181a21',
        icons: [
          {
            src: 'favicon.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          }
        ]
      },
      injectManifest: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
      },
      devOptions: {
        enabled: true, // Permite testar o SW no npm run dev
        type: 'module'
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/shared/components',  import.meta.url)),
      '@helpers': fileURLToPath(new URL('./src/shared/helpers',  import.meta.url)),
      '@services': fileURLToPath(new URL('./src/shared/services',  import.meta.url)),
      '@stores': fileURLToPath(new URL('./src/shared/stores',  import.meta.url))
    },
  },
});
