import React from 'react';
import logo from '/src/assets/arkady-logo.png';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <img src={logo} alt="Arkady Logo" className="h-8 w-8" />
              <span className="ml-2 text-2xl font-bold">Arkady</span>
            </div>
            <p className="text-gray-400">
              Creando momentos mágicos y recuerdos inolvidables para toda la familia.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-[#20c997]"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios"
                  className="text-gray-400 hover:text-[#20c997]"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  to="/tipos-de-reservas"
                  className="text-gray-400 hover:text-[#20c997]"
                >
                  Tipos de reservas
                </Link>
              </li>
              <li>
                <Link
                  to="/reservas"
                  className="text-gray-400 hover:text-[#20c997]"
                >
                  Reservas
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="text-gray-400 hover:text-[#20c997]"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-400 hover:text-[#20c997]"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/normas-uso"
                  className="text-gray-400 hover:text-[#20c997]"
                >
                  Normas
                </Link>
              </li>
              <li>
                <Link
                  to="/politica-privacidad"
                  className="text-gray-400 hover:text-[#20c997]"
                >
                  Política
                </Link>
              </li>
              <li>
                <Link
                  to="/politica-cookies"
                  className="text-gray-400 hover:text-[#20c997]"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Horarios de reserva:</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Mañanas: 10:00 h a 15:00 h</li>
              <li>Tardes: 16:00 h a 21:00 h o 17:00 h a 22:00 h</li>
              <li>Día completo: 10:00 h a 22:00 h</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Arkady Celebraciones. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
