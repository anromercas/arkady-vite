import React, { useState } from 'react';

const faqData = [
    {
        question: "¿Qué es Arkady?",
        answer:
            "Arkady es un espacio para celebraciones donde ofrecemos diferentes opciones de reserva para cumpleaños, comuniones, fiestas temáticas y reuniones, adaptándonos a tus necesidades para crear momentos inolvidables.",
    },
    {
        question: "¿Cómo puedo reservar?",
        answer:
            "Puedes reservar a través de nuestro sitio web. Selecciona la fecha, elige el tramo horario disponible y completa el formulario de reserva. Recibirás una confirmación por correo electrónico.",
    },
    {
        question: "¿Dónde estáis ubicados?",
        answer:
            "Nos puedes encontrar en C/ Águila Perdicera 9, local 5, Sevilla. En el barrio de El Cerro del Águila, cerca de la parada de metro de Cocheras.",
    },
    {
        question: "¿Cuál es el precio del alquiler de la sala?",
        answer:
            "Puedes consultar nuestras tarifas detalladas en la sección de Tipos de reservas de nuestra página web.",
    },
    {
        question: "¿Es necesario pagar una reserva?",
        answer:
            "Sí, se requiere un depósito de 75 € para confirmar la reserva, que deberá abonarse en las24 horas siguientes a la solicitud. Este importe será reembolsado al día siguiente del evento, tras verificar que todo se encuentra en buen estado.",
    },
    {
        question: "¿Cuántas celebraciones se realizan por día?",
        answer:
            "Ofrecemos dos turnos de celebración diarios: uno por la mañana y otro por la tarde. Durante el turno que reserves, la sala será de uso exclusivo para ti y tus invitados.",
    },
    {
        question: "¿Cuáles son las franjas horarias disponibles?",
        answer:
            "Disponemos de varios tramos horarias: '10:00 - 22:00', '10:00 - 15:00', '17:00 - 22:00' y '18:00 - 23:00'. Algunos tramos pueden estar reservados según la disponibilidad.",
    },
    {
        question: "¿Cómo puedo reservar una fecha?",
        answer:
            "Visita nuestra página web, selecciona la opción de reservas y elige el día y tramo horario que prefieras en nuestro calendario. Completa el formulario, acepta las políticas y envíalo. Tu reserva quedará pendiente de confirmación hasta que se realice el pago del depósito en las siguientes 24 horas.",
    },
    {
        question: "¿Cómo puedo verificar la disponibilidad de una fecha?",
        answer:
            "En la sección de reservas de nuestra página web, podrás ver la disponibilidad actualizada en tiempo real.",
    },
    {
        question: "¿Qué incluye la reserva?",
        answer:
            "La reserva incluye el acceso a nuestras instalaciones, que cuentan con salones climatizados, zonas de juegos para niños, áreas para los más pequeños, zonas gamer y una cocina funcional. Consulta cada opción para ver los detalles.",
    },
    {
        question: "¿Cómo se confirma la reserva?",
        answer:
            "Una vez que completes el formulario de reserva, recibirás un correo de confirmación y también se enviará un aviso al equipo de Arkady para gestionar tu celebración.",
    },
    {
        question: "¿Cuándo puedo acceder para preparar la sala?",
        answer:
            "Si has reservado el turno de tarde, podrás acceder a la sala a partir de las 12:00 horas, siempre y cuando no haya una reserva en el turno de mañana. Si este horario no te resulta conveniente, contáctanos y buscaremos una alternativa que se ajuste a tus necesidades.",
    },
    {
        question: "¿Se puede decorar la sala?",
        answer:
            "Sí, puedes decorar la sala a tu gusto. Sin embargo, te pedimos que utilices únicamente cinta adhesiva (celo) para fijar la decoración, evitando las paredes con papel pintado. No está permitido usar otros tipos de adhesivos ni clavar objetos en las paredes.",
    },
    {
        question: "¿Qué sucede si no puedo celebrar en la fecha reservada?",
        answer:
            "Si surge un imprevisto, intentaremos buscar una fecha alternativa, siempre que nos avises con al menos dos semanas de anticipación. En caso de fuerza mayor, por favor, comunícate con nuestro equipo para evaluar la situación.",
    },
    {
        question: "¿Puedo poner música durante el evento?",
        answer:
            "Sí, pero con restricciones. Debido a que nos encontramos en una zona residencial, no está permitido el uso de música amplificada con equipos externos. Sin embargo, puedes utilizar el sistema de hilo musical disponible en nuestras instalaciones, siempre respetando el nivel de volumen adecuado.",
    },
    {
        question: "¿Cuál es el horario de los turnos?",
        answer:
            `Nuestros horarios son:
        ●​ Mañanas: de 10:00 h a 15:00 h
        ●​ Tardes: de 17:00 h a 22:00 h o de 18:00 h a 23:00 h
        ●​ Día completo: de 10:00 h a 23:00 h`,
    },
    {
        question: "¿Cómo accedo a la sala el día del evento?",
        answer:
            "El mismo día de tu celebración, te enviaremos un mensaje con un código de acceso y las instrucciones necesarias para ingresar a la sala, brindándote mayor flexibilidad.",
    },
    {
        question: "¿Qué equipamiento tiene la sala?",
        answer:
            `Nuestra sala está equipada con:
        ● Nevera
        ● Congelador 
        ● Botellero
        ● Cafetera de cápsulas Dolce Gusto
        ● Microondas

        ● Parque de bolas
        ● Dos máquinas recreativas Arcade
        ● Nintendo Switch 
        ● TV
        ● Hilo Musical
        ● Cocinita Infantil
        ● Juguetes de contrucción y coches
        ● Futbolín 
        ● Diana

        ● Mesas y Sillas plegables
        ● 2 tronas
        ● Cambiador para bebes`,
    },
    {
        question: "¿Hasta qué edad pueden los niños usar el parque de bolas y cuál es su capacidad?",
        answer:
            "El parque de bolas está diseñado para niños menores de 10 años o qué midan más de 135 cm. La capacidad máxima es de 20 niños.",
    },
    {
        question: "¿Qué tipo de celebraciones se pueden realizar en Arkady Celebraciones?",
        answer:
            "Además de cumpleaños infantiles, nuestras instalaciones son ideales para cualquier tipo de evento, ya que hemos cuidado cada detalle para que todos los asistentes, sin importar su edad, se sientan cómodos y entretenidos. Contamos con diversas opciones de entretenimiento, como una cocinita para los más pequeños, diana, PlayStation, futbolín y máquinas arcade retro con más de 3000 juegos.",
    },
    {
        question: "¿Cuál es la capacidad de la sala?",
        answer:
            "Nuestra sala tiene una capacidad máxima de 60 personas, incluyendo niños y adultos.",
    },
    {
        question: "¿Cómo debo dejar la sala al finalizar el evento?",
        answer:
            "Al concluir la celebración, te solicitamos que dejes la sala ordenada tal como la encontraste. Por favor, recoge tus pertenencias, deposita la basura en los contenedores correspondientes y barre el suelo. Nosotros nos encargaremos de la limpieza profunda posterior.",
    },
    {
        question: "¿Debo limpiar después del evento?",
        answer:
            "Nosotros nos ocupamos de la limpieza general. Sin embargo, te pedimos que barras el suelo y recojas los juguetes, asegurando que las bolas estén dentro de la piscina del parque de bolas.",
    },
    {
        question: "¿Qué hago si surge un problema durante el evento?",
        answer:
            "Si enfrentas algún inconveniente durante tu celebración, no dudes en contactarnos. Siempre habrá alguien de nuestro equipo disponible para asistirte y resolver cualquier situación.",
    },
    {
        question: "¿Qué debo hacer si deseo finalizar el evento antes de la hora de cierre?",
        answer:
            `Si decides concluir tu evento antes del horario establecido, simplemente sigue las instrucciones proporcionadas para cerrar la sala y asegúrate de que todo quede en orden.
        
      Para cualquier otra consulta o información adicional, no dudes en contactarnos. Estamos aquí para ayudarte a que tu evento en Arkady Celebraciones sea inolvidable.`,
    },
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="pt-20">
            <div className="container mx-auto p-6 py-20 bg-gradient-to-b from-[#20c997]/10 to-white hero-pattern">
                <h1 className="text-4xl font-bold text-center mb-8">Preguntas Frecuentes</h1>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="border rounded-md">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                            >
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold">{item.question}</span>
                                    <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
                                </div>
                            </button>
                            {openIndex === index && (
                                <div className="p-4 text-gray-700 border-t" style={{ whiteSpace: "pre-line" }}>
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
