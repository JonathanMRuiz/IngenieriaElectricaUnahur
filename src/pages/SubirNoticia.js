import React, { useState } from "react";
import { db, storage } from "../firebase"; // Importa la base de datos y el almacenamiento de Firebase
import {
  collection,
  addDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Importa getDownloadURL
import Spinner from "../components/Spinner";

const SubirNoticia = () => {
  const [title, setTitle] = useState(""); // Estado para el campo title
  const [text_01, setText01] = useState(""); // Estado para el campo text_01
  const [text_02, setText02] = useState(""); // Estado para el campo text_02
  const [text_03, setText03] = useState(""); // Estado para el campo text_03
  const [image, setImage] = useState(null); // Estado para el archivo de imagen seleccionado
  const [loading, setLoading] = useState(false); // Estado para controlar la carga

  // Manejador para el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifica si el campo title está vacío
    if (!title) {
      alert("Por favor, ingresa un título para la noticia");
      return;
    }

    // Verifica si el campo text_01 está vacío
    if (!text_01) {
      alert("Por favor, ingresa el texto 01 de la noticia");
      return;
    }

    // Verifica si no se ha seleccionado una imagen
    if (!image) {
      alert("Por favor, selecciona una imagen para la noticia");
      return;
    }

    try {
      setLoading(true); // Activa el estado de carga

      // Guarda el título en la base de datos
      const noticiasCollectionRef = collection(db, "noticias");
      const document = await addDoc(noticiasCollectionRef, {
        title,
        text_01,
        text_02,
        text_03,
        creator: "Jonathan",
      }); // Agrega los campos title, text_01, text_02 y text_03 al documento en la colección "noticias"

      // Subir la imagen al almacenamiento de Firebase
      const storageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(storageRef, image);

      // Obtener el enlace de descarga de la imagen
      const imageURL = await getDownloadURL(storageRef);

      // Actualizar el documento de "noticias" con el enlace de la imagen
      await updateDoc(document, { imageURL });

      alert("Noticia subida correctamente");
      // Limpia los campos después de enviar
      setTitle("");
      setText01("");
      setText02("");
      setText03("");
      setImage(null);
    } catch (error) {
      console.error("Error al subir la noticia:", error);
      alert("Error al subir la noticia");
    } finally {
      setLoading(false); // Desactiva el estado de carga
    }
  };

  // Manejador para cambiar el archivo de imagen seleccionado
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Subir Noticia</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Título
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="text_01"
            className="block text-sm font-medium text-gray-700"
          >
            Texto 01
          </label>
          <textarea
            id="text_01"
            value={text_01}
            onChange={(e) => setText01(e.target.value)}
            rows="4"
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="text_02"
            className="block text-sm font-medium text-gray-700"
          >
            Texto 02
          </label>
          <textarea
            id="text_02"
            value={text_02}
            onChange={(e) => setText02(e.target.value)}
            rows="4"
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="text_03"
            className="block text-sm font-medium text-gray-700"
          >
            Texto 03
          </label>
          <textarea
            id="text_03"
            value={text_03}
            onChange={(e) => setText03(e.target.value)}
            rows="4"
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Imagen (JPG, JPEG, PNG)
          </label>
          <input
            type="file"
            id="image"
            accept="image/jpeg, image/png"
            onChange={handleImageChange}
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
          disabled={loading} // Desactiva el botón mientras está cargando
        >
          {loading ? (
            <span>
              <i className="animate-spin mr-1 fas fa-circle-notch"></i>
              <Spinner />
            </span>
          ) : (
            "Subir Noticia"
          )}
        </button>
      </form>
    </div>
  );
};

export default SubirNoticia;
