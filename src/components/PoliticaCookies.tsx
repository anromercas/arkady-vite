import React from 'react';

export default function PoliticaCookies() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-6 py-20 bg-gradient-to-b from-[#20c997]/10 to-white hero-pattern">
        <h1 className="text-4xl font-bold text-center mb-10">Política de Cookies</h1>

        {/* ¿Qué son las cookies? */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">¿Qué son las cookies?</h2>
          <p className="mb-4">
            Cookie es un fichero que se descarga en tu ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
          </p>
          <p className="mb-4">
            El navegador del usuario memoriza cookies en el disco duro solamente durante la sesión actual, ocupando un espacio de memoria mínimo y sin perjudicar el ordenador. Las cookies no contienen ninguna clase de información personal específica, y la mayoría de las mismas se borran del disco duro al finalizar la sesión del navegador (las denominadas cookies de sesión).
          </p>
          <p className="mb-4">
            La mayoría de los navegadores aceptan como estándar las cookies y, con independencia de las mismas, permiten o impiden en los ajustes de seguridad las cookies temporales o memorizadas.
          </p>
          <p className="mb-4">
            Sin tu expreso consentimiento –mediante la activación de las cookies en tu navegador– Arkady Celebraciones no enlazará en las cookies los datos memorizados con tus datos personales proporcionados en el momento del registro o la compra.
          </p>
        </section>

        {/* ¿Qué tipos de cookies utiliza esta página web? */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">¿Qué tipos de cookies utiliza esta página web?</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Cookies técnicas:</strong> Permiten al usuario la navegación a través de una página web y la utilización de los diferentes servicios que en ella existan, como controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a áreas restringidas, recordar elementos de un pedido, realizar el proceso de compra, gestionar inscripciones o participar en eventos, utilizar elementos de seguridad, almacenar contenidos para videos o sonido, o compartir contenidos a través de redes sociales.
            </li>
            <li>
              <strong>Cookies de personalización:</strong> Permiten al usuario acceder al servicio con algunas características predefinidas en función de criterios en el terminal del usuario, como el idioma, tipo de navegador o configuración regional.
            </li>
            <li>
              <strong>Cookies de análisis:</strong> Bien tratadas por nosotros o terceros, nos permiten cuantificar el número de usuarios y realizar análisis estadístico de la utilización del servicio, ayudándonos a mejorar la oferta de productos o servicios.
            </li>
            <li>
              <strong>Cookies publicitarias:</strong> Permiten gestionar la oferta de espacios publicitarios, adecuando el contenido del anuncio al servicio solicitado o al uso que realice el usuario de nuestra página web.
            </li>
            <li>
              <strong>Cookies de publicidad comportamental:</strong> Permiten gestionar los espacios publicitarios mostrando anuncios en función del comportamiento y perfil de navegación del usuario.
            </li>
            <li>
              <strong>Cookies de terceros:</strong> El Sitio Web puede utilizar servicios de terceros que recopilen información con fines estadísticos, de uso del sitio web y para la prestación de otros servicios relacionados.
            </li>
          </ul>
        </section>

        {/* Desactivar las cookies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Desactivar las cookies</h2>
          <p className="mb-4">
            Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones de tu navegador.
          </p>
          <p className="mb-4">
            A continuación, puedes acceder a la configuración de los navegadores más frecuentes para aceptar, instalar o desactivar las cookies:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647?hl=es&co=GENIE.Platform=Desktop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Internet Explorer
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Safari
              </a>
            </li>
          </ul>
          <p className="mb-4">
            Al desactivar o eliminar las cookies, parte del Sitio Web no funcionará correctamente o la calidad de la página puede verse afectada.
          </p>
        </section>

        {/* Contacto */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
          <p className="mb-4">
            Si tienes dudas sobre esta política de cookies, puedes contactar con Arkady Celebraciones en{" "}
            <a href="mailto:arkadycelebraciones@gmail.com" className="text-blue-600 underline">
              arkadycelebraciones@gmail.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
