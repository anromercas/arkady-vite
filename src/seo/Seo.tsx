import { Helmet } from "react-helmet-async";

function Seo({ title, description, keywords }) {
    // Usar window.location solo en el cliente, fallback para SSG
    const canonical = typeof window !== 'undefined' 
        ? window.location.href 
        : `https://arkadycelebraciones.es${window?.location?.pathname || ''}`;
        
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Arkady Celebraciones" />
            
            {/* Metatags para SSG/SEO */}
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <meta name="bingbot" content="index, follow" />

            {/* Open Graph (para Facebook y otros) */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Arkady Celebraciones" />
            <meta property="og:locale" content="es_ES" />
            <meta property="og:image" content="https://arkadycelebraciones.es/assets/arkady-logo.png" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content="https://arkadycelebraciones.es/assets/arkady-logo.png" />

            {/* Local SEO */}
            <meta name="geo.region" content="ES-SE" /> {/* SE = Sevilla */}
            <meta name="geo.placename" content="Sevilla" />
            <meta name="geo.position" content="37.3767;-5.9553" />
            <meta name="ICBM" content="37.3767, -5.9553" />

            {/* Canonical URL */}
            <link rel="canonical" href={canonical} />
            
            {/* Structured Data para Local Business */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "Arkady Celebraciones",
                    "description": description,
                    "url": canonical,
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
                    "openingHours": [
                        "Mo-Su 10:00-15:00",
                        "Mo-Su 17:00-22:00"
                    ],
                    "sameAs": [
                        "https://www.facebook.com/arkadycelebraciones",
                        "https://www.instagram.com/arkadycelebraciones"
                    ]
                })}
            </script>
        </Helmet>
    )
};

export default Seo;