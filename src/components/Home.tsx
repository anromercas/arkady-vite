import React from 'react';
import { Button } from "@/components/ui/button";
import { PartyPopper } from 'lucide-react';
import Services from './Services';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1551966775-a4ddc8df052b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
  );
}

export default Home;