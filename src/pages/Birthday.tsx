import React, { useState } from 'react';
import Seo from '../seo/Seo';
import { Link } from 'react-router-dom';

import { 
  Star, 
  Clock, 
  Users, 
  Gift, 
  Music, 
  Camera, 
  Cake,
  Heart,
  Sparkles,
  PartyPopper,
  ChevronRight,
  Check
} from 'lucide-react';

function BirthdayPage() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const packages = [
    {
      id: 'basic',
      name: 'Pack Básico',
      price: '150€',
      duration: '2 horas',
      children: 'Hasta 15 niños',
      features: [
        'Uso exclusivo del parque',
        'Animación básica',
        'Regalo para el cumpleañero',
        'Decoración temática básica',
        'Mesa para la tarta',
        'Limpieza incluida'
      ],
      color: 'bg-blue-500',
      popular: false
    },
    {
      id: 'premium',
      name: 'Pack Premium',
      price: '250€',
      duration: '3 horas',
      children: 'Hasta 25 niños',
      features: [
        'Todo lo del Pack Básico',
        'Animación premium con personajes',
        'Regalos para todos los niños',
        'Decoración temática completa',
        'Catering básico incluido',
        'Sesión de fotos',
        'Música personalizada',
        'Juegos organizados'
      ],
      color: 'bg-[#20c997]',
      popular: true
    },
    {
      id: 'deluxe',
      name: 'Pack Deluxe',
      price: '350€',
      duration: '4 horas',
      children: 'Hasta 40 niños',
      features: [
        'Todo lo del Pack Premium',
        'Animación personalizada VIP',
        'Catering premium',
        'Tarta personalizada incluida',
        'Fotógrafo profesional',
        'Video resumen del evento',
        'Regalos premium',
        'Coordinador de eventos',
        'Decoración luxury'
      ],
      color: 'bg-purple-600',
      popular: false
    }
  ];

  const themes = [
    { name: 'Superhéroes', image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Princesas', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Piratas', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Unicornios', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Dinosaurios', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Frozen', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
  ];

  return (
      <>
          <Seo
              title={'Cumpleaños en Arkady - Local de celebraciones en Sevilla'}
              description={'Celebra el cumpleaños de tu hijo/a en Arkady, un espacio privado con parque de bolas en Sevilla. Diversión asegurada para niños y tranquilidad para adultos.'}
              keywords={'local de celebraciones en sevilla, parque de bolas Sevilla, cumpleaños Sevilla, cumpleaños infantil, comuniones Sevilla'} />
          <div className="pt-20">
              {/* Hero Section */}
              <section className="relative h-[70vh] overflow-hidden">
                  <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                          backgroundImage: "url('https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
                      }}
                  >
                      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
                  </div>

                  <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
                      <div className="max-w-3xl">
                          <div className="flex items-center mb-4">
                              <PartyPopper className="h-8 w-8 text-[#20c997] mr-3" />
                              <span className="text-[#20c997] font-semibold text-lg">Cumpleaños Inolvidables</span>
                          </div>
                          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                              Celebra el Cumpleaños Perfecto en Arkady
                          </h1>
                          <p className="text-xl text-white/90 mb-8 leading-relaxed">
                              Convierte el día especial de tu hijo en una experiencia mágica llena de diversión,
                              risas y recuerdos que durarán para siempre en nuestro parque exclusivo.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-4">
                              <Link
                                  to='/reservas'
                                  className='inline-block w-full text-center bg-[#20c997] hover:bg-[#1ba884] text-white font-bold py-3 px-8 rounded-full shadow-md transition-colors'
                              >
                                  Reservar Ahora
                              </Link>
                             <Link
                                  to='/tipos-de-reservas'
                                  className='inline-block w-full text-center bg-white hover:text-white hover:bg-[#20c997] text-[#20c997] border-white font-bold py-3 px-8 rounded-full shadow-md transition-colors'
                              >
                                  Ver Tipos de Reservas
                              </Link>
                          </div>
                      </div>
                  </div>
              </section>

              {/* Features Section */}
              <section className="py-20 bg-white">
                  <div className="container mx-auto px-6">
                      <div className="text-center mb-16">
                          <h2 className="text-4xl font-bold text-gray-800 mb-4">
                              ¿Por qué elegir Arkady para el cumpleaños?
                          </h2>
                          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                              Ofrecemos una experiencia completa y personalizada que hará que este día sea verdaderamente especial
                          </p>
                      </div>

                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                          <div className="text-center group">
                              <div className="bg-[#20c997]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#20c997]/20 transition-colors">
                                  <Sparkles className="h-10 w-10 text-[#20c997]" />
                              </div>
                              <h3 className="text-xl font-semibold mb-3">Parque Exclusivo</h3>
                              <p className="text-gray-600">
                                  Disfruta del parque completo solo para tu celebración, sin aglomeraciones ni esperas.
                              </p>
                          </div>

                          <div className="text-center group">
                              <div className="bg-[#20c997]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#20c997]/20 transition-colors">
                                  <Music className="h-10 w-10 text-[#20c997]" />
                              </div>
                              <h3 className="text-xl font-semibold mb-3">Animación Profesional</h3>
                              <p className="text-gray-600">
                                  Animadores expertos que harán que todos los niños participen y se diviertan al máximo.
                              </p>
                          </div>

                          <div className="text-center group">
                              <div className="bg-[#20c997]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#20c997]/20 transition-colors">
                                  <Camera className="h-10 w-10 text-[#20c997]" />
                              </div>
                              <h3 className="text-xl font-semibold mb-3">Recuerdos Eternos</h3>
                              <p className="text-gray-600">
                                  Sesión de fotos profesional incluida para capturar todos los momentos especiales.
                              </p>
                          </div>

                          <div className="text-center group">
                              <div className="bg-[#20c997]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#20c997]/20 transition-colors">
                                  <Heart className="h-10 w-10 text-[#20c997]" />
                              </div>
                              <h3 className="text-xl font-semibold mb-3">Sin Estrés</h3>
                              <p className="text-gray-600">
                                  Nos encargamos de todo: decoración, limpieza y organización. Tú solo disfruta.
                              </p>
                          </div>
                      </div>
                  </div>
              </section>

              {/* Packages Section */}
              {/* <section id="packages" className="py-20 bg-gradient-to-b from-gray-50 to-white">
                  <div className="container mx-auto px-6">
                      <div className="text-center mb-16">
                          <h2 className="text-4xl font-bold text-gray-800 mb-4">
                              Elige tu Pack de Cumpleaños
                          </h2>
                          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                              Tenemos el pack perfecto para cada celebración, adaptado a tus necesidades y presupuesto
                          </p>
                      </div>

                      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                          {packages.map((pkg) => (
                              <div
                                  key={pkg.id}
                                  className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${pkg.popular ? 'ring-4 ring-[#20c997]/20 scale-105' : ''
                                      }`}
                              >
                                  {pkg.popular && (
                                      <div className="absolute top-0 left-0 right-0 bg-[#20c997] text-white text-center py-2 font-semibold">
                                          ⭐ Más Popular
                                      </div>
                                  )}

                                  <div className={`h-2 ${pkg.color}`}></div>

                                  <div className="p-8">
                                      <div className="text-center mb-8">
                                          <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                                          <div className="text-4xl font-bold text-[#20c997] mb-4">{pkg.price}</div>
                                          <div className="flex justify-center gap-4 text-sm text-gray-600">
                                              <div className="flex items-center">
                                                  <Clock className="h-4 w-4 mr-1" />
                                                  {pkg.duration}
                                              </div>
                                              <div className="flex items-center">
                                                  <Users className="h-4 w-4 mr-1" />
                                                  {pkg.children}
                                              </div>
                                          </div>
                                      </div>

                                      <ul className="space-y-3 mb-8">
                                          {pkg.features.map((feature, index) => (
                                              <li key={index} className="flex items-start">
                                                  <Check className="h-5 w-5 text-[#20c997] mr-3 mt-0.5 flex-shrink-0" />
                                                  <span className="text-gray-700">{feature}</span>
                                              </li>
                                          ))}
                                      </ul>

                                      <Button
                                          className={`w-full ${pkg.popular ? 'bg-[#20c997] hover:bg-[#1ba884]' : 'bg-gray-800 hover:bg-gray-700'} text-white`}
                                          onClick={() => {
                                              setSelectedPackage(pkg.id);
                                              window.location.href = '/reservas';
                                          }}
                                      >
                                          Seleccionar {pkg.name}
                                      </Button>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </section> */}

              {/* Themes Section */}
              <section className="py-20 bg-white">
                  <div className="container mx-auto px-6">
                      <div className="text-center mb-16">
                          <h2 className="text-4xl font-bold text-gray-800 mb-4">
                              Temáticas Disponibles
                          </h2>
                          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                              Elige la temática favorita del cumpleañero y transformaremos el parque en su mundo de fantasía
                          </p>
                      </div>

                      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
                          {themes.map((theme, index) => (
                              <div
                                  key={index}
                                  className="group cursor-pointer"
                              >
                                  <div className="relative overflow-hidden rounded-xl aspect-square mb-4">
                                      <img
                                          src={theme.image}
                                          alt={theme.name}
                                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                      <div className="absolute bottom-4 left-4 right-4">
                                          <h3 className="text-white font-semibold text-lg">{theme.name}</h3>
                                      </div>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </section>

              {/* Process Section */}
              <section className="py-20 bg-[#20c997]/5">
                  <div className="container mx-auto px-6">
                      <div className="text-center mb-16">
                          <h2 className="text-4xl font-bold text-gray-800 mb-4">
                              Cómo Organizamos tu Cumpleaños
                          </h2>
                          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                              Un proceso simple y sin complicaciones para garantizar que todo salga perfecto
                          </p>
                      </div>

                      <div className="grid md:grid-cols-4 gap-8">
                          <div className="text-center">
                              <div className="bg-[#20c997] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                                  1
                              </div>
                              <h3 className="text-xl font-semibold mb-3">Reserva</h3>
                              <p className="text-gray-600">
                                  Elige tu fecha, pack y temática favorita a través de nuestro sistema de reservas online.
                              </p>
                          </div>

                          <div className="text-center">
                              <div className="bg-[#20c997] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                                  2
                              </div>
                              <h3 className="text-xl font-semibold mb-3">Planificación</h3>
                              <p className="text-gray-600">
                                  Nuestro equipo se pone en contacto contigo para personalizar todos los detalles.
                              </p>
                          </div>

                          <div className="text-center">
                              <div className="bg-[#20c997] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                                  3
                              </div>
                              <h3 className="text-xl font-semibold mb-3">Preparación</h3>
                              <p className="text-gray-600">
                                  Decoramos el parque con la temática elegida y preparamos todas las actividades.
                              </p>
                          </div>

                          <div className="text-center">
                              <div className="bg-[#20c997] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                                  4
                              </div>
                              <h3 className="text-xl font-semibold mb-3">¡A Celebrar!</h3>
                              <p className="text-gray-600">
                                  Llega y disfruta. Nosotros nos encargamos de que todo sea perfecto.
                              </p>
                          </div>
                      </div>
                  </div>
              </section>

             

              {/* CTA Section */}
              <section className="py-20 bg-gradient-to-t from-[#dbf9f0] to-[#20c997]">
                  <div className="container mx-auto px-6 text-center">
                      <div className="max-w-3xl mx-auto">
                          <Cake className="h-16 w-16 text-white mx-auto mb-6" />
                          <h2 className="text-4xl font-bold text-white mb-6">
                              ¿Listo para Crear Recuerdos Inolvidables?
                          </h2>
                          <p className="text-xl text-white/90 mb-8">
                              No esperes más. Las fechas se agotan rápidamente, especialmente los fines de semana.
                          </p>
                          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                              <Link
                                  to='/reservas'
                                   className="inline-block bg-white hover:text-white hover:bg-[#20c997] text-[#20c997] border-white font-bold py-3 px-8 rounded-full shadow-md transition-colors"
                              >
                                  Reservar Ahora
                              </Link>
                              <Link
                                  to='/contacto'
                                  className="inline-block bg-white hover:text-white hover:bg-[#20c997] text-[#20c997] border-white font-bold py-3 px-8 rounded-full shadow-md transition-colors"
                              >
                                  ¡Contacta con nosotros!
                              </Link>
                          </div>
                      </div>
                  </div>
              </section>
          </div>
      </>
  );
}

export default BirthdayPage;
