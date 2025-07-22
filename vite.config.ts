import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import prerender from 'vite-plugin-prerender';
import vike from 'vike/plugin';
import path from 'path';
import { createRequire } from 'module';

// Creamos un require que funcione en este ESM
const require = createRequire(import.meta.url);
// Cargamos la versión CJS del plugin
const prerender = require('vite-plugin-prerender');

export default defineConfig({
  base: 'https://arkadycelebraciones.es',
  plugins: [react(),
     prerender({
      staticDir: path.resolve(__dirname, 'dist'),
      // Carpeta destino tras `vite build`
      outDir: path.resolve(__dirname, 'dist'),
      // Lista de rutas a prerenderizar
      routes: [
        '/',
        '/servicios',
        '/packs',
        '/reservas',
        '/faq',
        '/sobre-nosotros',
        '/contacto',
      ],
      // Opcional: espera a que salte este evento antes de capturar el HTML
      renderAfterDocumentEvent: 'prerender-ready',
    }),
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
