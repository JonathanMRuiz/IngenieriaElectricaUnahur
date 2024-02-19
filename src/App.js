import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LazyComponent from "./components/LazyComponents";
import Home from "./pages/Home";
import Taller from "./pages/Taller";
import Contacto from "./pages/Contacto";
import NoticiaCompleta from "./pages/NoticiaCompleta";

// Importa tus componentes Lazy aquí
const LazyHeader = React.lazy(() => import("./components/Header"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimeout);
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
              <React.Suspense fallback={<Spinner />}>
                <LazyHeader />
              </React.Suspense>
            </LazyComponent>

            <LazyComponent>
              <React.Suspense fallback={<Spinner />}>
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  {/* <Route path="/taller" element={<Taller />}></Route> */}
                  <Route path="/contacto" element={<Contacto />}></Route>
                  <Route path="/noticia/:id" element={<NoticiaCompleta />} />
                </Routes>
              </React.Suspense>
            </LazyComponent>

            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
