import CalendarioReservas from './CalendarioReservas.jsx';

function Reservations() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-[#20c997]/10 hero-pattern">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Reserva tu Celebración
          </h2>
          <CalendarioReservas />
        </div>
      </section>
    </div>
  );
}

export default Reservations;
