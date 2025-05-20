import React from 'react';
import Services from './Services';
import { Link } from 'react-router-dom';
import Seo from '../seo/Seo';
import bgImage from '../assets/arkady-celebraciones-home.avif';


function Home() {
  return (
    <>
      <div className="pt-20">
        {/* Hero Section */}
        <header className="relative h-screen">
            <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
            >
            <div className="absolute inset-0 bg-black/50"></div>
            </div>

          <div className="relative z-10 container mx-auto px-6 h-[calc(100vh-80px)] flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Crea Recuerdos Inolvidables en Arkady
              </h1>
              <p className="text-xl text-white mb-8">
                El espacio perfecto para celebrar cumpleaños, eventos y fiestas temáticas
              </p>
              <div className="flex gap-4">

                <Link
                  to="/reservas"
                  className="inline-block bg-[#20c997] hover:bg-white text-white hover:text-[#20c997] font-bold py-3 px-8 rounded-full shadow-md transition-colors"
                >
                  Reservar Ahora
                </Link>
                <Link
                  to="/packs"
                  className="inline-block bg-white hover:text-white hover:bg-[#20c997] text-[#20c997] border-white font-bold py-3 px-8 rounded-full shadow-md transition-colors"
                >
                  Ver Tipos de Reservas
                </Link>
              </div>
            </div>
          </div>
        </header>

        <Services></Services>

        <div className="bg-[#FEE75C] py-20 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            ¿Listo para celebrar?
          </h1>
          <p className="text-2xl text-gray-700 mb-6">
            Reserva ahora para crear momentos mágicos y recuerdos inolvidables
          </p>
          <Link
            to="/reservas"
            className="inline-block bg-[#20c997] hover:bg-[#1ba884] text-white font-bold py-3 px-8 rounded-full shadow-md transition-colors"
          >
            Reservar Ahora
          </Link>
        </div>

      </div>
      <Seo
        title={'Parque de bolas y celebraciones en Sevilla | Arkady'}
        description={'Alquila un local con parque de bolas, cocina equipada y zona infantil para cumpleaños y fiestas en Sevilla. Reserva online fácil y rápida.'}
        keywords={'parque de bolas Sevilla, cumpleaños Sevilla, local de celebraciones Sevilla, cumpleaños infantil, comuniones Sevilla'}
      />
    </>
  );
}

export default Home;