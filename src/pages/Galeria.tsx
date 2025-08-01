import React, { useState, useEffect, useCallback } from 'react';
import instalacion1 from '../assets/galeria/arkadycelebraciones-1.jpeg';
import instalacion2 from '../assets/galeria/arkadycelebraciones-2.jpeg';
import instalacion3 from '../assets/galeria/arkadycelebraciones-3.jpeg';
import instalacion4 from '../assets/galeria/arkadycelebraciones-4.jpeg';
import instalacion5 from '../assets/galeria/arkadycelebraciones-5.jpeg';
import instalacion6 from '../assets/galeria/arkadycelebraciones-6.jpeg';
import instalacion7 from '../assets/galeria/arkadycelebraciones-7.jpeg';
import instalacion8 from '../assets/galeria/arkadycelebraciones-8.jpeg';
import instalacion9 from '../assets/galeria/arkadycelebraciones-9.jpeg';
import instalacion10 from '../assets/galeria/arkadycelebraciones-10.jpeg';
import instalacion11 from '../assets/galeria/arkadycelebraciones-11.jpeg';
import instalacion12 from '../assets/galeria/arkadycelebraciones-12.jpeg';
import instalacion13 from '../assets/galeria/arkadycelebraciones-13.jpeg';
import instalacion14 from '../assets/galeria/arkadycelebraciones-14.jpeg';
import instalacion15 from '../assets/galeria/arkadycelebraciones-15.jpeg';
import instalacion16 from '../assets/galeria/arkadycelebraciones-16.jpeg';
import instalacion17 from '../assets/galeria/arkadycelebraciones-17.jpeg';
import instalacion18 from '../assets/galeria/arkadycelebraciones-18.jpeg';
import instalacion19 from '../assets/galeria/arkadycelebraciones-19.jpeg';
import instalacion20 from '../assets/galeria/arkadycelebraciones-20.jpeg';
import instalacion21 from '../assets/galeria/arkadycelebraciones-21.jpeg';
import instalacion22 from '../assets/galeria/arkadycelebraciones-22.jpeg';
import instalacion23 from '../assets/galeria/arkadycelebraciones-23.jpeg';
import instalacion24 from '../assets/galeria/arkadycelebraciones-24.jpeg';
import instalacion25 from '../assets/galeria/arkadycelebraciones-25.jpeg';
import instalacion26 from '../assets/galeria/arkadycelebraciones-26.jpeg';
import instalacion27 from '../assets/galeria/arkadycelebraciones-27.jpeg';
import instalacion28 from '../assets/galeria/arkadycelebraciones-28.jpeg';
import Seo from '../seo/Seo';

import {
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';


const imagenes = [
  { src: instalacion19, alt: 'cocina equipada 1' },
  { src: instalacion1, alt: 'cocina equipada 2' },
  { src: instalacion12, alt: 'cocina equipada 3' },
  { src: instalacion3, alt: 'cocina y parque de bolas 1' },
  { src: instalacion18, alt: 'cocina y parque de bolas 2' },
  { src: instalacion21, alt: 'cocina y parque de bolas 3' },
  { src: instalacion22, alt: 'local Arkady celebraciones 1' },
  { src: instalacion23, alt: 'local Arkady celebraciones 2' },
  { src: instalacion20, alt: 'parque de bolas y máquinas arcade 1' },
  { src: instalacion16, alt: 'maquinas arcade 1' },
  { src: instalacion17, alt: 'maquinas arcade 2' },
  { src: instalacion4, alt: 'parque de bolas y máquinas arcade 2' },
  { src: instalacion15, alt: 'asientos maquinas arcade' },
  { src: instalacion2, alt: 'local Arkady celebraciones 3' },
  { src: instalacion24, alt: 'futbolin 1' },
  { src: instalacion25, alt: 'local Arkady celebraciones 4' },
  { src: instalacion5, alt: 'parque de bolas 1' },
  { src: instalacion7, alt: 'cuarto de baño' },
  { src: instalacion8, alt: 'parque de bolas 2' },
  { src: instalacion9, alt: 'parque de bolas 3' },
  { src: instalacion10, alt: 'parque de bolas 4' },
  { src: instalacion11, alt: 'parque de bolas 5' },
  { src: instalacion26, alt: 'parque de bolas 6' },
  { src: instalacion27, alt: 'parque de bolas 7' },
  { src: instalacion28, alt: 'parque de bolas 8' },
  { src: instalacion13, alt: 'diana Arkady celebraciones' },
  { src: instalacion6, alt: 'alfombra infantil Arkady celebraciones' },
  { src: instalacion14, alt: 'zona de juegos infantil Arkady celebraciones' },

];

export default function Galeria() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const showPrev = useCallback(() => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex - 1 + imagenes.length) % imagenes.length);
  }, [currentIndex]);

  const showNext = useCallback(() => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex + 1) % imagenes.length);
  }, [currentIndex]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (currentIndex !== null) {
        if (e.key === 'ArrowLeft')   showPrev();
        if (e.key === 'ArrowRight')  showNext();
        if (e.key === 'Escape')      setCurrentIndex(null);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [currentIndex, showPrev, showNext]);

  return (
    <>
      <Seo
        title="Galería de local de celebraciones en Sevilla | Arkady"
        description="Mira cómo son nuestras instalaciones en Sevilla: parque de bolas, zona infantil, cocina y más. Imagina como se vería tu próximo evento"
        keywords="galería local celebraciones Sevilla, fotos local celebraciones Sevilla, imágenes cumpleaños infantiles, instalaciones Arkady"
      />

      <div className="py-8 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Galería de Instalaciones</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {imagenes.map((imagen, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setCurrentIndex(i)}
            >
              <img
                src={imagen.src}
                alt={imagen.alt}
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          {/* Botón cerrar (solo aquí) */}
          <button
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full"
            onClick={() => setCurrentIndex(null)}
            aria-label="Cerrar galería"
          >
            <X size={28} />
          </button>

          {/* Flecha anterior en el límite izquierdo */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 hover:bg-white/20 rounded-full"
            onClick={showPrev}
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={48} />
          </button>

          {/* Imagen */}
          <img
            src={imagenes[currentIndex].src}
            alt={imagenes[currentIndex].alt}
            className="max-h-[90vh] max-w-[80vw] rounded-lg shadow-xl"
          />

          {/* Flecha siguiente en el límite derecho */}
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 hover:bg-white/20 rounded-full"
            onClick={showNext}
            aria-label="Imagen siguiente"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </>
  );
}