import React, { useState } from "react";
import { db, storage } from "../firebase";
import {
  collection,
  addDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Spinner from "../components/Spinner";
import Modal from "react-modal";

// Estilos personalizados para el modal
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FFFFFF",
    borderRadius: "8px",
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
    padding: "40px",
    maxWidth: "400px",
    width: "90%",
    textAlign: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: "1000",
  },
};

const SubirNoticia = () => {
  const [title, setTitle] = useState("");
  const [text_01, setText01] = useState("");
  const [text_02, setText02] = useState("");
  const [text_03, setText03] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const openModal = (message) => {
    setModalIsOpen(true);
    setModalMessage(message);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) {
      openModal("Por favor, ingresa un título para la noticia");
      return;
    }

    if (!text_01) {
      openModal("Por favor, ingresa el texto 01 de la noticia");
      return;
    }

    if (!image) {
      openModal("Por favor, selecciona una imagen para la noticia");
      return;
    }

    try {
      setLoading(true);

      const noticiasCollectionRef = collection(db, "noticias");
      const document = await addDoc(noticiasCollectionRef, {
        title,
        text_01,
        text_02,
        text_03,
        creator: "Jonathan",
      });

      const storageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(storageRef, image);

      const imageURL = await getDownloadURL(storageRef);

      await updateDoc(document, { imageURL });

      openModal("Noticia subida correctamente");

      setTitle("");
      setText01("");
      setText02("");
      setText03("");
      setImage(null);
    } catch (error) {
      console.error("Error al subir la noticia:", error);
      openModal("Error al subir la noticia");
    } finally {
      setLoading(false);
    }
  };

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
      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Alerta"
      >
        <h2 className="text-2xl font-bold mb-4">{modalMessage}</h2>
        <button
          onClick={closeModal}
          className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-lg text-lg"
        >
          Cerrar
        </button>
      </Modal>
    </div>
  );
};

export default SubirNoticia;
