import { HashRouter as Router } from 'react-router-dom';
import MainRoutes from './routes/MainRoutes';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from "react-cookie-consent";
import { HelmetProvider } from 'react-helmet-async';
import Analytics from './components/Analytics';

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
          <MainRoutes />
        </HelmetProvider>
      </div>
    </Router>
  );
}

export default App;
