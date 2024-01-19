import React from "react";

const Titulos = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-start">
          Titulo ingeniería electrica
          <div className="h-1 w-20 bg-green-500 rounded"></div>
        </h1>
        <div className="flex  flex-wrap -m-4">
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-100 p-8 rounded">
              <h2 className="font-bold mb-4 ">Ingeniero/a Eléctrico/a</h2>
              <p className="leading-relaxed mb-6">
                La carrera tiene por objetivo formar técnicos en el campo de la
                generación, operación, administración y gestión de la energía
                eléctrica participando en tareas de instalación, puesta en
                marcha, operación, ensayos, mediciones, mantenimiento y
                reparación de equipos de energía eléctrica. El/la técnico/a
                tendrá un fundamento sólido en los aspectos inherentes a las
                especificaciones y normas técnicas y de vinculación tecnológica,
                con capacidades para la utilización de tecnología y su operación
                innovadora, y con respeto por los factores sanitarios, legales,
                éticos, ambientales y de seguridad. Los/as egresados/as de la
                Tecnicatura Universitaria en Energía Eléctrica podrán continuar
                sus estudios hasta alcanzar el título de Ingeniero/a
                Eléctrico/a.
              </p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none">
                <a href="#">Plan de estudio</a>
              </button>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-start">
          Titulos intermedios a ingeniería electrica
          <div className="h-1 w-20 bg-green-500 rounded"></div>
        </h1>

        <div className="flex  flex-wrap -m-4">
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-100 p-8 rounded">
              <h2 className="font-bold mb-4 ">
                Técnico/a Universitario/a en Electromovilidad*
              </h2>
              <p className="leading-relaxed mb-6">
                La carrera tiene por objetivo formar técnicos en
                electromovilidad, con formación en generación, transmisión,
                distribución, operación y gestión de la energía eléctrica.
                Tendrá competencias para entender y participar en tareas de
                construcción, mantenimiento, operación, instalación, puesta en
                marcha, ensayos, mediciones, diagnóstico y reparación de
                unidades, equipos y componentes que intervienen en toda la
                cadena de la electromovilidad. Desde el ingreso, el estudiante
                tomará contacto con la energía eléctrica y la electromovilidad.
                Las materias tienen un fuerte contenido práctico y de
                experimentación en laboratorios de ensayos y mediciones. La
                vinculación con los gestores de la energía y fabricantes de
                unidades eléctricas mediante visitas, prácticas y pasantías
                configuran una verdadera inserción del estudiante en este campo
                específico. *La tecnicatura está organizada de manera tal que se
                puedan continuar los estudios de ingeniería eléctrica. Para eso
                existe un sistema de equivalencias entre las materias de ambos
                planes de manera que los avances de la tecnicatura sirven para
                la Ingeniería Eléctrica.
              </p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none">
                <a href="#">Plan de estudio</a>
              </button>
            </div>
          </div>

          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-100 p-8 rounded">
              <h2 className="font-bold mb-4 ">Ingeniero/a Eléctrico/a</h2>
              <p className="leading-relaxed mb-6">
                El/la ingeniero/a poseerá una sólida formación teórica y técnica
                que le permitirá participar en la proyección y dirección
                responsable de plantas de energía eléctrica, como también en la
                participación de procesos industriales vinculados. Estará
                capacitado/a para desarrollarse en todos los niveles del sector
                energético, como así también del sector productivo. Contará con
                una perspectiva integral inspirada en la concepción de la
                energía como un derecho para la población. Estará capacitado
                para el diseño, la construcción y los ensayos de sistemas de
                potencia complejos. Poseerá capacidades para abordar sistemas
                complejos desde la faz organizativa y de gestión. Tendrá
                formación en aspectos técnicos y legales que se manifiestan en
                el área de prestación de servicios eléctricos y será capaz de
                asesorar y auditar. Será capaz de investigar para comprender,
                generar y utilizar de manera crítica su profesión. *Serán
                reconocidas las materias de quienes hayan cursado la Tecnicatura
                Universitaria en Energía Eléctrica o en la Técnicatura
                Universitaria en Electromovilidad
              </p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none">
                <a href="#">Plan de estudio</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Titulos;
