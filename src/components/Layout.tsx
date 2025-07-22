// src/components/Layout.tsx
import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import Analytics from './Analytics'
import { Outlet } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

// Import real y default de react-cookie-consent
import RealCookieConsent from 'react-cookie-consent'

/**
 * Sólo monta el banner de cookies una vez en cliente
 * Previene markup distinto entre SSR y primera renderización cliente.
 */
function CookieConsentWrapper(props: React.ComponentProps<typeof RealCookieConsent>) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null
  return <RealCookieConsent {...props}>{props.children}</RealCookieConsent>
}

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <ScrollToTop />

      <CookieConsentWrapper
        location="bottom"
        buttonText="Aceptar"
        cookieName="miCookieConsentimiento"
        style={{ background: '#2B373B' }}
        buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
        expires={150}
      >
        Este sitio web utiliza cookies para mejorar la experiencia del usuario.{' '}
        <a href="/politica-cookies" style={{ color: '#FFD700' }}>
          Más información
        </a>
      </CookieConsentWrapper>

      <HelmetProvider>
        <Analytics />
        <main className="flex-grow">
          <Outlet />
        </main>
      </HelmetProvider>

      <Footer />
    </div>
  )
}
