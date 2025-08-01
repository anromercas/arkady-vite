import React from 'react';
import { Users, Heart, Star } from 'lucide-react';
import instalacion20 from '../assets/galeria/arkadycelebraciones-20.jpeg';
import instalacion11 from '../assets/galeria/arkadycelebraciones-11.jpeg';
import instalacion16 from '../assets/galeria/arkadycelebraciones-16.jpeg';
import instalacion19 from '../assets/galeria/arkadycelebraciones-19.jpeg';
import instalacion18 from '../assets/galeria/arkadycelebraciones-18.jpeg';
import instalacion14 from '../assets/galeria/arkadycelebraciones-14.jpeg';
import instalacion24 from '../assets/galeria/arkadycelebraciones-24.jpeg';

import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="pt-10 pb-5 bg-gradient-to-b from-[#20c997]/10 to-white hero-pattern">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              En Arkady Celebraciones, creamos momentos mágicos y recuerdos inolvidables 
              para toda la familia.
            </p>
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Nuestra Historia
              </h2>
              <p className="text-gray-600 mb-6">
                Arkady Celebraciones nació en 2025 con un sueño: crear un espacio único 
                donde las familias pudieran celebrar los momentos más especiales de sus vidas. 
                Lo que comenzó como un pequeño local familiar se ha convertido en el centro 
                de celebraciones infantiles más querido de Sevilla.
              </p>
              <p className="text-gray-600 mb-6">
                Desde nuestro inicio en Mayo de 2025, hemos podido ver celebraciones de todo tipo en nuestras instalaciones, 
                siempre manteniendo nuestro compromiso con la calidad, la seguridad 
                y la diversión de los más pequeños.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-[#20c997]/10 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-[#20c997]" />
                </div>
                <span className="text-gray-700 font-semibold">
                  Cada día creando sonrisas
                </span>
              </div>
            </div>
            <div className="relative">
              <img 
                src={instalacion20} 
                alt="máquinas arcade" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#20c997] text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">Contamos con:</div>
                <div className="text-sm">Máquinas Arcade, Futbolín y Parque de Bolas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Valores */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nuestra Misión y Valores
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              Entendemos lo importante que es contar con un local de celebraciones en Sevilla donde niños y adultos puedan disfrutar sin preocupaciones. Por eso, hemos creado un espacio privado y climatizado ideal para eventos infantiles, reuniones familiares y fiestas con amigos. Un lugar donde jugar, compartir y crear recuerdos inolvidables en un entorno seguro y acogedor.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="bg-[#20c997]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-[#20c997]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Pasión</h3>
              <p className="text-gray-600">
                En Arkady vivimos cada celebración como si fuera única. Ponemos pasión en cada detalle para que tu evento familiar o infantil en Sevilla sea inolvidable.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="bg-[#20c997]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-[#20c997]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Calidad</h3>
              <p className="text-gray-600">
                Nuestro local de celebraciones en Sevilla está equipado con materiales de primera calidad. Seguridad, limpieza y diversión garantizadas en cada fiesta.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="bg-[#20c997]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-[#20c997]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Familia</h3>
              <p className="text-gray-600">
                Sabemos lo que buscan las familias: confianza, cercanía y libertad. En nuestro espacio privado para celebraciones en Sevilla, te sentirás como en casa.
              </p>
            </div>
          </div>

          <div className="bg-[#20c997] text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">¡Reserva con Nosotros!</h3>
            <p className="pb-10 text-lg max-w-3xl mx-auto">
              Crear experiencias únicas e inolvidables que fortalezcan los lazos familiares 
              y generen recuerdos que perduren toda la vida, en un ambiente seguro, 
              divertido y lleno de magia.
            </p>
            <Link
              to="/reservas/"
              className="inline-block bg-white hover:text-white hover:bg-[#1ba884] text-[#20c997] hover:text-white border-white font-bold py-3 px-8 rounded-full shadow-md transition-colors"
            >
              Reservar Ahora
            </Link>
          </div>
        </div>
      </section>

      {/* Nuestras instalaciones */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nuestras Instalaciones
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre el interior de nuestras instalaciones, un local para celebraciones en Sevilla equipado para que tanto niños como adultos vivan una experiencia única. Nuestro espacio está diseñado para el juego, la comodidad y la diversión familiar, en un entorno totalmente privado, seguro y climatizado.
            </p>
            <p>
              🎈 ¡Mira lo que te espera al reservar tu evento con nosotros! 🎈
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src={instalacion11} 
                alt="parque de bolas" 
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />
              <h3 className="text-xl font-semibold mb-2">Parque de bolas infantil</h3>
              {/* <p className="text-[#20c997] font-medium mb-3">Fundadora y Directora</p> */}
              <p className="text-gray-600">
                Un parque de bolas de 40 m² con cama elástica, tobogán, piscina de bolas y pista de fútbol infantil. Ideal para cumpleaños infantiles en Sevilla. ¡Diversión asegurada para los más pequeños!
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src={instalacion16}  
                alt="maquinas arcade" 
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />
              <h3 className="text-xl font-semibold mb-2">Zona arcade y entretenimiento para adolescentes</h3>
              {/* <p className="text-[#20c997] font-medium mb-3">Coordinador de Eventos</p> */}
              <p className="text-gray-600">
                Dos máquinas arcade con más de 3000 juegos clásicos, diana y futbolín. La zona favorita para fiestas juveniles, reuniones familiares o celebraciones entre amigos en Sevilla.
              </p>
            </div>

            <div className="text-center">
              <img 
                src={instalacion24}  
                alt="maquinas arcade" 
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />
              <h3 className="text-xl font-semibold mb-2">Futbolín para todas las edades</h3>
              {/* <p className="text-[#20c997] font-medium mb-3">Coordinador de Eventos</p> */}
              <p className="text-gray-600">
                Nuestro futbolín es uno de los grandes protagonistas en cada celebración. Perfecto para que niños, jóvenes y adultos compitan y se diviertan juntos. Una actividad estrella en cualquier evento familiar o cumpleaños infantil en Sevilla.
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src={instalacion19} 
                alt="María González" 
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />
              <h3 className="text-xl font-semibold mb-2">Cocina equipada</h3>
              {/* <p className="text-[#20c997] font-medium mb-3">Animadora Principal</p> */}
              <p className="text-gray-600">
                Nevera, microondas, cafetera Dolce Gusto y botellero. Todo listo para que puedas organizar tu evento familiar en Sevilla sin preocuparte por nada.
              </p>
            </div>

            <div className="text-center">
              <img 
                src={instalacion18} 
                alt="salón climatizado" 
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />
              <h3 className="text-xl font-semibold mb-2">Salón climatizado y zona de mesas</h3>
              {/* <p className="text-[#20c997] font-medium mb-3">Animadora Principal</p> */}
              <p className="text-gray-600">
                Amplio salón con capacidad para 60 personas. Espacio cómodo, acogedor y decorado con estilo retro. Ideal para celebraciones privadas en Sevilla.
              </p>
            </div>

            <div className="text-center">
              <img 
                src={instalacion14} 
                alt="juguetes infantiles" 
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />
              <h3 className="text-xl font-semibold mb-2">Zona para los más pequeños</h3>
              {/* <p className="text-[#20c997] font-medium mb-3">Animadora Principal</p> */}
              <p className="text-gray-600">
                Juguetes didácticos, cocinita y cochecitos pensados para bebés y niños menores de 4 años. Un rincón tranquilo y seguro para las familias con peques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-20 bg-[#20c997] text-white text-center">
        <div className="container mx-auto px-6">
           <h3 className="text-2xl font-bold mb-4">Si tienes alguna duda puedes contactar con nosotros!</h3>
            <p className="pb-10 text-lg max-w-3xl mx-auto">
              ¿Tienes dudas o quieres más información sobre nuestro local de celebraciones en Sevilla?
              Estamos aquí para ayudarte. Escríbenos y planifica tu evento con total confianza.
            </p>
            <Link
              to="/contacto/"
              title="Contactar con Arkady Celebraciones en Sevilla"
              aria-label="Ir a la página de contacto de Arkady Celebraciones"
              className="inline-block bg-white hover:text-white hover:bg-[#1ba884] text-[#20c997] hover:text-white border-white font-bold py-3 px-8 rounded-full shadow-md transition-colors"
            >
              Contacta!
            </Link>
          {/* <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">Espacio privado</div>
              <div className="text-lg">Sin compartir con desconocidos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Celebraciones personalizadas</div>
              <div className="text-lg">Tú eliges la temática y decoración</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Ambiente retro único</div>
              <div className="text-lg">Inspirado en los años 80 y 90</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Ubicados en Sevilla</div>
              <div className="text-lg">En el barrio Cerro del Águila</div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Certificaciones y Reconocimientos */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Certificaciones y Reconocimientos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nuestro compromiso con la excelencia nos ha llevado a obtener 
              importantes reconocimientos en el sector.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="bg-[#20c997]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-[#20c997]" />
              </div>
              <h3 className="font-semibold mb-2">Certificado de Seguridad</h3>
              <p className="text-sm text-gray-600">Instalaciones certificadas por la Junta de Andalucía</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="bg-[#20c997]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-[#20c997]" />
              </div>
              <h3 className="font-semibold mb-2">Premio Excelencia</h3>
              <p className="text-sm text-gray-600">Mejor centro de ocio infantil 2023</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="bg-[#20c997]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#20c997]" />
              </div>
              <h3 className="font-semibold mb-2">Certificado Familiar</h3>
              <p className="text-sm text-gray-600">Empresa comprometida con las familias</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="bg-[#20c997]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-[#20c997]" />
              </div>
              <h3 className="font-semibold mb-2">ISO 9001</h3>
              <p className="text-sm text-gray-600">Gestión de calidad certificada</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Ubicación */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Nuestra Ubicación
              </h2>
              <div className="flex items-start space-x-4 mb-6">
                <MapPin className="h-6 w-6 text-[#20c997] mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Dirección</h3>
                  <p className="text-gray-600">
                    Calle Águila Perdicera 9, local 5<br />
                    41013 Sevilla, España
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 mb-6">
                <Clock className="h-6 w-6 text-[#20c997] mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Horarios</h3>
                  <p className="text-gray-600">
                    Lunes a Viernes: 10:00 - 20:00<br />
                    Sábados: 10:00 - 22:00<br />
                    Domingos: 11:00 - 20:00
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                Ubicados en el corazón de Sevilla, nuestras instalaciones de 300m² 
                están diseñadas especialmente para la diversión y seguridad de los niños, 
                con fácil acceso y aparcamiento disponible.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Instalaciones Arkady" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">300m² de diversión</h3>
                <p>Instalaciones modernas y seguras</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default About;