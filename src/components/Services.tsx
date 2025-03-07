import React from 'react';
import { Star, Users, Cake, Music, Gift, ChefHat } from 'lucide-react';

function Services() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-[#20c997]/10 to-white hero-pattern">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              ¿Por qué elegir Arkady?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ofrecemos experiencias únicas y personalizadas para que cada
              celebración sea especial
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#20c997]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-[#20c997]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cumpleaños</h3>
              <p className="text-gray-600">
                🎉 Celebra el cumpleaños de tu hijo/a en Family Park 🎉 Un
                espacio lleno de diversión donde los niños podrán disfrutar de
                todas las atracciones del parque rodeados de amigos y
                familiares. ¡Un cumpleaños inolvidable en un entorno seguro y
                exclusivo!
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#20c997]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-[#20c997]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Comuniones</h3>
              <p className="text-gray-600">
                🎈 Fiestas de Primera Comunión llenas de diversión 🎈 Haz de
                este día un recuerdo especial con actividades emocionantes en
                nuestro parque infantil privado. Los niños se lo pasarán en
                grande mientras celebran un momento tan importante en sus vidas.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#20c997]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cake className="h-8 w-8 text-[#20c997]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Fiestas temáticas</h3>
              <p className="text-gray-600">
                🎭 Fiestas temáticas para los más pequeños 🎭 Superhéroes,
                princesas, piratas y mucho más. Decora el parque con la temática
                elegida y deja que los niños se sumerjan en un mundo de fantasía
                y aventuras.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#20c997]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cake className="h-8 w-8 text-[#20c997]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Reuniones familiares
              </h3>
              <p className="text-gray-600">
                👨‍👩‍👧‍👦 Reuniones familiares en un ambiente especial 👨‍👩‍👧‍👦 Disfruta de
                un día único en Family Park, donde los niños se divierten
                mientras los adultos disfrutan de un espacio acogedor y seguro.
                ¡Juega, comparte y crea recuerdos inolvidables!
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#20c997]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cake className="h-8 w-8 text-[#20c997]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Reuniones juveniles
              </h3>
              <p className="text-gray-600">
                🎮 ¡Reunión épica de jóvenes en Family Park! 🎮 PlayStation,
                máquina arcade y futbolín en un espacio privado solo para
                vosotros. ¡Risas, competencia y pura diversión garantizada!
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[#20c997]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cake className="h-8 w-8 text-[#20c997]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Baby shower</h3>
              <p className="text-gray-600">
                🤰 Un Baby Shower único y especial Reserva nuestro parque
                infantil en exclusiva y celebra este momento tan especial
                rodeada de tus seres queridos. Un ambiente acogedor y
                completamente equipado para una celebración inolvidable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
