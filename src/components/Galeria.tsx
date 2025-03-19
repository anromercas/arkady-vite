import React, { useState } from 'react';
import instalacion1 from '../assets/galeria/instalacion1.jpg';
import instalacion2 from '../assets/galeria/instalacion2.jpg';
import instalacion3 from '../assets/galeria/instalacion3.jpg';
import instalacion4 from '../assets/galeria/instalacion4.jpg';
import instalacion5 from '../assets/galeria/instalacion5.jpg';
import instalacion6 from '../assets/galeria/instalacion6.jpg';

const imagenes = [
  { src: instalacion1, alt: 'Instalación 1' },
  { src: instalacion2, alt: 'Instalación 2' },
  { src: instalacion3, alt: 'Instalación 3' },
  { src: instalacion4, alt: 'Instalación 4' },
  { src: instalacion5, alt: 'Instalación 5' },
  { src: instalacion6, alt: 'Instalación 6' },
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