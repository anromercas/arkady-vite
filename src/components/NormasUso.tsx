import React from 'react';
// Import necessary icons from lucide-react
import { CalendarCheck, Home, Puzzle, Wand2, Ban, CheckCircle, LogOut, PartyPopper } from 'lucide-react';

export default function NormasUso() {
  return (
    // Main container with background gradient and pattern
    <div className="pt-20 bg-gradient-to-b from-[#20c997]/10 to-white hero-pattern">
      {/* Content container with padding and max-width */}
      <div className="p-6 max-w-4xl mx-auto pt-20 ">
        {/* Main title */}
        <h1 className="text-4xl font-bold text-center mb-10">Normas de Uso y Disfrute – Arkady Celebraciones</h1>

        {/* Introductory paragraph */}
        <p className="mt-4 mb-4">Queremos que tú y tus invitados disfrutéis de una experiencia inolvidable, segura y sin complicaciones. Por eso, te pedimos que leas atentamente estas normas antes de tu evento.</p>

        {/* Section: Reservas y Pagos */}
        <section className="mb-6">
          {/* Section heading with icon */}
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <CalendarCheck size={24} className="text-[#20c997]" /> {/* Icon */}
            Reservas y Pagos
          </h2>
          <ul className="list-disc ml-5 mt-2"> {/* Added mt-2 for spacing */}
            <li>Las reservas se realizarán exclusivamente a través de nuestra página web.</li>
            <li>Para confirmar la fecha elegida, es necesario abonar una <b>fianza de 75 €</b> en las 24 horas posteriores a la solicitud. Una vez recibido el comprobante de pago, se confirmará la reserva..</li>
            <li>El <b>importe total del alquiler</b> debe abonarse como máximo <b>48 horas antes del evento</b>.</li>
            <li>En caso de fuerza mayor, puedes reprogramar tu evento avisando con al menos <b>72 horas de antelación</b>.</li>
            <li>La fianza <b>no es reembolsable</b>, salvo causa justificada por Arkady.</li>
            <li>Arkady Celebraciones se reserva el derecho de modificar o cancelar fechas por causas de fuerza mayor. En ese caso, se ofrecerá una nueva fecha o se reembolsará la fianza si no se encuentra alternativa.</li>
          </ul>
        </section>

        {/* Divider */}
        <hr className="mt-4 mb-4" />

        {/* Section: Uso de las Instalaciones */}
        <section className="mb-6">
          {/* Section heading with icon */}
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Home size={24} className="text-[#20c997]" /> {/* Icon */}
            Uso de las Instalaciones
          </h2>
          <ul className="list-disc ml-5 mt-2"> {/* Added mt-2 */}
            <li>El aforo máximo es de <b>60 personas</b> (niños y adultos incluidos).</li>
            <li>Durante todo el evento deberá estar presente al menos <b>un adulto responsable mayor de 25 años</b>.</li>
            <li>El acceso se realiza mediante <b>código de entrada</b>, que se enviará el mismo día del evento.</li>
          </ul>
        </section>

        {/* Divider */}
        <hr className="mt-4 mb-4" />

        {/* Section: Parque de Bolas y Cama Elástica */}
        <section className="mb-6">
          {/* Section heading with icon */}
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Puzzle size={24} className="text-[#20c997]" /> {/* Icon */}
            Parque de Bolas y Cama Elástica
          </h2>
          <ul className="list-disc ml-5 mt-2"> {/* Added mt-2 */}
            <li>Uso <b>exclusivo para niños</b> y <b>siempre bajo supervisión de un adulto</b>.</li>
            <li>Obligatorio el uso de <b>calcetines antideslizantes</b>.</li>
            <li>No pueden acceder mayores de <b>10 años o que superen los 140 cm de altura</b>.</li>
            <li>Prohibido introducir <b>comida, bebida o juguetes</b> en el parque de bolas.</li>
          </ul>
        </section>

        {/* Divider */}
        <hr className="mt-4 mb-4" />

        {/* Section: Servicios Complementarios */}
        <section className="mb-6">
          {/* Section heading with icon */}
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Wand2 size={24} className="text-[#20c997]" /> {/* Icon */}
            Servicios Complementarios
          </h2>
          <p className="mb-2 mt-2">Disponemos de dos máquinas opcionales para animar aún más tu celebración:</p>
          <h3 className="font-semibold">Máquina de algodón de azúcar</h3>
          <ul className="list-disc ml-5">
            <li>Incluye <b>20 servicios</b>.</li>
            <li>Sabores: Algodón de azúcar, Tropical y Limón.<b>(Sin gluten)</b></li>
          </ul>
          <h3 className="font-semibold mt-2">Máquina de palomitas</h3>
          <ul className="list-disc ml-5">
            <li>Incluye <b>20 servicios</b>.</li>
            <li>Ingredientes: Maíz, aceite y sal.<b>(Sin gluten)</b></li>
          </ul>
          <p className="mt-2">Si necesitas más servicios, consúltanos con al menos <b>24 horas de antelación</b>.</p>
          <p className="mt-2">
            <b>Importante:</b> Ambas máquinas deben utilizarse <b>siempre bajo la supervisión de un adulto</b>. Arkady Celebraciones no se hace responsable de daños ocasionados por su mal uso.
            <br /> En caso de incumplimiento de normas y daños, se perderá la fianza y el cliente deberá abonar los desperfectos.
          </p>
        </section>

        {/* Divider */}
        <hr className="mt-4 mb-4" />

        {/* Section: Prohibiciones Generales */}
        <section className="mb-6">
          {/* Section heading with icon */}
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Ban size={24} className="text-[#20c997]" /> {/* Icon */}
            Prohibiciones Generales
          </h2>
          <ul className="list-disc ml-5 mt-2"> {/* Added mt-2 */}
            <li>Prohibido <b>fumar o vapear</b> dentro del local.</li>
            <li>No está permitido el uso de <b>música amplificada externa</b> ni subir el volumen del equipo del local de forma que cause molestias.</li>
            <li>Prohibido el <b>consumo de alcohol por menores de edad</b>.</li>
            <li>No se puede sacar <b>mobiliario fuera de la sala</b>.</li>
            <li>Prohibido introducir <b>juguetes externos</b> en las áreas de juego.</li>
            <li>No se debe <b>saltar sobre mobiliario</b> ni usar cinta adhesiva, chinchetas o clavos que dañen las paredes.</li>
          </ul>
        </section>

        {/* Divider */}
        <hr className="mt-4 mb-4" />

        {/* Section: Al finalizar el evento */}
        <section className="mb-6">
          {/* Section heading with icon */}
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <CheckCircle size={24} className="text-[#20c997]" /> {/* Icon */}
            Al finalizar el evento
          </h2>
          <ul className="list-disc ml-5 mt-2"> {/* Added mt-2 */}
            <li>Deja mesas y suelos <b>limpios y recogidos</b>.</li>
            <li>Apaga y guarda juguetes y dispositivos eléctricos.</li>
            <li>Asegúrate de que las bolas del parque están <b>dentro de su piscina</b>.</li>
            <li>Deposita la basura en el <b>contenedor exterior</b>.</li>
            <li>Apaga el <b>aire acondicionado o calefacción</b>.</li>
            <li>Cierra bien todas las puertas y <b>deja las llaves donde se indique</b>.</li>
          </ul>
        </section>

        {/* Divider */}
        <hr className="mt-4 mb-4" />

        {/* Section: Salida de la sala */}
        <section className="mb-6">
          {/* Section heading with icon */}
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <LogOut size={24} className="text-[#20c997]" /> {/* Icon */}
            Salida de la sala
          </h2>
          <ul className="list-disc ml-5 mt-2"> {/* Added mt-2 */}
            <li>Si todo está en orden, la <b>fianza se devolverá al día siguiente</b>.</li>
            <li>En caso de daños o incumplimiento, <b>la fianza se perderá totalmente</b>.</li>
            <li>Si los daños superan el valor de la fianza, el cliente deberá abonar la diferencia.</li>
            <li>Las <b>pertenencias olvidadas</b> se guardarán durante <b>un mes</b>.</li>
          </ul>
        </section>

        {/* Concluding paragraphs */}
        <p className="mb-4">Arkady Celebraciones <b>no se hace responsable</b> de daños a personas o pertenencias. El cliente acepta ser el responsable del uso adecuado del local y de sus consecuencias.</p>

        <p className="mb-4">Nos reservamos el derecho de <b>expulsar del local</b> a cualquier persona cuyo comportamiento sea inadecuado, y en ese caso, <b>no se devolverá el importe de la reserva</b>.</p>

        <p className="mb-6">Este contrato <b>no es transferible</b> sin permiso del arrendador.</p>

        {/* Section: ¡Gracias por tu colaboración! */}
        <section className="mb-6">
          {/* Section heading with icon */}
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <PartyPopper size={24} className="text-[#20c997]" /> {/* Icon */}
            ¡Gracias por tu colaboración!
          </h2>
          <p className="mt-4 font-semibold">¡Esperamos que disfrutes al máximo tu evento en Arkady Celebraciones!</p>
        </section>

      </div>
    </div>
  );
}
