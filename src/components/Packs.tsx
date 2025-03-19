import React from 'react';
import { Clock, Users, Music, Gift, ChefHat, CalendarClock, PiggyBank, Euro } from 'lucide-react';
import { Link } from "react-router-dom";

function Packs() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Nuestros Tipos de Reserva
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border rounded-lg p-8 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-[#20c997]">Horario Mañana</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CalendarClock className="h-5 w-5 text-[#20c997] mr-2" />
                  <span>Horario: 10:00 h a 15:00 h</span>
                </li>
                <li className="flex items-center">
                  <Clock className="h-5 w-5 text-[#20c997] mr-2" />
                  <span>5 horas de diversión</span>
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-[#20c997] mr-2" />
                  <span>Capacidad: 60 personas</span>
                </li>
                <li className="flex items-center">
                  <Euro className="h-5 w-5 text-[#20c997] mr-2" />
                  <span>Precio: (L-J) 100 € - (V-D y Festivos) 150 €</span>
                </li>
                <li className="flex items-center">
                  <PiggyBank className="h-5 w-5 text-[#20c997] mr-2" />
                  <span>Fianza: 75 €</span>
                </li>
              </ul>
              <Link
                to="/reservas"
                className="inline-block w-full text-center bg-[#20c997] hover:bg-[#1ba884] text-white font-bold py-3 px-8 rounded-full shadow-md transition-colors"
              >
                Reservar Horario Mañana
              </Link>
            </div>

            <div className="border rounded-lg p-8 bg-[#20c997] text-white shadow-lg hover:shadow-xl transition-shadow transform scale-105">
              <h3 className="text-2xl font-bold mb-4">Día Completo</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CalendarClock className="h-5 w-5 text-[#20c997] mr-2" />
                  <span>Horario: 10:00 h a 23:00 h</span>
                </li>
                <li className="flex items-center">
                  <Clock className="h-5 w-5 text-[#20c997] mr-2" />
                  <span>13 horas de diversión</span>
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-[#20c997] mr-2" />
                  <span>Capacidad: 60 personas</span>
                </li>
                <li className="flex items-center">
                  <Euro className="h-5 w-5 text-[#20c997] mr-2" />
                  <span>Precio: (L-J) 200 € - (V-D y Festivos) 250 €</span>
                </li>
                <li className="flex items-center">
                  <PiggyBank className="h-5 w-5 text-[#20c997] mr-2" />
                  <span>Fianza: 75 €</span>
                </li>
              </ul>
              <Link
                to="/reservas"
                className="inline-block w-full text-center bg-white hover:bg-[#1ba884] text-[#20c997] font-bold py-3 px-8 rounded-full shadow-md transition-colors"
              >
                Reservar Día Completo
              </Link>
            </div>

            <div className="border rounded-lg p-8 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-[#20c997]">Horario Tarde</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CalendarClock className="h-5 w-5 text-[#20c997] mr-2" />
                  <span>Horario: 17:00 h a 22:00 h ó 18:00 h a 23:00 h</span>
                </li>
                <li className="flex items-center">
                  <Clock className="h-5 w-5 text-[#20c997] mr-2" />
                  <span>5 horas de diversión</span>
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-[#20c997] mr-2" />
                  <span>Capacidad: 60 personas</span>
                </li>
                <li className="flex items-center">
                  <Euro className="h-5 w-5 text-[#20c997] mr-2" />
                  <span>Precio: (L-J) 155 € - (V-D y Festivos) 170 €</span>
                </li>
                <li className="flex items-center">
                  <PiggyBank className="h-5 w-5 text-[#20c997] mr-2" />
                  <span>Fianza: 75 €</span>
                </li>
              </ul>
              <Link
                to="/reservas"
                className="inline-block w-full text-center bg-[#20c997] hover:bg-[#1ba884] text-white font-bold py-3 px-8 rounded-full shadow-md transition-colors"
              >
                Reservar Horario Tarde
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Nuestras instalaciones incluyen:
        </h2>
        <ul className="text-lg text-gray-700 space-y-6 max-w-4xl mx-auto text-left list-disc pl-8">
          <li>
            <strong>Amplio salón climatizado:</strong> Con capacidad para 60 personas, equipado con mesas, sillas, barra y taburetes, ideal para cualquier tipo de celebración.
          </li>
          <li>
            <strong>Zona de juegos para niños:</strong> Un espacio diseñado para la diversión sin límites, con un gran parque de bolas de 40 m² que incluye cama elástica, piscina de bolas con tobogán y dos niveles para explorar. Además, cuenta con una pequeña pista de fútbol, perfecta para que los más pequeños disfruten de partidos emocionantes en un entorno seguro y adaptado a ellos.
          </li>
          <li>
            <strong>Área para los más pequeños:</strong> Un rincón especial con cocinita, muñecas y una moto infantil, pensado para estimular su imaginación y creatividad en un ambiente acogedor.
          </li>
          <li>
            <strong>Zona Gamer para adolescentes y adultos:</strong> Un espacio único con dos máquinas arcade que incluyen más de 3000 juegos clásicos, además de PlayStation, diana y futbolín, asegurando entretenimiento para todas las edades.
          </li>
          <li>
            <strong>Área de cocina funcional:</strong> Totalmente equipada con nevera, cafetera Dolce Gusto, microondas, horno de sobremesa y botellero, ideal para la preparación y conservación de alimentos y bebidas durante la celebración.
          </li>
        </ul>
      </div>
    </section>
    </div>

  );
}

export default Packs;