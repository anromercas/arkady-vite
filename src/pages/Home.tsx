import React from 'react';
import Services from './Services';
import { Link } from 'react-router-dom';
import Seo from '../seo/Seo';
import bgImage from '../assets/arkady-celebraciones-home.avif';
import { Star } from 'lucide-react';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Swiper modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { Autoplay } from 'swiper/modules/autoplay/autoplay.js';


function Home() {
  const testimonials = [
    {
      name: 'Carlos Prieto',
      rating: 5,
      comment: 'Sitio perfecto para celebraciones con familia y amigos. Espacio amplio, muy limpio y con zonas diferenciadas para que los niños jueguen sin agobios. Dispone de un parque de bolas con toboganes, porterías, obstáculos.. ideal para que se diviertan sin parar. También hay máquinas arcade que entretienen a todos y devuelven a la niñez a los adultos. Todo muy bien organizado.'
    },
    {
      name: 'Cristina Martino',
      rating: 5,
      comment: 'Un sitio donde vuelves a la infancia! No falta detalle, los niños disfrutan muchísimo, no se decirte quién disfruto más, si niños o adultos, no podria ponerle falta, un lugar con muy buena ubicación donde puedes aparcar sin problemas , con gran capacidad y diversión asegurada! Futbolin, máquinas arkadys que te llevarán a tu infancia, dardos, juegos varios, cocinitas, parque de bolas...sitio muy limpio con cocina y baño en perfecto estado, ya es el segundo evento al que voy y este próximo viernes tenenos otro en el mismo lugar , eso quiere decir que todo va genial! 🙂',
    },
    {
      name: 'Silvia Zoilo',
      rating: 5,
      comment: 'Local climatizado, bastante preparado para echar un rato con peques y no tan peques. Mi hija celebró allí su cumpleaños y todo genial y Jesús muy pendiente de que todo saliera bien. Muchas gracias y hasta la próxima 😊',
    },
    {
      name: 'Almu Suárez',
      rating: 5,
      comment: 'Una experiencia maravillosa, mi niño se lo pasó de lujo y el trato es espectacular. Las instalaciones estupendas y bastante aparcamiento por la zona. Un 10 😊',
    },
    {
      name: 'Rocío',
      rating: 5,
      comment: 'Un sitio genial para poder celebrar cualquier evento y que los niños disfruten jugando, también los adultos con el futbolín, dardos y máquinas de arkade con muchísima variedad en juegos, me encanta.'
    },
    {
      name: 'Mari Ángeles Vallejo',
      rating: 5,
      comment: 'Un lugar para celebrar los cumples de vuestr@s nenes al 100%. No le falta detalle. Todo muy limpio y organizado. Sobre todo el parquesito de bolas donde podrás ver a tus hijos jugar mientras tu también disfrutas con los demás. Destacar los frigoríficos y fregadero para poder tener todo lo que necesites de alimentos y bebidas frí@s. Muchísimas sillas y mesa para los invitados. Futbolin y maquinitas retros chulisimas. En resumen, no le falta de nada. No dudaré en aconsejar este sitio a mis allegados. ❤️'
    }
    
  ];
  return (
    <>
      <div className="pt-20">
        {/* Hero Section */}
        <header className="relative h-screen">
            <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
            >
            <div className="absolute inset-0 bg-black/50"></div>
            </div>

          <div className="relative z-10 container mx-auto px-6 h-[calc(100vh-80px)] flex items-center">
            <div className="max-w-2xl">
              <h1 className='text-l md:text-l font-bold text-white mb-6'>
                Local celebraciones Sevilla
              </h1>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Crea Recuerdos Inolvidables en Arkady
              </h2>
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
                  to="/tipos-de-reservas"
                  className="inline-block bg-white hover:text-white hover:bg-[#20c997] text-[#20c997] border-white font-bold py-3 px-8 rounded-full shadow-md transition-colors"
                >
                  Ver Tipos de Reservas
                </Link>
              </div>
            </div>
          </div>
        </header>

        <Services></Services>

       {/* Testimonials Carousel */}
      <section className="bg-gradient-to-b from-[#20c997]/5 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Lo que Dicen Nuestros Clientes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Miles de clientes felices nos avalan
            </p>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-gray-50 p-8 rounded-xl h-full flex flex-col justify-between">
                  <div>
                    <div className="flex mb-4">
                      {[...Array(t.rating)].map((_, idx) => (
                        <Star key={idx} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">“{t.comment}”</p>
                  </div>
                  {t.name && <div className="font-semibold text-gray-800 mt-4">{t.name}</div>}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

        <div className="bg-[#FEE75C] py-20 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            ¿Listo para celebrar?
          </h2>
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
      <Seo
        title={'Local celebraciones Sevilla | Arkady celebraciones'}
        description={'Alquila un local con parque de bolas, cocina equipada y zona infantil para cumpleaños y fiestas en Sevilla. Reserva online fácil y rápida.'}
        keywords={'local celebraciones sevilla, parque de bolas Sevilla, cumpleaños Sevilla, cumpleaños infantil Sevilla, comuniones Sevilla'}
      />
    </>
  );
}

export default Home;