import React from 'react';
import { Button } from "@/components/ui/button";
import { PartyPopper } from 'lucide-react';

function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1597095540293-b184e2b0d044?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
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
              <Button
                size="lg"
                className="bg-[#20c997] hover:bg-[#1ba884] text-white"
                onClick={() => window.location.href = '/reservas'}
              >
                Reservar Ahora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-[#20c997] border-white hover:bg-white hover:text-[#20c997]"
                onClick={() => window.location.href = '/packs'}
              >
                Ver Packs
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <PartyPopper className="h-8 w-8 text-[#20c997]" />
                <span className="ml-2 text-2xl font-bold">Arkady</span>
              </div>
              <p className="text-gray-400">
                Creando momentos mágicos y recuerdos inolvidables para toda la familia.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-[#20c997]">Inicio</a></li>
                <li><a href="/servicios" className="text-gray-400 hover:text-[#20c997]">Servicios</a></li>
                <li><a href="/packs" className="text-gray-400 hover:text-[#20c997]">Packs</a></li>
                <li><a href="/reservas" className="text-gray-400 hover:text-[#20c997]">Reservas</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Horario</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Lunes a Viernes: 10:00 - 20:00</li>
                <li>Sábados: 10:00 - 22:00</li>
                <li>Domingos: 11:00 - 20:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2024 Arkady Celebraciones. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;