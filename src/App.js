import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from "./firebase"; // Importa el módulo de autenticación de Firebase
import Header from "./components/Header";
import Spinner from "./components/Spinner";
import LazyComponent from "./components/LazyComponents";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import NoticiaCompleta from "./pages/NoticiaCompleta";
import Login from "./components/Login";
import SubirNoticia from "./pages/SubirNoticia";
import Footer from "./components/Footer";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user); // Establece el estado de isLoggedIn según si hay un usuario autenticado o no
      setIsLoading(false);
    });

    return () => unsubscribe(); // Limpia el listener del cambio de autenticación al desmontar el componente
  }, []);

  return (
    <Router>
      <div className={`App ${isLoading ? "loading" : ""}`}>
        {isLoading ? (
          <div className="loading-overlay">
            <Spinner />
          </div>
        ) : (
          <>
            <LazyComponent>
              <Header isLoggedIn={isLoggedIn} />
            </LazyComponent>

            <LazyComponent>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/noticia/:id" element={<NoticiaCompleta />} />
                <Route path="/login" element={<Login />} />
                {/* Ruta privada: solo accesible si el usuario está autenticado */}
                {isLoggedIn ? (
                  <Route path="/subir-noticia" element={<SubirNoticia />} />
                ) : (
                  <Route path="/subir-noticia" element={<Login />} />
                )}
              </Routes>
            </LazyComponent>

            <Footer />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
