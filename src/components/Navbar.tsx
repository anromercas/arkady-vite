import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/src/assets/arkady-logo.png';

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive 
      ? 'text-[#20c997] font-semibold transition-colors'
      : 'text-gray-700 hover:text-[#20c997] transition-colors';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Arkady Logo" className="h-12 w-12" />
            <span className="ml-2 text-2xl font-bold">Arkady</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" className={linkClass}>Inicio</NavLink>
            <NavLink to="/servicios" className={linkClass}>Servicios</NavLink>
            <NavLink to="/packs" className={linkClass}>Tipos de reservas</NavLink>
            <NavLink to="/reservas" className={linkClass}>Reservas</NavLink>
            <NavLink to="/contacto" className={linkClass}>Contacto</NavLink>
            <NavLink to="/faq" className={linkClass}>FAQ</NavLink>
            <NavLink to="/galeria" className={linkClass}>Galería</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
