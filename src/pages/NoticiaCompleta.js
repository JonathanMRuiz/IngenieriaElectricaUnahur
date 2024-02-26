import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import Spinner from "../components/Spinner";
import useNoticias from "../hooks/useNoticias";

const NoticiaCompleta = () => {
  const { id } = useParams();
  const [noticia, setNoticia] = useState(null);
  const { loading } = useNoticias();

  useEffect(() => {
    const fetchNoticia = async () => {
      try {
        const noticiaDoc = await getDoc(doc(db, "noticias", id));
        if (noticiaDoc.exists()) {
          setNoticia({ id: noticiaDoc.id, ...noticiaDoc.data() });
        } else {
          console.log("No se encontró la noticia");
        }
      } catch (error) {
        console.error("Error al obtener la noticia:", error);
      }
    };

    fetchNoticia();
  }, [id]);

  if (loading || !noticia) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  const { title, imageURL, text_01, text_02, text_03, creator } = noticia;

  return (
    <section className="h-screen text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src={imageURL}
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="text-sm text-start text-slate-400">
                Autora: {creator}
              </p>
              <h1 className="text-sm md:text-4xl text-green-600 uppercase font-bold mb-2">
                {title}
              </h1>
              <p className="leading-relaxed text-lg mb-4">{text_01}</p>
              {text_02 && (
                <p className="leading-relaxed text-lg mb-4">{text_02}</p>
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
