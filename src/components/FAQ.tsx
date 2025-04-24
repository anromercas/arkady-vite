import React, { useState } from 'react';
// Import necessary icons from lucide-react
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

// FAQ data array with highlighted bold segments based on the original document
const faqData: { question: string; answer: React.ReactNode }[] = [
  {
    question: "¿Qué es Arkady?",
    answer: (
      <>
        Arkady es un espacio para celebraciones donde ofrecemos diferentes opciones de reserva para cumpleaños, comuniones, fiestas temáticas y reuniones. Nos adaptamos a tus necesidades para crear momentos inolvidables.
      </>
    ),
  },
  {
    question: "¿Cómo puedo reservar?",
    answer: (
      <>
        Puedes reservar a través de nuestro sitio web. Solo tienes que seleccionar la fecha, elegir el tramo horario disponible y completar el formulario de reserva. Recibirás una confirmación por correo electrónico.
      </>
    ),
  },
  {
    question: "¿Dónde estáis ubicados?",
    answer: (
      <>
        Nos encontramos en C/ Águila Perdicera 9, local 5, Sevilla, en el barrio de El Cerro del Águila, muy cerca de la parada de metro Cocheras y justo frente a la parada de autobús de la línea 26.<br />
        Además, dispones de dos amplias zonas de aparcamiento en las inmediaciones para mayor comodidad.
      </>
    ),
  },
  {
    question: "¿Cuál es el precio del alquiler de la sala?",
    answer: (
      <>
        Puedes consultar nuestras tarifas detalladas en la sección de Tipos de Reserva de nuestra página web.
      </>
    ),
  },
  {
    question: "¿Es necesario pagar una reserva?",
    answer: (
      <>
        Para confirmar la reserva, es necesario abonar un depósito de 75 € en las 24 horas siguientes a la solicitud.<br />
        Este importe será reembolsado al día siguiente del evento, siempre que las instalaciones se encuentren en buen estado tras su uso.<br />
        En caso de fuerza mayor que te impida celebrar tu evento en la fecha acordada, podrás solicitar un cambio con al menos 72 horas de antelación. Haremos lo posible por ofrecerte una nueva fecha que se ajuste a tus necesidades.<br />
        <strong>Importante:</strong> En ningún caso de cancelación se devolverá la fianza.
      </>
    ),
  },
  {
    question: "¿Cuántas celebraciones se realizan por día?",
    answer: (
      <>
        Ofrecemos dos turnos de celebración diarios: uno por la mañana y otro por la tarde. Durante el turno que reserves, la sala será de uso exclusivo para ti y tus invitados.
      </>
    ),
  },
  {
    question: "¿Cuáles son las franjas horarias disponibles?",
    answer: (
      <>
        Disponemos de varios tramos horarios:<br />
        10:00 - 15:00 (Mañana)<br />
        16:00 - 21:00 (Tarde Invierno)<br />
        17:00 - 22:00 (Tarde Verano)<br />
        10:00 - 22:00 (Día completo)<br />
        La disponibilidad puede variar según reservas anteriores.
      </>
    ),
  },
  {
    question: "¿Cómo puedo reservar una fecha?",
    answer: (
      <>
        Visita nuestra web, accede a la sección Reservas, elige el día y el horario que prefieras en el calendario, completa el formulario y acepta las condiciones. Tu reserva quedará pendiente de confirmación hasta que se realice el pago del depósito en las siguientes 24 horas.
      </>
    ),
  },
  {
    question: "¿Cómo puedo verificar la disponibilidad de una fecha?",
    answer: (
      <>
        En la sección de Reservas de nuestra web, podrás consultar la disponibilidad en tiempo real.
      </>
    ),
  },
  {
    question: "¿Qué incluye la reserva?",
    answer: (
      <>
        El alquiler incluye el acceso completo a nuestras instalaciones:<br />
        Salones climatizados<br />
        Zonas de juegos para niños<br />
        Área para los más pequeños<br />
        Zona gamer<br />
        Cocina funcional<br />
        Consulta la sección de Tipos de Reserva para más detalles.
      </>
    ),
  },
  {
    question: "¿Cómo se confirma la reserva?",
    answer: (
      <>
        Una vez completes el formulario, recibirás un correo de confirmación provisional. Al mismo tiempo, nuestro equipo será notificado automáticamente para comenzar a gestionar tu celebración.<br />
        La confirmación definitiva se realizará una vez recibido el abono de la fianza de 75 €. <br />
        <strong>⏳ Si no se recibe el pago en un plazo de 24 horas, la fecha seleccionada volverá a estar disponible para otros usuarios.</strong>
      </>
    ),
  },
  {
    question: "¿Cuándo puedo acceder para preparar la sala?",
    answer: (
      <>
        Podrás acceder a la sala durante el horario que hayas reservado. Si necesitas entrar antes para preparar algo, no dudes en contactarnos. ¡Estamos abiertos a adaptarnos siempre que sea posible!
      </>
    ),
  },
  {
    question: "¿Se puede decorar la sala?",
    answer: (
      <>
        ¡Sí, puedes decorar la sala a tu gusto para que tu evento sea aún más especial!<br />
        Solo te pedimos que no utilices cinta adhesiva, clavos, chinchetas u otros elementos que puedan dañar la pintura o las paredes.<br />
        Te recomendamos optar por materiales fáciles de colocar y retirar, como cinta de carrocero, cordeles o soportes adhesivos no agresivos.
      </>
    ),
  },
  {
    question: "¿Qué sucede si no puedo celebrar en la fecha reservada?",
    answer: (
      <>
        Si avisas con al menos dos semanas de antelación, intentaremos ofrecerte una fecha alternativa. En caso de fuerza mayor, por favor, contacta con nosotros para estudiar tu caso.
      </>
    ),
  },
  {
    question: "¿Puedo poner música durante el evento?",
    answer: (
      <>
        Sí, pero con condiciones. Debido a que nos encontramos en una zona residencial, no está permitido el uso de equipos externos de música amplificada. Sin embargo, puedes utilizar nuestro sistema de hilo musical, siempre manteniendo un volumen adecuado.<br />
        Arkady Celebraciones no se hace responsable del uso inadecuado del sistema ni de posibles molestias ocasionadas por exceso de ruido.
      </>
    ),
  },
  {
    question: "¿Cuál es el horario de los turnos?",
    answer: (
      <>
        <strong>Mañana:</strong> 10:00 h a 15:00 h<br />
        <strong>Tarde (invierno):</strong> 16:00 h a 21:00 h<br />
        <strong>Tarde (verano):</strong> 17:00 h a 22:00 h<br />
        <strong>Día completo:</strong> 10:00 h a 22:00 h
      </>
    ),
  },
  {
    question: "¿Cómo accedo a la sala el día del evento?",
    answer: (
      <>
        El mismo día de tu celebración, te enviaremos un mensaje con un código de acceso e instrucciones para ingresar. Así tendrás total flexibilidad.
      </>
    ),
  },
  {
    question: "¿Qué equipamiento tiene la sala?",
    answer: (
      <>
        Nuestra sala incluye:<br />
        ● Nevera<br />
        ● Congelador<br />
        ● Botellero<br />
        ● Cafetera Dolce Gusto<br />
        ● Microondas<br />
        ● Parque de bolas<br />
        ● 2 máquinas arcade retro (3000+ juegos)<br />
        ● TV<br />
        ● Hilo musical<br />
        ● Cocinita infantil<br />
        ● Juguetes de construcción y coches<br />
        ● Futbolín<br />
        ● Diana<br />
        ● Mesas y sillas plegables<br />
        ● 1 trona<br />
        ● Cambiador para bebés
      </>
    ),
  },
  {
    question: "¿Hasta qué edad pueden usar el parque de bolas?",
    answer: (
      <>
        El parque de bolas es apto para niños de hasta 10 años o que no superen los 140 cm de altura. Su capacidad máxima es de 16 niños.
      </>
    ),
  },
  {
    question: "¿Qué tipo de celebraciones se pueden realizar en Arkady?",
    answer: (
      <>
        Además de cumpleaños infantiles, Arkady es perfecto para comuniones, reuniones familiares, eventos temáticos o celebraciones entre amigos. Tenemos entretenimiento para todas las edades: cocinita, juguetes, diana, futbolín y arcade retro.
      </>
    ),
  },
  {
    question: "¿Cuál es la capacidad de la sala?",
    answer: (
      <>
        La capacidad máxima es de 60 personas, incluyendo tanto adultos como niños.
      </>
    ),
  },
  {
    question: "¿Cómo debo dejar la sala al finalizar el evento?",
    answer: (
      <>
        Te pedimos que dejes la sala recogida, como si fuera tu propia casa:<br />
        ● Recoge los juguetes<br />
        ● Asegúrate de que las bolas estén dentro de la piscina<br />
        ● Barre el suelo<br />
        ● Retira toda la decoración<br />
        ● Saca la basura y deposítala en los contenedores exteriores<br />
        <strong>🚫 No está permitido el uso de confeti ni brillantina.</strong><br />
        No es necesaria una limpieza en profundidad, pero sí es importante entregarla ordenada y limpia. En caso de no cumplir con estas condiciones, el costo de la limpieza se descontará de la fianza.
      </>
    ),
  },
  {
    question: "¿Debo limpiar después del evento?",
    answer: (
      <>
        Sabemos que después de una buena celebración lo último que apetece es limpiar. Por eso, no te pedimos una limpieza a fondo, pero sí que dejes la sala recogida y lista para el siguiente grupo.<br />
        Lo que sí debes hacer:<br />
        ● Barrer el suelo<br />
        ● Recoger todos los juguetes<br />
        ● Dejar las bolas dentro de la piscina<br />
        ● Quitar toda la decoración que hayas colocado<br />
        ● Sacar la basura y depositarla en los contenedores exteriores<br />
        <strong>🚫 Importante: No está permitido usar confeti ni brillantina.</strong><br />
        <strong>💡 Recuerda:</strong> Si la sala no se entrega recogida, el coste de limpieza extra se descontará de la fianza.
      </>
    ),
  },
  {
    question: "¿Qué hago si surge un problema durante el evento?",
    answer: (
      <>
        Contacta con nosotros inmediatamente. Siempre habrá alguien de nuestro equipo disponible para ayudarte y solucionar cualquier situación.
      </>
    ),
  },
  {
    question: "¿Qué debo hacer si deseo finalizar antes del horario?",
    answer: (
      <>
        Puedes cerrar antes si lo deseas, siguiendo las instrucciones de cierre que te enviaremos. Eso sí, no está permitido permanecer más allá del horario contratado.
      </>
    ),
  },
];

// FAQ Page Component
export default function FAQPage() {
  // State to keep track of the currently open accordion item
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Function to toggle the accordion item open/closed
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-20 bg-gradient-to-b from-[#20c997]/10 to-white hero-pattern">
      <div className="container mx-auto p-6 py-20 ">
        <h1 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
          <HelpCircle size={36} className="text-[#20c997]" />
          Preguntas Frecuentes
        </h1>
        <div className="space-y-4 max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-lg text-gray-800">{item.question}</span>
                  <span className="text-gray-500">
                    {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </span>
                </div>
              </button>
              {openIndex === index && (
                <div className="p-5 text-gray-700 bg-white border-t border-gray-200">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
