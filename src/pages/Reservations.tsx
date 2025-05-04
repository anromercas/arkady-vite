import React from 'react';
// Import necessary icons from lucide-react
import { CalendarPlus, Clock, CreditCard, CalendarClock, Sun, Link2, Banknote, Sunset, SunSnow } from 'lucide-react';
// Import the calendar component (assuming it exists in the specified path)
import CalendarioReservas from '../components/CalendarioReservas.js';
import Seo from '../seo/Seo.js';

function Reservations() {
  return (
    <>
      <Seo
        title="Reserva tu local para celebraciones en Sevilla | Arkady"
        description="Reserva online tu espacio en Arkady para cumpleaños, comuniones y eventos familiares en Sevilla. Elige horario y asegura tu fecha hoy mismo."
        keywords="reserva local celebraciones Sevilla, alquilar parque de bolas Sevilla, cumpleaños infantiles Sevilla, comuniones Sevilla"
      />
    // Main container with top padding
      <div className="pt-20">
        {/* Section with background color and pattern */}
        <section className="py-20 bg-[#20c997]/10 hero-pattern">
          {/* Container for content centering and padding */}
          <div className="container mx-auto px-6">
            {/* Main heading with icon, centered */}
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 flex items-center justify-center gap-3">
              <CalendarPlus size={36} className="text-[#20c997]" /> {/* Icon */}
              Reserva tu Celebración
            </h2>

            {/* Section for reservation times */}
            <div className="mt-12 text-center max-w-4xl mx-auto">
              {/* Subheading for times with icon, centered */}
              <h4 className="text-xl font-semibold mb-2 flex items-center justify-center gap-2">
                <Clock size={24} className="text-[#20c997]" /> {/* Icon */}
                Horarios de Reserva
              </h4>
              {/* List of reservation times */}
              <ul className="mt-2 text-left inline-block space-y-2">
                <li className="flex items-center">
                  <CalendarClock className="h-6 w-6 text-[#20c997] mr-2" />
                  <strong>Día Completo:</strong> 10:00 - 22:00
                </li>
                <li className="flex items-center">
                  <Sun className="h-6 w-6 text-[#20c997] mr-2" />
                  <strong>Horario Día:</strong> 10:00 - 15:00
                </li>
                <li className="flex items-center">
                  <Sunset className="h-6 w-6 text-[#20c997] mr-2" />
                  <strong>Horario Tarde (Verano):</strong> 17:00 - 22:00
                </li>
                <li className="flex items-center">
                  <SunSnow className="h-6 w-6 text-[#20c997] mr-2" />
                  <strong>Horario Tarde (Invierno):</strong> 16:00 - 21:00
                </li>
              </ul>
            </div>

            {/* Calendar component for booking */}
            <div className="mt-12">
              <CalendarioReservas />
            </div>

            {/* Section for confirmation and payment methods */}
            <div className="mt-12 text-center max-w-4xl mx-auto">
              {/* Subheading for payment with icon, centered */}
              <h4 className="text-xl font-semibold mb-4 flex items-center justify-center gap-2">
                <CreditCard size={24} className="text-[#20c997]" /> {/* Icon */}
                Confirmación y Formas de Pago
              </h4>
              {/* Payment details paragraph */}
              <p className="text-gray-700">
                Para confirmar tu reserva,{' '}
                <strong>se requiere un depósito de 75 €</strong>, que deberá abonarse en las{' '}
                <strong>24 horas</strong> siguientes a la solicitud. Este importe será
                reembolsado al día siguiente del evento, tras verificar el cumplimiento
                de nuestras normas y condiciones.
              </p>
              {/* List of payment methods */}
              <ul className="mt-4 text-left inline-block space-y-4">
                <li className="flex items-start">
                  <Link2 className="h-6 w-6 text-[#20c997] mr-2 mt-1" />
                  <div>
                    <strong>Enlace de pago:</strong>
                    <ul className="ml-6 list-disc">
                      <li>
                        Recibirás un enlace por email desde donde podrás pagar cómodamente con{' '}
                        Bizum o tarjeta de crédito/débito.
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start">
                  <Banknote className="h-6 w-6 text-[#20c997] mr-2 mt-1" />
                  <div>
                    <strong>Transferencia bancaria:</strong>
                    <ul className="ml-6 list-disc">
                      <li>IBAN: ES19 0081 0288 7400 0187 9092</li>
                      <li>Concepto: Nombre completo y fecha/hora de la reserva</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Reservations;