import React from "react";
import { useParams } from "react-router-dom";
import noticiasData from "../noticiasData";

const NoticiaCompleta = () => {
  const { id } = useParams();
  const noticia = noticiasData.find((noticia) => noticia.id === parseInt(id));

  if (!noticia) {
    return <div>No se encontró la noticia</div>;
  }

  const {
    title,
    image_01,
    image_02,
    image_03,
    text_01,
    text_02,
    text_03,
    created_at,
    creator,
  } = noticia;

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src={image_01}
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="text-sm text-start text-slate-400">
                Creado por: {creator} - {created_at}
              </p>
              <h1 className="text-sm md:text-4xl text-green-600 uppercase font-bold mb-2">
                {title}
              </h1>

              <p className="leading-relaxed text-lg mb-4">{text_01}</p>
              {/* Mostrar los elementos adicionales solo si están presentes */}
              {image_02 && (
                <img
                  alt="content"
                  className="object-cover object-center h-full sm:h-[25rem] w-full mt-4 mb-4"
                  src={image_02}
                />
              )}
              {text_02 && (
                <p className="leading-relaxed text-lg mb-4">{text_02}</p>
              )}
              {image_03 && (
                <img
                  alt="content"
                  className="object-cover object-center h-full sm:h-[25rem] w-full mt-4 mb-4"
                  src={image_03}
                />
              )}
              {text_03 && (
                <p className="leading-relaxed text-lg mb-4">{text_03}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticiaCompleta;
