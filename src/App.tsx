import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import MainRoutes from './routes/MainRoutes';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from "react-cookie-consent";
import { HelmetProvider } from 'react-helmet-async';
import Analytics from './components/Analytics';

// Componente auxiliar para emitir el evento tras cada navegación
function PrerenderTrigger() {
  const location = useLocation();
  useEffect(() => {
    // Debe coincidir con renderAfterDocumentEvent en vite.config.js
    document.dispatchEvent(new Event('prerender-ready'));
  }, [location]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <CookieConsent
          location="bottom"
          buttonText="Aceptar"
          cookieName="miCookieConsentimiento"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
        >
          Este sitio web utiliza cookies para mejorar la experiencia del usuario.{" "}
          <a href="/politica-cookies" style={{ color: "#FFD700" }}>
            Más información
          </a>
        </CookieConsent>

        <HelmetProvider>
          <Analytics />
          <PrerenderTrigger />
          <MainRoutes />
        </HelmetProvider>
      </div>
    </Router>
  );
}

export default App;
