import React from "react";
import Noticia from "./Noticia";
import noticiasData from "../noticiasData";
const GridNoticias = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {noticiasData.map((noticia, index) => (
            <Noticia
              key={index}
              id={noticia.id}
              title={noticia.title}
              image_01={noticia.image_01}
              image_02={noticia.image_02}
              image_03={noticia.image_03}
              image_04={noticia.image_04}
              text_01={noticia.text_01}
              text_02={noticia.text_02}
              text_03={noticia.text_03}
              text_04={noticia.text_04}
              category={noticia.category}
              creator={noticia.creator}
              created_at={noticia.created_at}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridNoticias;
