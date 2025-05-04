import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../components/Layout';
import Services from '../pages/Services';
import Packs from '../pages/Packs';
import Reservations from '../pages/Reservations';
import Contact from '../pages/Contact';
import NormasUso from '../pages/NormasUso';
import FAQPage from '../pages/FAQ';
import PoliticaPrivacidad from '../pages/PoliticaPrivacidad';
import PoliticaCookies from '../pages/PoliticaCookies';
import Galeria from '../pages/Galeria';

function MainRoutes() {
    return (
        <>
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
        </>
    );
}

export default MainRoutes;