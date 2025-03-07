import React from 'react';
import { Clock, Users, Music, Gift, ChefHat } from 'lucide-react';
import { Button } from "@/components/ui/button";

function Packs() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Nuestros Packs de Celebración
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border rounded-lg p-8 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-[#20c997]">Pack Básico</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Clock className="h-5 w-5 text-[#20c997] mr-2" />
                  <span>2 horas de diversión</span>
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-[#20c997] mr-2" />
                  <span>Hasta 15 niños</span>
                </li>
                <li className="flex items-center">
                  <Music className="h-5 w-5 text-[#20c997] mr-2" />
                  <span>Animación básica</span>
                </li>
                <li className="flex items-center">
                  <Gift className="h-5 w-5 text-[#20c997] mr-2" />
                  <span>Regalo para cumpleañero</span>
                </li>
              </ul>
              <Button 
                className="w-full bg-[#20c997] hover:bg-[#1ba884] text-white"
                onClick={() => window.location.href = '/reservas'}
              >
                Reservar Pack Básico
              </Button>
            </div>

            <div className="border rounded-lg p-8 bg-[#20c997] text-white shadow-lg hover:shadow-xl transition-shadow transform scale-105">
              <h3 className="text-2xl font-bold mb-4">Pack Premium</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>3 horas de diversión</span>
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  <span>Hasta 25 niños</span>
                </li>
                <li className="flex items-center">
                  <Music className="h-5 w-5 mr-2" />
                  <span>Animación premium</span>
                </li>
                <li className="flex items-center">
                  <Gift className="h-5 w-5 mr-2" />
                  <span>Regalos para todos</span>
                </li>
                <li className="flex items-center">
                  <ChefHat className="h-5 w-5 mr-2" />
                  <span>Catering incluido</span>
                </li>
              </ul>
              <Button 
                className="w-full bg-white text-[#20c997] hover:bg-gray-100"
                onClick={() => window.location.href = '/reservas'}
              >
                Reservar Pack Premium
              </Button>
            </div>

            <div className="border rounded-lg p-8 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-[#20c997]">Pack Deluxe</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Clock className="h-5 w-5 text-[#20c997] mr-2" />
                  <span>4 horas de diversión</span>
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-[#20c997] mr-2" />
                  <span>Hasta 40 niños</span>
                </li>
                <li className="flex items-center">
                  <Music className="h-5 w-5 text-[#20c997] mr-2" />
                  <span>Animación personalizada</span>
                </li>
                <li className="flex items-center">
                  <Gift className="h-5 w-5 text-[#20c997] mr-2" />
                  <span>Regalos premium</span>
                </li>
                <li className="flex items-center">
                  <ChefHat className="h-5 w-5 text-[#20c997] mr-2" />
                  <span>Catering premium</span>
                </li>
              </ul>
              <Button 
                className="w-full bg-[#20c997] hover:bg-[#1ba884] text-white"
                onClick={() => window.location.href = '/reservas'}
              >
                Reservar Pack Deluxe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Packs;