// components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Layout() {
  const location = useLocation();

  // Disparar evento de renderizado cuando cambie la ruta (para SSG)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Pequeño delay para asegurar que el contenido se ha renderizado
      setTimeout(() => {
        window.dispatchEvent(new Event('render-event'));
      }, 100);
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}
