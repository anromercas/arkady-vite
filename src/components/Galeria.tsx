import React, { useState } from 'react';
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


const imagenes = [
  { src: instalacion1, alt: 'Instalación 1' },
  { src: instalacion2, alt: 'Instalación 2' },
  { src: instalacion3, alt: 'Instalación 3' },
  { src: instalacion4, alt: 'Instalación 4' },
  { src: instalacion5, alt: 'Instalación 5' },
  { src: instalacion6, alt: 'Instalación 6' },
  { src: instalacion7, alt: 'Instalación 7' },
  { src: instalacion8, alt: 'Instalación 8' },
  { src: instalacion9, alt: 'Instalación 9' },
  { src: instalacion10, alt: 'Instalación 10' },
  { src: instalacion11, alt: 'Instalación 11' },
  { src: instalacion12, alt: 'Instalación 12' },
  { src: instalacion13, alt: 'Instalación 13' },
  { src: instalacion14, alt: 'Instalación 14' },
  { src: instalacion15, alt: 'Instalación 15' },
  { src: instalacion16, alt: 'Instalación 16' },
  { src: instalacion17, alt: 'Instalación 17' },
  { src: instalacion18, alt: 'Instalación 18' },
  { src: instalacion19, alt: 'Instalación 19' },
  { src: instalacion20, alt: 'Instalación 20' },
];

export default function Galeria() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="py-8 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Galería de Instalaciones</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {imagenes.map((imagen, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={() => setSelectedImage(imagen)}>
            <img
              src={imagen.src}
              alt={imagen.alt}
              className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}