import React from "react";
import Noticia from "./Noticia";
import useNoticias from "../hooks/useNoticias";
import Spinner from "./Spinner";

const GridNoticias = () => {
  const { noticias, loading } = useNoticias();

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-start">
          Noticias
          <div className="h-1 w-20 bg-green-500 rounded"></div>
        </h1>
        {noticias.length === 0 ? (
          <p className="text-center text-gray-600">
            No hay noticias disponibles para mostrar
          </p>
        ) : (
          <div className="flex flex-wrap -m-4">
            {noticias.map((noticia) => (
              <Noticia
                key={noticia.id}
                id={noticia.id}
                title={noticia.title}
                image_01={noticia.imageURL}
                text_01={noticia.text_01}
                text_02={noticia.text_02}
                text_03={noticia.text_03}
                category={noticia.category}
                creator={noticia.creator}
                created_at={noticia.created_at}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GridNoticias;
