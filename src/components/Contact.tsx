import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

function Contact() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-[#20c997]/10 hero-pattern">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Contacto
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-8">
                <MapPin className="h-6 w-6 text-[#20c997] mr-4" />
                <div>
                  <h3 className="font-semibold mb-1">Dirección</h3>
                  <p className="text-gray-600">
                    calle Águila Perdicera 9, local 5, Sevilla
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-8">
                <Phone className="h-6 w-6 text-[#20c997] mr-4" />
                <div>
                  <h3 className="font-semibold mb-1">Teléfono</h3>
                  <p className="text-gray-600">+34 613 162 445</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-[#20c997] mr-4" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">info@arkady.es</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:ring-[#20c997] focus:border-[#20c997]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-md focus:ring-[#20c997] focus:border-[#20c997]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border rounded-md focus:ring-[#20c997] focus:border-[#20c997]"
                  ></textarea>
                </div>
                <Button className="w-full bg-[#20c997] hover:bg-[#1ba884] text-white">
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
