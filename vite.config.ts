import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import prerender from 'vite-plugin-prerender';
import vike from 'vike/plugin';
import path from 'path';

export default defineConfig({
  // base: 'https://arkadycelebraciones.es',
  base: './',
  plugins: [react()],
  ssr: {
    noExternal: [
      // añade aquí otros paquetes CommonJS que imports con named‑import
      'react-helmet-async',
      'react-cookie-consent'
    ],
  },
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
