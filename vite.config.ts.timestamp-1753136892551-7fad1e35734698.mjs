// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { prerender } from "file:///home/project/node_modules/vite-plugin-prerender/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "/home/project";
var vite_config_default = defineConfig({
  base: "https://arkadycelebraciones.es",
  plugins: [
    react(),
    prerender({
      routes: [
        "/",
        "/servicios",
        "/packs",
        "/reservas",
        "/contacto",
        "/faq",
        "/galeria",
        "/sobre-nosotros",
        "/normas-uso",
        "/politica-privacidad",
        "/politica-cookies"
      ],
      renderer: "@prerenderer/renderer-puppeteer",
      rendererOptions: {
        headless: true,
        renderAfterDocumentEvent: "render-event"
      }
    })
  ],
  define: {
    "process.env": process.env
  },
  optimizeDeps: {
    exclude: ["lucide-react"]
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgeyBwcmVyZW5kZXIgfSBmcm9tICd2aXRlLXBsdWdpbi1wcmVyZW5kZXInO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6ICdodHRwczovL2Fya2FkeWNlbGVicmFjaW9uZXMuZXMnLFxuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBwcmVyZW5kZXIoe1xuICAgICAgcm91dGVzOiBbXG4gICAgICAgICcvJyxcbiAgICAgICAgJy9zZXJ2aWNpb3MnLFxuICAgICAgICAnL3BhY2tzJyxcbiAgICAgICAgJy9yZXNlcnZhcycsXG4gICAgICAgICcvY29udGFjdG8nLFxuICAgICAgICAnL2ZhcScsXG4gICAgICAgICcvZ2FsZXJpYScsXG4gICAgICAgICcvc29icmUtbm9zb3Ryb3MnLFxuICAgICAgICAnL25vcm1hcy11c28nLFxuICAgICAgICAnL3BvbGl0aWNhLXByaXZhY2lkYWQnLFxuICAgICAgICAnL3BvbGl0aWNhLWNvb2tpZXMnXG4gICAgICBdLFxuICAgICAgcmVuZGVyZXI6ICdAcHJlcmVuZGVyZXIvcmVuZGVyZXItcHVwcGV0ZWVyJyxcbiAgICAgIHJlbmRlcmVyT3B0aW9uczoge1xuICAgICAgICBoZWFkbGVzczogdHJ1ZSxcbiAgICAgICAgcmVuZGVyQWZ0ZXJEb2N1bWVudEV2ZW50OiAncmVuZGVyLWV2ZW50J1xuICAgICAgfVxuICAgIH0pXG4gIF0sXG4gIGRlZmluZToge1xuICAgICdwcm9jZXNzLmVudic6IHByb2Nlc3MuZW52LFxuICB9LFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBleGNsdWRlOiBbJ2x1Y2lkZS1yZWFjdCddLFxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5TixTQUFTLG9CQUFvQjtBQUN0UCxPQUFPLFdBQVc7QUFDbEIsU0FBUyxpQkFBaUI7QUFDMUIsT0FBTyxVQUFVO0FBSGpCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxNQUNSLFFBQVE7QUFBQSxRQUNOO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFVBQVU7QUFBQSxNQUNWLGlCQUFpQjtBQUFBLFFBQ2YsVUFBVTtBQUFBLFFBQ1YsMEJBQTBCO0FBQUEsTUFDNUI7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixlQUFlLFFBQVE7QUFBQSxFQUN6QjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLGNBQWM7QUFBQSxFQUMxQjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
