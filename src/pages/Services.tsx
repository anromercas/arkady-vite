import React from 'react';
import { Cake, Cross, Drama, UsersRound, Baby, GraduationCap } from 'lucide-react';
import Seo from '../seo/Seo';

function Services() {
  return (
    <>
      <Seo
        title="Servicios de Celebración en Sevilla | Parque de Bolas, Cocina, Zona Gamer"
        description="Descubre todos los servicios de Arkady: parque de bolas, cocina equipada, zona gamer, futbolín, zona infantil y más. Ideal para todas las edades."
        keywords="servicios cumpleaños Sevilla, parque bolas Sevilla, cocina equipada, zona infantil, futbolín Sevilla, alquiler local fiestas"
      />
      <div className="pt-20">
        <section className="py-20 bg-gradient-to-b from-[#20c997]/10 to-white hero-pattern">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                ¿Por qué elegir Arkady?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                En Arkady Celebraciones te ofrecemos <b>experiencias únicas y personalizadas</b>, para que cada evento sea verdaderamente especial. Nuestro espacio está diseñado para adaptarse a todo tipo de celebraciones, siempre en un entorno <b>seguro, exclusivo y lleno de diversión</b>.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-[#20c997]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Cake className="h-8 w-8 text-[#20c997]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Cumpleaños Infantiles</h3>
                <p className="text-gray-600">
                  <b className="text-l text-[#20c997] font-semibold mb-4"> 🎉 ¡Haz que el cumpleaños de tu hijo/a sea inolvidable! 🎉 </b>
                  < br />
                  Un espacio lleno de juegos, alegría y emoción, donde los peques podrán disfrutar de todas las atracciones del parque acompañados de amigos y familiares.
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-[#20c997]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Cross className="h-8 w-8 text-[#20c997]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Comuniones</h3>
                <p className="text-gray-600">
                  <b className="text-l text-[#20c997] font-semibold mb-4">🎈 Celebra este momento tan especial con una fiesta a lo grande. 🎈 </ b>
                  < br />
                  Ofrecemos un entorno privado con actividades emocionantes, donde los niños vivirán un día único lleno de diversión y buenos recuerdos.
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-[#20c997]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Drama className="h-8 w-8 text-[#20c997]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Fiestas Temáticas</h3>
                <p className="text-gray-600">
                  <b className="text-l text-[#20c997] font-semibold mb-4"> 🎭 Superhéroes, princesas, piratas... ¡lo que imagines! 🎭 </b>
                  < br />
                  Decora el espacio con la temática que más te guste y deja que los niños se sumerjan en un mundo de fantasía y aventuras.
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-[#20c997]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <UsersRound className="h-8 w-8 text-[#20c997]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Reuniones Familiares
                </h3>
                <p className="text-gray-600">
                  <b className="text-l text-[#20c997] font-semibold mb-4">👨‍👩‍👧‍👦 Un punto de encuentro ideal para todas las edades. 👨‍👩‍👧‍👦 </b>
                  < br />
                  Mientras los niños se entretienen en las zonas de juego, los adultos pueden disfrutar de un ambiente cómodo y acogedor. ¡Diversión y tranquilidad para todos!
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-[#20c997]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="h-8 w-8 text-[#20c997]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Reuniones Juveniles
                </h3>
                <p className="text-gray-600">
                  <b className="text-l text-[#20c997] font-semibold mb-4">🎮 Una sala solo para vosotros, sin interrupciones. 🎮 </b>
                  < br />
                  Máquinas arcade, futbolín, diana... Perfecto para tardes de risas, pique sano y mucha diversión entre amigos.
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-[#20c997]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Baby className="h-8 w-8 text-[#20c997]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Baby Showers</h3>
                <p className="text-gray-600">
                  <b className="text-l text-[#20c997] font-semibold mb-4">🤰 Celebra la llegada del nuevo miembro de la familia en un entorno íntimo y cuidado. 🤰 </b>
                  < br />
                  Dispondrás del parque en exclusiva, con todo lo necesario para disfrutar de una celebración cálida, emotiva y llena de detalles.
                </p>
              </div>
            </div>
            <div className="text-center mb-16 mt-20">
              <p className="text-gray-600 max-w-2xl mx-auto mb-4">
                En <b>Arkady Celebraciones</b> nos volcamos en que cada evento sea una experiencia única, fácil de organizar y ¡difícil de olvidar!
              </p>
              <h2 className="text-4xl font-bold text-gray-800">
                ¿Te vienes?
              </h2>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Services;
