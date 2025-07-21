// Configuración específica para el prerenderizado
export default {
  // Rutas a prerenderizar
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
  
  // Configuración del renderer
  renderer: '@prerenderer/renderer-puppeteer',
  
  // Opciones del renderer
  rendererOptions: {
    headless: true,
    renderAfterDocumentEvent: 'render-event',
    renderAfterTime: 2000, // Esperar 2 segundos adicionales
    
    // Configuración de Puppeteer
    puppeteerOptions: {
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--disable-gpu'
      ]
    }
  },
  
  // Directorio de salida
  outputDir: 'dist',
  
  // Configuración adicional
  minify: {
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    decodeEntities: true,
    keepClosingSlash: true,
    sortAttributes: true
  }
};