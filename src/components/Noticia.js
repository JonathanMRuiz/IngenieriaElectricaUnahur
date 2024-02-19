import React from "react";
import { Link } from "react-router-dom";

const Noticia = ({ id, category, title, text_01, image_01 }) => {
  // Recorta el texto_01 a un máximo de 256 caracteres
  const truncatedText =
    text_01.length > 256 ? text_01.slice(0, 256) + "..." : text_01;

  return (
    <>
      <div className="p-4 md:w-1/3">
        <Link to={`/noticia/${id}`}>
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={image_01}
              alt="blog"
            />
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                {category}
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                {title}
              </h1>
              <p className="leading-relaxed mb-3">{truncatedText}</p>
              <div className="flex items-center flex-wrap ">
                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                  created_at
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Noticia;
