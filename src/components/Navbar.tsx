import React from 'react';
import { Link } from 'react-router-dom';
import { PartyPopper } from 'lucide-react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <PartyPopper className="h-8 w-8 text-[#20c997]" />
            <span className="ml-2 text-2xl font-bold">Arkady</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#20c997] transition-colors">Inicio</Link>
            <Link to="/servicios" className="text-gray-700 hover:text-[#20c997] transition-colors">Servicios</Link>
            <Link to="/packs" className="text-gray-700 hover:text-[#20c997] transition-colors">Packs</Link>
            <Link to="/reservas" className="text-gray-700 hover:text-[#20c997] transition-colors">Reservas</Link>
            <Link to="/contacto" className="text-gray-700 hover:text-[#20c997] transition-colors">Contacto</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;