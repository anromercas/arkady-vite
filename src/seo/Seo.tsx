import { Helmet } from "react-helmet-async";

function Seo({ title, description, keywords }) {
    const canonical = window.location.href;
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Arkady Celebraciones" />

            {/* Open Graph (para Facebook y otros) */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Arkady Celebraciones" />
            <meta property="og:locale" content="es_ES" />

            {/* Local SEO */}
            <meta name="geo.region" content="ES-SE" /> {/* SE = Sevilla */}
            <meta name="geo.placename" content="Sevilla" />
            <meta name="geo.position" content="37.3767;-5.9553" />
            <meta name="ICBM" content="37.3767, -5.9553" />

            {/* Canonical URL */}
            <link rel="canonical" href={canonical} />
        </Helmet>
    )
};

export default Seo;