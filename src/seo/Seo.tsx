// src/components/Seo.tsx
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

interface SeoProps {
  title: string
  description?: string
  keywords?: string
}

export default function Seo({
  title,
  description = '',
  keywords = '',
}: SeoProps) {
  // canonical siempre existe, pero arranca como cadena vacía en SSR
  const [canonical, setCanonical] = useState<string>('')

  useEffect(() => {
    setCanonical(window.location.href)
  }, [])

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Arkady Celebraciones" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url"         content={canonical} />
      <meta property="og:type"        content="website" />
      <meta property="og:site_name"   content="Arkady Celebraciones" />
      <meta property="og:locale"      content="es_ES" />

      {/* Local SEO */}
      <meta name="geo.region"    content="ES-SE" />
      <meta name="geo.placename" content="Sevilla" />
      <meta name="geo.position"  content="37.3767;-5.9553" />
      <meta name="ICBM"          content="37.3767, -5.9553" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
    </Helmet>
  )
}
