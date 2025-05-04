import React from 'react';

// Componente funcional para mostrar la Política de Privacidad
export default function PoliticaPrivacidad() {
  return (
    // Contenedor principal con padding superior
    <div className="pt-20 bg-gradient-to-b from-[#20c997]/10 to-white hero-pattern">
      {/* Contenedor del contenido con padding, centrado, gradiente de fondo y patrón */}
      <div className="container mx-auto px-6 py-20 ">
        {/* Título principal de la página */}
        <h1 className="text-4xl font-bold text-center mb-10">Política de Privacidad</h1>

        {/* Sección: RESPONSABLE DEL TRATAMIENTO */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">RESPONSABLE DEL TRATAMIENTO</h2>
          <p className="mb-4">
            El Responsable del Tratamiento es <strong>AdF Sevilla SL</strong>, Av de Hytasa 38 planta 2, módulo 10 (SEVILLA).
          </p>
          <h3 className="text-xl font-semibold mb-2">Principios de privacidad</h3>
          <p className="mb-4">
            Desde AdF Sevilla SL nos comprometemos contigo a trabajar continuamente para garantizar la privacidad en el tratamiento de tus datos personales, y para ofrecerte en cada momento la información más completa y clara que podamos. Te animamos a leer detenidamente esta sección antes de facilitarnos tus datos personales.
          </p>
          <p className="mb-4">
            Si eres menor de catorce años te rogamos que no nos facilites tus datos sin consentimiento de tus padres.
          </p>
          <p className="mb-4">
            En este apartado te informamos de cómo tratamos los datos de las personas que tienen relación con nuestra organización. Empezando por nuestros principios:
          </p>
          {/* Lista de principios */}
          <ul className="list-disc pl-6 mb-4 space-y-2"> {/* Añadido space-y-2 para espaciado entre elementos */}
            <li>No solicitamos información personal, a no ser que sea necesaria para prestarte los servicios que nos requieras.</li>
            <li>Nunca compartimos información personal con nadie, excepto para cumplir la ley, o contemos con tu autorización expresa.</li>
            <li>Nunca utilizaremos tus datos personales para finalidades distintas a las expresadas en la presente política de privacidad.</li>
            <li>Tus datos siempre serán tratados con un nivel de protección adecuado a la legislación en materia de protección de datos, y no los someteremos a decisiones automatizadas.</li>
          </ul>
          <p className="mb-4">
            La presente política de privacidad la hemos redactado teniendo en cuenta las exigencias de la actual legislación de protección de datos:
          </p>
          {/* Lista de legislación */}
          <ul className="list-disc pl-6 mb-4 space-y-2"> {/* Añadido space-y-2 */}
            <li>Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 (RGPD).</li>
            <li>Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos de Carácter Personal y garantía de los derechos digitales (LOPD).</li>
            <li>Real Decreto 1720/2007, de 21 de diciembre (RLOPD).</li>
          </ul>
          <p className="mb-4">
            Esta política de privacidad está redactada con fecha 6 de diciembre de 2018.
          </p>
          <p className="mb-4">
            Con motivo de la modificación de criterios de tratamiento, en aras de facilitar su comprensión o de adaptarla a la legalidad vigente, es posible que modifiquemos la presente política de privacidad. Actualizaremos la fecha de la misma, para que puedas comprobar su vigencia.
          </p>
        </section>

        {/* Sección: TRATAMIENTOS QUE REALIZAMOS */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Tratamientos que realizamos</h2>

          {/* Subsección: TRATAMIENTO DE EMPLEADOS */}
          <div className="mb-6 p-4 border rounded-lg bg-white shadow-sm"> {/* Contenedor para cada tratamiento */}
            <h3 className="text-xl font-semibold mb-2">TRATAMIENTO DE EMPLEADOS</h3>
            <p className="mb-2"> {/* Reducido margen inferior para párrafos dentro de la subsección */}
              <strong>Base Jurídica:</strong> RGPD: 6.1.b) Tratamiento necesario para la ejecución de un contrato en el que el interesado es parte o para la aplicación a petición de éste de medidas precontractuales. RGPD: 6.1.c) Tratamiento necesario para el cumplimiento de una obligación legal aplicable al responsable del tratamiento (Real Decreto Legislativo 2/2015, de 23 de octubre, Ley del Estatuto de los Trabajadores).
            </p>
            <p className="mb-2">
              <strong>Fines del Tratamiento:</strong> Gestión de personal contratado, expediente personal, control horario, formación, planes de pensiones, prevención de riesgos laborales, emisión de nóminas y gestión de la actividad sindical.
            </p>
            <p className="mb-2">
              <strong>Colectivo:</strong> Empleados.
            </p>
            <p className="mb-2">
              <strong>Categorías de Datos:</strong> Nombre y apellidos, DNI/CIF/Documento identificativo, número de registro de personal, número de Seguridad Social/Mutualidad, dirección, firma y teléfono. Además, datos de salud, afiliación sindical, datos personales, datos académicos y profesionales, control de presencia, y datos económicos.
            </p>
            <p className="mb-2">
              <strong>Categorías de Destinatarios:</strong> Entidad encargada de riesgos laborales, Tesorería General de la Seguridad Social, organizaciones sindicales, entidades financieras, Agencia Estatal de Administración Tributaria y contratistas principales.
            </p>
            <p className="mb-2">
              <strong>Transferencias Internacionales:</strong> No están previstas.
            </p>
            <p className="mb-2">
              <strong>Plazo de Supresión:</strong> Se conservarán durante el tiempo necesario para cumplir con la finalidad y para determinar posibles responsabilidades. Los datos económicos se conservarán según la Ley 58/2003, General Tributaria.
            </p>
            <p className="mb-2">
              <strong>Medidas de Seguridad:</strong> Adaptadas al RGPD.
            </p>
          </div>

          {/* Subsección: TRATAMIENTO DE CONTACTOS */}
          <div className="mb-6 p-4 border rounded-lg bg-white shadow-sm"> {/* Contenedor para cada tratamiento */}
            <h3 className="text-xl font-semibold mb-2">TRATAMIENTO DE CONTACTOS</h3>
            <p className="mb-2">
              <strong>Base Jurídica:</strong> Consentimiento del interesado.
            </p>
            <p className="mb-2">
              <strong>Fines del Tratamiento:</strong> Atender solicitudes, enviar información y realizar un seguimiento.
            </p>
            <p className="mb-2">
              <strong>Colectivo:</strong> Personas de contacto, clientes, proveedores.
            </p>
            <p className="mb-2">
              <strong>Categorías de Datos:</strong> Nombre y apellidos, teléfono y dirección de email.
            </p>
            <p className="mb-2">
              <strong>Categorías de Destinatarios:</strong> No se contemplan cesiones de datos a terceros.
            </p>
            <p className="mb-2">
              <strong>Transferencias Internacionales:</strong> No previstas.
            </p>
            <p className="mb-2">
              <strong>Plazo de Supresión:</strong> Indefinido o hasta solicitud.
            </p>
            <p className="mb-2">
              <strong>Medidas de Seguridad:</strong> Adaptadas al RGPD.
            </p>
          </div>

          {/* Puedes agregar aquí las demás secciones de tratamientos si existen en el documento original */}
        </section>

        {/* Sección: TUS DERECHOS */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">TUS DERECHOS</h2>
          <p className="mb-4">
            Tienes derecho a solicitarnos una copia de tus datos personales, a rectificar los datos inexactos o completarlos si estuvieren incompletos, o a suprimirlos cuando ya no sean necesarios para los fines para los que fueron recogidos.
          </p>
          <p className="mb-4">
            También tienes derecho a limitar el tratamiento de tus datos personales y a obtener tus datos en un formato estructurado y legible.
          </p>
          <p className="mb-4">
            Puedes oponerte al tratamiento de tus datos personales en determinadas circunstancias (por ejemplo, cuando el tratamiento sea para marketing directo).
          </p>
          <p className="mb-4">
            Cuando nos hayas otorgado tu consentimiento, podrás retirarlo en cualquier momento. En ese momento dejaremos de tratar tus datos para esa finalidad, sin afectar a los tratamientos previos.
          </p>
          <p className="mb-4">
            Estos derechos podrán verse limitados, por ejemplo, si para cumplir tu solicitud debiéramos revelar datos sobre otra persona o si estamos obligados a conservar registros por una obligación legal.
          </p>
          <p className="mb-4">
            Puedes contactarnos para ejercer tus derechos, aportando una copia de un documento que acredite tu identidad.
          </p>
        </section>

        {/* Sección: INFORMACIÓN ADICIONAL */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Información Adicional</h2>
          <p className="mb-4">
            <strong>Tratamiento de tus datos fuera del Espacio Económico Europeo:</strong> Para los tratamientos indicados podemos utilizar servicios de proveedores ajenos al EEE, pero acogidos al acuerdo de Privacy Shield.
          </p>
          <p className="mb-4">
            <strong>Enlaces a sitios web de terceros:</strong> Nuestro sitio web puede contener enlaces a otros sitios. Es tu responsabilidad leer la política de protección de datos y condiciones legales de esos sitios.
          </p>
          <p className="mb-4">
            <strong>Datos de terceros:</strong> Si nos facilitas datos de terceros, asumes la responsabilidad de informarles previamente, según lo establecido en el artículo 14 del RGPD.
          </p>
        </section>

        {/* Sección: Última actualización */}
        <section>
          <p className="text-sm text-center text-gray-600">
            Última actualización: 17 de marzo de 2025
          </p>
        </section>
      </div>
    </div>
  );
}
