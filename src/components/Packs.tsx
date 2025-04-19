import React from 'react';
import { Clock, Users, CalendarClock, PiggyBank, Euro, Popcorn, Candy, Home, Activity, Baby, Gamepad, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

function Packs() {
  return (
    <div className='pt-20'>
      {/* Tipos de Reserva */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-6'>
          <h2 className='text-4xl font-bold text-center mb-16 text-gray-800'>
            Nuestros Tipos de Reserva
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {/* Horario Mañana */}
            <div className='border rounded-lg p-8 bg-white shadow-lg hover:shadow-xl transition-shadow'>
              <h3 className='text-2xl font-bold mb-4 text-[#20c997]'>Horario Mañana</h3>
              <ul className='space-y-4 mb-8'>
                <li className='flex items-center'>
                  <CalendarClock className='h-5 w-5 text-[#20c997] mr-2' />
                  <span><b>Horario:</b> 10:00 h a 15:00 h</span>
                </li>
                <li className='flex items-center'>
                  <Clock className='h-5 w-5 text-[#20c997] mr-2' />
                  <span><b>Duración:</b> 5 horas de diversión</span>
                </li>
                <li className='flex items-center'>
                  <Users className='h-5 w-5 text-[#20c997] mr-2' />
                  <span><b>Capacidad:</b> 60 personas</span>
                </li>
                <li className='flex items-start'>
                  <Euro className='h-5 w-5 text-[#20c997] mr-2' />
                  <span><b>Precio:</b><br />
                    <b>Lunes a Jueves:</b> 85 €<br />
                    <b>Viernes a Domingos, Festivos y Vísperas de Festivos:</b> 100 €
                  </span>
                </li>
                <li className='flex items-center'>
                  <PiggyBank className='h-5 w-5 text-[#20c997] mr-2' />
                  <span><b>Fianza:</b> 75 €</span>
                </li>
              </ul>
              <Link
                to='/reservas'
                className='inline-block w-full text-center bg-[#20c997] hover:bg-[#1ba884] text-white font-bold py-3 px-8 rounded-full shadow-md transition-colors'
              >
                Reservar Horario Mañana
              </Link>
            </div>

            {/* Día Completo */}
            <div className='border rounded-lg p-8 bg-[#20c997] text-white shadow-lg hover:shadow-xl transition-shadow transform scale-105'>
              <h3 className='text-2xl font-bold mb-4'>Día Completo</h3>
              <ul className='space-y-4 mb-8'>
                <li className='flex items-center'>
                  <CalendarClock className='h-5 w-5 text-white mr-2' />
                  <span><b>Horario:</b> 10:00 h a 22:00 h</span>
                </li>
                <li className='flex items-center'>
                  <Clock className='h-5 w-5 text-white mr-2' />
                  <span><b>Duración:</b> 13 horas de diversión</span>
                </li>
                <li className='flex items-center'>
                  <Users className='h-5 w-5 text-white mr-2' />
                  <span><b>Capacidad:</b> 60 personas</span>
                </li>
                <li className='flex items-start'>
                  <Euro className='h-5 w-5 text-white mr-2' />
                  <span><b>Precio:</b><br />
                    <b>Lunes a Jueves:</b> 140 €<br />
                    <b>Viernes a Domingos, Festivos y Vísperas de Festivos:</b> 200 €
                  </span>
                </li>
                <li className='flex items-center'>
                  <PiggyBank className='h-5 w-5 text-white mr-2' />
                  <span><b>Fianza:</b> 75 €</span>
                </li>
              </ul>
              <Link
                to='/reservas'
                className='inline-block w-full text-center bg-white hover:bg-[#1ba884] text-[#20c997] font-bold py-3 px-8 rounded-full shadow-md transition-colors'
              >
                Reservar Día Completo
              </Link>
            </div>

            {/* Horario Tarde */}
            <div className='border rounded-lg p-8 bg-white shadow-lg hover:shadow-xl transition-shadow'>
              <h3 className='text-2xl font-bold mb-4 text-[#20c997]'>Horario Tarde</h3>
              <ul className='space-y-4 mb-8'>
                <li className='flex items-center'>
                  <CalendarClock className='h-5 w-5 text-[#20c997] mr-2' />
                  <span><b>Horario:</b> 16:00 h a 21:00 h ó 17:00 h a 22:00 h</span>
                </li>
                <li className='flex items-center'>
                  <Clock className='h-5 w-5 text-[#20c997] mr-2' />
                  <span><b>Duración:</b> 5 horas de diversión</span>
                </li>
                <li className='flex items-center'>
                  <Users className='h-5 w-5 text-[#20c997] mr-2' />
                  <span><b>Capacidad:</b> 60 personas</span>
                </li>
                <li className='flex items-start'>
                  <Euro className='h-5 w-5 text-[#20c997] mr-2' />
                  <span><b>Precio:</b><br />
                    <b>Lunes a Jueves:</b> 85 €<br />
                    <b>Viernes a Domingos, Festivos y Vísperas de Festivos:</b> 100 €
                  </span>
                </li>
                <li className='flex items-center'>
                  <PiggyBank className='h-5 w-5 text-[#20c997] mr-2' />
                  <span><b>Fianza:</b> 75 €</span>
                </li>
              </ul>
              <Link
                to='/reservas'
                className='inline-block w-full text-center bg-[#20c997] hover:bg-[#1ba884] text-white font-bold py-3 px-8 rounded-full shadow-md transition-colors'
              >
                Reservar Horario Tarde
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Instalaciones */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-6'>
          <h2 className='text-4xl font-bold text-center mb-8 text-gray-800 flex items-center justify-center gap-3'>
            <Home className='h-8 w-8 text-[#20c997]' />
            Nuestras Instalaciones
          </h2>
          <div className='grid md:grid-cols-1 gap-8 max-w-4xl mx-auto'>
            <div className='flex items-start'>
              <Home className='h-6 w-6 text-[#20c997] mr-4' />
              <div>
                <h3 className='text-xl font-semibold text-gray-800'>Salón Climatizado</h3>
                <p className='text-gray-700'>Con capacidad para 60 personas, equipado con mesas, sillas y taburetes. Perfecto para cualquier tipo de celebración.</p>
              </div>
            </div>
            <div className='flex items-start'>
              <Activity className='h-6 w-6 text-[#20c997] mr-4' />
              <div>
                <h3 className='text-xl font-semibold text-gray-800'>Zona de Juegos Infantiles</h3>
                <p className='text-gray-700'>Parque de bolas de 40 m² con cama elástica, piscina de bolas con tobogán y dos niveles. Incluye una pista de fútbol infantil para jugar en un entorno seguro.</p>
              </div>
            </div>
            <div className='flex items-start'>
              <Baby className='h-6 w-6 text-[#20c997] mr-4' />
              <div>
                <h3 className='text-xl font-semibold text-gray-800'>Área para los Más Peques</h3>
                <p className='text-gray-700'>Espacio con cocinita, cochecitos y juguetes que estimulan la imaginación de los más chiquitines.</p>
              </div>
            </div>
            <div className='flex items-start'>
              <Gamepad className='h-6 w-6 text-[#20c997] mr-4' />
              <div>
                <h3 className='text-xl font-semibold text-gray-800'>Zona Gamer (Adolescentes y Adultos)</h3>
                <p className='text-gray-700'>Dos máquinas árcade con más de 3000 juegos clásicos, diana y futbolín. ¡Diversión asegurada para todas las edades!</p>
              </div>
            </div>
            <div className='flex items-start'>
              <Coffee className='h-6 w-6 text-[#20c997] mr-4' />
              <div>
                <h3 className='text-xl font-semibold text-gray-800'>Cocina Funcional</h3>
                <p className='text-gray-700'>Equipada con nevera, cafetera Dolce Gusto, microondas y botellero. Todo listo para preparar o conservar alimentos y bebidas durante el evento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Adicionales */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-6'>
          <h2 className='text-4xl font-bold text-center mb-8 text-gray-800'>Servicios Adicionales</h2>
          <div className='grid md:grid-cols-2 gap-8 max-w-2xl mx-auto'>
            <div className='flex items-start'>
              <Popcorn className='h-6 w-6 text-[#20c997] mr-4' />
              <div>
                <h3 className='text-xl font-semibold text-gray-800'>Máquina de Palomitas</h3>
                <p className='text-gray-700'>+10 € (Incluye 20 servicios)</p>
              </div>
            </div>
            <div className='flex items-start'>
              <Candy className='h-6 w-6 text-[#20c997] mr-4' />
              <div>
                <h3 className='text-xl font-semibold text-gray-800'>Máquina de Algodón de Azúcar</h3>
                <p className='text-gray-700'>+10 € (Incluye 20 servicios)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Packs;
