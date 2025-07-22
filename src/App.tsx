import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from "react-cookie-consent";
import { HelmetProvider } from 'react-helmet-async';
import Analytics from './components/Analytics';

function App({ children }) {

  return (
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
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </HelmetProvider>
    </div>
  );
}

export default App;
