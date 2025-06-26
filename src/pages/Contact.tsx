import React, { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Music2 } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Seo from '../seo/Seo';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/mgvavpyj', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: new URLSearchParams(formData)
      });

      if (response.ok) {
        toast.success('Mensaje enviado con éxito 🎉');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        toast.error('Error al enviar el mensaje. Inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error en el submit:', error);
      toast.error('Error al enviar el mensaje. Inténtalo de nuevo.');
    }
  };

  return (
    <>
      <Seo
        title="Contacto | Arkady Celebraciones en Sevilla"
        description="¿Tienes dudas o quieres más información? Contacta con Arkady en Sevilla. Estamos encantados de ayudarte a organizar tu celebración."
        keywords="contacto Arkady Sevilla, información celebraciones, teléfono parque de bolas Sevilla, email local cumpleaños"
      />
      <div className="pt-20">
        <section className="py-20 bg-[#20c997]/10 hero-pattern">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              Contacto
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Información de contacto */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-8">
                  <MapPin className="h-6 w-6 text-[#20c997] mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Dirección</h3>
                    <p className="text-gray-600">
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=C%2F+%C3%81guila+Perdicera+9,+local+5,+Sevilla"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-[#20c997]"
                      >
                        C/ Águila Perdicera 9, local 5, Sevilla
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center mb-8">
                  <Phone className="h-6 w-6 text-[#20c997] mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Teléfono</h3>
                    <p className="text-gray-600">+34 655 312 918</p>
                  </div>
                </div>
                <div className="flex items-center mb-8">
                  <Mail className="h-6 w-6 text-[#20c997] mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">arkadycelebraciones@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center mb-8">
                  <Instagram className="h-6 w-6 text-[#20c997] mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Instagram</h3>
                    <a
                      href="https://www.instagram.com/arkadycelebraciones/?locale=es_ES%2F&hl=bn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-[#20c997]"
                    >
                      @arkadycelebraciones
                    </a>
                  </div>
                </div>
                <div className="flex items-center mb-8">
                  <Facebook className="h-6 w-6 text-[#20c997] mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Facebook</h3>
                    <a
                      href="https://www.facebook.com/share/14dFof54WY/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-[#20c997]"
                    >
                      Arkady Celebraciones
                    </a>
                  </div>
                </div>
                <div className="flex items-center mb-8">
                  <Music2 className="h-6 w-6 text-[#20c997] mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">TikTok</h3>
                    <a
                      href="https://www.tiktok.com/@arkadycelebraciones?_t=ZN-8vmc1jCZRYc&_r=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-[#20c997]"
                    >
                      @arkadycelebraciones
                    </a>
                  </div>
                </div>
              </div>
              {/* Formulario de contacto */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:ring-[#20c997] focus:border-[#20c997]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:ring-[#20c997] focus:border-[#20c997]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      name="message"
                      rows={8}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:ring-[#20c997] focus:border-[#20c997]"
                      required
                    ></textarea>
                  </div>
                  <button type="submit"
                    className="w-full text-center mt-5 bg-[#20c997] hover:bg-[#1ba884] text-white font-bold py-3 px-8 rounded-full shadow-md transition-colors">
                    Enviar Mensaje
                  </button>
                </form>
                <ToastContainer position="top-right" autoClose={3000} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
