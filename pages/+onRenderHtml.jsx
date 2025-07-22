// https://vike.dev/onRenderHtml
export { onRenderHtml }

import React from 'react'
import { renderToString } from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import { HelmetProvider } from 'react-helmet-async'

async function onRenderHtml(pageContext) {
  const { Page, pageProps } = pageContext
  
  const helmetContext = {}
  
  // Render the page to HTML string
  const pageHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <Page {...pageProps} />
    </HelmetProvider>
  )

  const { helmet } = helmetContext

  // Return the full HTML document
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <!-- Google Tag -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KN7QGRJ1C5"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'G-KN7QGRJ1C5');
        </script>

        ${helmet ? dangerouslySkipEscape(helmet.title.toString()) : ''}
        ${helmet ? dangerouslySkipEscape(helmet.meta.toString()) : ''}
        ${helmet ? dangerouslySkipEscape(helmet.link.toString()) : ''}
        ${helmet ? dangerouslySkipEscape(helmet.script.toString()) : ''}

        <!-- JSON-LD estructurado -->
        <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "EventVenue",
          "@id": "https://arkadycelebraciones.es/#venue",
          "name": "Arkady Celebraciones",
          "image": "https://arkadycelebraciones.es/assets/favicon-BOuny55K.ico",
          "url": "https://arkadycelebraciones.es/",
          "telephone": "+34 655 31 29 18",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "C. Águila Perdicera, 9, Local 5",
            "addressLocality": "Sevilla",
            "postalCode": "41006",
            "addressCountry": "ES"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 37.3660259,
            "longitude": -5.953907117
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
              ],
              "opens": "10:00",
              "closes": "15:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
              ],
              "opens": "17:00",
              "closes": "22:00"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/arkadycelebraciones",
            "https://www.instagram.com/arkadycelebraciones"
          ]
        }
        </script>
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      // We can add custom pageContext properties here
    }
  }
}