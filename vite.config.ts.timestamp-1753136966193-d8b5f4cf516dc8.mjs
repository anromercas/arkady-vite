// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import prerender from "file:///home/project/node_modules/vite-plugin-prerender/dist/index.mjs";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgcHJlcmVuZGVyIGZyb20gJ3ZpdGUtcGx1Z2luLXByZXJlbmRlcic7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYmFzZTogJ2h0dHBzOi8vYXJrYWR5Y2VsZWJyYWNpb25lcy5lcycsXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIHByZXJlbmRlcih7XG4gICAgICByb3V0ZXM6IFtcbiAgICAgICAgJy8nLFxuICAgICAgICAnL3NlcnZpY2lvcycsXG4gICAgICAgICcvcGFja3MnLFxuICAgICAgICAnL3Jlc2VydmFzJyxcbiAgICAgICAgJy9jb250YWN0bycsXG4gICAgICAgICcvZmFxJyxcbiAgICAgICAgJy9nYWxlcmlhJyxcbiAgICAgICAgJy9zb2JyZS1ub3NvdHJvcycsXG4gICAgICAgICcvbm9ybWFzLXVzbycsXG4gICAgICAgICcvcG9saXRpY2EtcHJpdmFjaWRhZCcsXG4gICAgICAgICcvcG9saXRpY2EtY29va2llcydcbiAgICAgIF0sXG4gICAgICByZW5kZXJlcjogJ0BwcmVyZW5kZXJlci9yZW5kZXJlci1wdXBwZXRlZXInLFxuICAgICAgcmVuZGVyZXJPcHRpb25zOiB7XG4gICAgICAgIGhlYWRsZXNzOiB0cnVlLFxuICAgICAgICByZW5kZXJBZnRlckRvY3VtZW50RXZlbnQ6ICdyZW5kZXItZXZlbnQnXG4gICAgICB9XG4gICAgfSlcbiAgXSxcbiAgZGVmaW5lOiB7XG4gICAgJ3Byb2Nlc3MuZW52JzogcHJvY2Vzcy5lbnYsXG4gIH0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGV4Y2x1ZGU6IFsnbHVjaWRlLXJlYWN0J10sXG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlOLFNBQVMsb0JBQW9CO0FBQ3RQLE9BQU8sV0FBVztBQUNsQixPQUFPLGVBQWU7QUFDdEIsT0FBTyxVQUFVO0FBSGpCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxNQUNSLFFBQVE7QUFBQSxRQUNOO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFVBQVU7QUFBQSxNQUNWLGlCQUFpQjtBQUFBLFFBQ2YsVUFBVTtBQUFBLFFBQ1YsMEJBQTBCO0FBQUEsTUFDNUI7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixlQUFlLFFBQVE7QUFBQSxFQUN6QjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLGNBQWM7QUFBQSxFQUMxQjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
