import React from "react";
import Noticia from "./Noticia";

const noticiasData = [
  {
    title: "Título de la Noticia 1",
    image: "https://dummyimage.com/720x600",
    description: "Descripción de la Noticia 1",
    category: "Política",
  },
  {
    title: "Título de la Noticia 2",
    image: "https://dummyimage.com/720x600",
    description: "Descripción de la Noticia 2",
    category: "Ciencia",
  },
  {
    title: "Título de la Noticia 3",
    image: "https://dummyimage.com/720x600",
    description: "Descripción de la Noticia 3",
    category: "Tecnología",
  },
  // Agrega más noticias según sea necesario
];

const GridNoticias = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {noticiasData.map((noticia, index) => (
            <Noticia
              key={index}
              title={noticia.title}
              image={noticia.image}
              description={noticia.description}
              category={noticia.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridNoticias;
