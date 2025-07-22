// import { BrowserRouter as Router } from 'react-router-dom';
// import MainRoutes from './routes/MainRoutes';
// import ScrollToTop from './components/ScrollToTop';
// import CookieConsent from "react-cookie-consent";
// import { HelmetProvider } from 'react-helmet-async';
// import Analytics from './components/Analytics';

// function App() {
//   return (
//     <Router>
//       <ScrollToTop />
//       <div className="min-h-screen bg-white">
//         <CookieConsent
//           location="bottom"
//           buttonText="Aceptar"
//           cookieName="miCookieConsentimiento"
//           style={{ background: "#2B373B" }}
//           buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
//           expires={150}
//         >
//           Este sitio web utiliza cookies para mejorar la experiencia del usuario.{" "}
//           <a href="/politica-cookies" style={{ color: "#FFD700" }}>
//             Más información
//           </a>
//         </CookieConsent>

//         <HelmetProvider>
//           <Analytics />
//           <MainRoutes />
//         </HelmetProvider>
//       </div>
//     </Router>
//   );
// }

// export default App;
// src/App.tsx
import type { RouteRecord } from 'vite-react-ssg'
import React from 'react'
import Layout from './components/Layout'

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    entry: 'src/components/Layout.tsx',
    children: [
      { index: true, Component: React.lazy(() => import('./pages/Home')) },
      { path: 'servicios', Component: React.lazy(() => import('./pages/Services')) },
      { path: 'packs', Component: React.lazy(() => import('./pages/Packs')) },
      { path: 'reservas', Component: React.lazy(() => import('./pages/Reservations')) },
      { path: 'contacto', Component: React.lazy(() => import('./pages/Contact')) },
      { path: 'faq', Component: React.lazy(() => import('./pages/FAQ')) },
      { path: 'galeria', Component: React.lazy(() => import('./pages/Galeria')) },
      { path: 'sobre-nosotros', Component: React.lazy(() => import('./pages/About')) },
      { path: 'normas-uso', Component: React.lazy(() => import('./pages/NormasUso')) },
      { path: 'politica-privacidad', Component: React.lazy(() => import('./pages/PoliticaPrivacidad')) },
      { path: 'politica-cookies', Component: React.lazy(() => import('./pages/PoliticaCookies')) },
    ],
  },
]
