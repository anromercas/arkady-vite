import React from 'react';
import { Users, Heart, Star, Award, Clock, MapPin } from 'lucide-react';
import instalacion20 from '../assets/galeria/arkadycelebraciones-20.jpeg';

function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-[#20c997]/10 to-white hero-pattern">
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
      <section className="py-20 bg-white">
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
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nos guiamos por valores sólidos que nos permiten ofrecer 
              la mejor experiencia a nuestras familias.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="bg-[#20c997]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-[#20c997]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Pasión</h3>
              <p className="text-gray-600">
                Amamos lo que hacemos y se nota en cada detalle de nuestras celebraciones.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="bg-[#20c997]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-[#20c997]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Calidad</h3>
              <p className="text-gray-600">
                Utilizamos los mejores materiales y equipos para garantizar la seguridad y diversión.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="bg-[#20c997]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-[#20c997]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Familia</h3>
              <p className="text-gray-600">
                Tratamos a cada familia como si fuera la nuestra, con cariño y dedicación.
              </p>
            </div>
          </div>

          <div className="bg-[#20c997] text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
            <p className="text-lg max-w-3xl mx-auto">
              "Crear experiencias únicas e inolvidables que fortalezcan los lazos familiares 
              y generen recuerdos que perduren toda la vida, en un ambiente seguro, 
              divertido y lleno de magia."
            </p>
          </div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un equipo profesional y apasionado dedicado a hacer realidad 
              las celebraciones de tus sueños.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Ana Romero" 
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />
              <h3 className="text-xl font-semibold mb-2">Ana Romero</h3>
              <p className="text-[#20c997] font-medium mb-3">Fundadora y Directora</p>
              <p className="text-gray-600">
                Con más de 15 años de experiencia en eventos infantiles, 
                Ana es el corazón de Arkady Celebraciones.
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Carlos Martín" 
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />
              <h3 className="text-xl font-semibold mb-2">Carlos Martín</h3>
              <p className="text-[#20c997] font-medium mb-3">Coordinador de Eventos</p>
              <p className="text-gray-600">
                Especialista en logística y coordinación, Carlos se asegura 
                de que cada evento sea perfecto.
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="María González" 
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />
              <h3 className="text-xl font-semibold mb-2">María González</h3>
              <p className="text-[#20c997] font-medium mb-3">Animadora Principal</p>
              <p className="text-gray-600">
                Experta en entretenimiento infantil, María hace que cada 
                celebración sea mágica y divertida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-20 bg-[#20c997] text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-lg">Años de experiencia</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-lg">Celebraciones realizadas</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15,000+</div>
              <div className="text-lg">Niños felices</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-lg">Satisfacción de clientes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificaciones y Reconocimientos */}
      <section className="py-20 bg-gray-50">
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
      </section>

      {/* Ubicación */}
      <section className="py-20 bg-white">
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
      </section>
    </div>
  );
}

export default About;