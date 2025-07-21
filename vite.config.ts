import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { prerender } from 'vite-plugin-prerender';
import path from 'path';

export default defineConfig({
  base: 'https://arkadycelebraciones.es',
  plugins: [
    react(),
    prerender({
      routes: [
        '/',
        '/servicios',
        '/packs',
        '/reservas',
        '/contacto',
        '/faq',
        '/galeria',
        '/sobre-nosotros',
        '/normas-uso',
        '/politica-privacidad',
        '/politica-cookies'
      ],
      renderer: '@prerenderer/renderer-puppeteer',
      rendererOptions: {
        headless: true,
        renderAfterDocumentEvent: 'render-event'
      }
    })
  ],
  define: {
    'process.env': process.env,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
