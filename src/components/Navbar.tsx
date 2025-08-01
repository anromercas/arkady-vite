import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '/src/assets/arkady-logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-[#20c997] font-semibold transition-colors'
      : 'text-gray-700 hover:text-[#20c997] transition-colors';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/">
            <div className="flex items-center">
                <img src={logo} alt="Arkady Logo" className="h-12 w-12" />
                <span className="ml-2 text-2xl font-bold">Arkady</span>
            </div>
          </NavLink>
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" className={linkClass}>Inicio</NavLink>
            <NavLink to="/servicios" className={linkClass}>Servicios</NavLink>
            <NavLink to="/packs" className={linkClass}>Tipos de reservas</NavLink>
            <NavLink to="/reservas" className={linkClass}>Reservas</NavLink>
            <NavLink to="/contacto" className={linkClass}>Contacto</NavLink>
            <NavLink to="/faq" className={linkClass}>FAQ</NavLink>
            <NavLink to="/galeria" className={linkClass}>Galería</NavLink>
            <NavLink to="/sobre-nosotros" className={linkClass}>Sobre Nosotros</NavLink>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="text-gray-700" /> : <Menu className="text-gray-700" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-2 flex flex-col items-start">
            <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>Inicio</NavLink>
            <NavLink to="/servicios" className={linkClass} onClick={() => setIsOpen(false)}>Servicios</NavLink>
            <NavLink to="/packs" className={linkClass} onClick={() => setIsOpen(false)}>Tipos de reservas</NavLink>
            <NavLink to="/reservas" className={linkClass} onClick={() => setIsOpen(false)}>Reservas</NavLink>
            <NavLink to="/contacto/" className={linkClass} onClick={() => setIsOpen(false)}>Contacto</NavLink>
            <NavLink to="/faq" className={linkClass} onClick={() => setIsOpen(false)}>FAQ</NavLink>
            <NavLink to="/galeria" className={linkClass} onClick={() => setIsOpen(false)}>Galería</NavLink>
            <NavLink to="/sobre-nosotros" className={linkClass} onClick={() => setIsOpen(false)}>Sobre Nosoros</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;