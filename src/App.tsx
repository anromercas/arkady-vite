import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import Services from './components/Services';
import Packs from './components/Packs';
import Reservations from './components/Reservations';
import Contact from './components/Contact';
import NormasUso from './components/NormasUso';
import FAQPage from './components/FAQ';
import PoliticaPrivacidad from './components/PoliticaPrivacidad';
import CookieConsent from "react-cookie-consent";
import PoliticaCookies from './components/PoliticaCookies';
import ScrollToTop from './components/ScrollToTop';
import Galeria from './components/Galeria';

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
        
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/packs" element={<Packs />} />
            <Route path="/reservas" element={<Reservations />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/normas-uso" element={<NormasUso />} />
            <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
            <Route path="/politica-cookies" element={<PoliticaCookies />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
