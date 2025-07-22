import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import prerender from 'vite-plugin-prerender';
import vike from 'vike/plugin';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    vike({
      prerender: true
    })
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
