import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const useNoticias = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        setLoading(true); // Marcar como cargando antes de la operación asíncrona
        const querySnapshot = await getDocs(collection(db, "noticias"));
        const noticiasData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNoticias(noticiasData);
      } catch (error) {
        console.error("Error al obtener noticias:", error);
      } finally {
        setLoading(false); // Marcar como no cargando después de la operación, sin importar si fue exitosa o no
      }
    };

    fetchNoticias();
  }, []);

  return { noticias, loading };
};

export default useNoticias;
