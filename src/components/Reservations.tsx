// import React, { useEffect } from 'react';
import CalendarioReservas from './CalendarioReservas.jsx';

function Reservations() {
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://asset-tidycal.b-cdn.net/js/embed.js';
  //   script.async = true;
  //   document.body.appendChild(script);
  // }, []);

  return (
    <div className="pt-20">
      <section className="py-20 bg-[#20c997]/10 hero-pattern">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Reserva tu Celebración
          </h2>
          <CalendarioReservas />
          {/* <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="tidycal-embed" data-path="anromercas"></div>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Reservations;
