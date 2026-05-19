import React, { useState, useEffect, useCallback, useRef } from 'react';
import videoReapertura from '../assets/galeria/arkady-reapertura-2026.mp4';
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
  Play,
} from 'lucide-react';

type MediaItem =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; alt: string };

const imagenes: MediaItem[] = [
  { type: 'video', src: videoReapertura, alt: 'Vídeo reapertura Arkady 2026' },
  { type: 'image', src: instalacion19, alt: 'cocina equipada 1' },
  { type: 'image', src: instalacion1, alt: 'cocina equipada 2' },
  { type: 'image', src: instalacion12, alt: 'cocina equipada 3' },
  { type: 'image', src: instalacion3, alt: 'cocina y parque de bolas 1' },
  { type: 'image', src: instalacion18, alt: 'cocina y parque de bolas 2' },
  { type: 'image', src: instalacion21, alt: 'cocina y parque de bolas 3' },
  { type: 'image', src: instalacion22, alt: 'local Arkady celebraciones 1' },
  { type: 'image', src: instalacion23, alt: 'local Arkady celebraciones 2' },
  { type: 'image', src: instalacion20, alt: 'parque de bolas y máquinas arcade 1' },
  { type: 'image', src: instalacion16, alt: 'maquinas arcade 1' },
  { type: 'image', src: instalacion17, alt: 'maquinas arcade 2' },
  { type: 'image', src: instalacion4, alt: 'parque de bolas y máquinas arcade 2' },
  { type: 'image', src: instalacion15, alt: 'asientos maquinas arcade' },
  { type: 'image', src: instalacion2, alt: 'local Arkady celebraciones 3' },
  { type: 'image', src: instalacion24, alt: 'futbolin 1' },
  { type: 'image', src: instalacion25, alt: 'local Arkady celebraciones 4' },
  { type: 'image', src: instalacion5, alt: 'parque de bolas 1' },
  { type: 'image', src: instalacion7, alt: 'cuarto de baño' },
  { type: 'image', src: instalacion8, alt: 'parque de bolas 2' },
  { type: 'image', src: instalacion9, alt: 'parque de bolas 3' },
  { type: 'image', src: instalacion10, alt: 'parque de bolas 4' },
  { type: 'image', src: instalacion11, alt: 'parque de bolas 5' },
  { type: 'image', src: instalacion26, alt: 'parque de bolas 6' },
  { type: 'image', src: instalacion27, alt: 'parque de bolas 7' },
  { type: 'image', src: instalacion28, alt: 'parque de bolas 8' },
  { type: 'image', src: instalacion13, alt: 'diana Arkady celebraciones' },
  { type: 'image', src: instalacion6, alt: 'alfombra infantil Arkady celebraciones' },
  { type: 'image', src: instalacion14, alt: 'zona de juegos infantil Arkady celebraciones' },
];

export default function Galeria() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const closeModal = useCallback(() => {
    videoRef.current?.pause();
    setCurrentIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    if (currentIndex === null) return;
    videoRef.current?.pause();
    setCurrentIndex((currentIndex - 1 + imagenes.length) % imagenes.length);
  }, [currentIndex]);

  const showNext = useCallback(() => {
    if (currentIndex === null) return;
    videoRef.current?.pause();
    setCurrentIndex((currentIndex + 1) % imagenes.length);
  }, [currentIndex]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (currentIndex !== null) {
        if (e.key === 'ArrowLeft')  showPrev();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'Escape')     closeModal();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [currentIndex, showPrev, showNext, closeModal]);

  const currentItem = currentIndex !== null ? imagenes[currentIndex] : null;

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
          {imagenes.map((item, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setCurrentIndex(i)}
            >
              {item.type === 'video' ? (
                <>
                  <video
                    src={item.src}
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                    muted
                    playsInline
                    preload="metadata"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors">
                    <Play size={48} className="text-white drop-shadow-lg" />
                  </div>
                </>
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {currentItem !== null && currentIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <button
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full"
            onClick={closeModal}
            aria-label="Cerrar galería"
          >
            <X size={28} />
          </button>

          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 hover:bg-white/20 rounded-full"
            onClick={showPrev}
            aria-label="Elemento anterior"
          >
            <ChevronLeft size={48} />
          </button>

          {currentItem.type === 'video' ? (
            <video
              ref={videoRef}
              key={currentItem.src}
              src={currentItem.src}
              controls
              autoPlay
              className="max-h-[90vh] max-w-[80vw] rounded-lg shadow-xl"
            />
          ) : (
            <img
              src={currentItem.src}
              alt={currentItem.alt}
              className="max-h-[90vh] max-w-[80vw] rounded-lg shadow-xl"
            />
          )}

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 hover:bg-white/20 rounded-full"
            onClick={showNext}
            aria-label="Elemento siguiente"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </>
  );
}
