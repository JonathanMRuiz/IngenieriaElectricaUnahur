import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../source/logo.png";
import { IoIosSettings } from "react-icons/io";
import { auth } from "../firebase"; // Importa solo el módulo de autenticación
import { signOut } from "firebase/auth";

const Header = ({ handleLogout }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref para el menú desplegable

  useEffect(() => {
    // Verificar si el usuario ha iniciado sesión previamente al cargar la página
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedIsLoggedIn && storedIsLoggedIn === "true") {
      setIsLoggedIn(true);
    }

    // Agregar event listener para cerrar el menú desplegable cuando se hace clic fuera de él
    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      // Limpiar event listener al desmontar el componente
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // Si el clic ocurre fuera del menú desplegable, ciérralo
      setDropdownOpen(false);
    }
  };

  const HandleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("isLoggedIn");
      setIsLoggedIn(false);
      handleLogout();
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <div className="flex justify-center bg-white text-black">
      <nav className="self-center w-full max-w-7xl">
        <div className="flex md:flex-row flex-col justify-between items-center md:items-start">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="h-12 md:h-16" />
            <h1 className="py-4 text-sm font-sans font-bold md:text-2xl ml-2 uppercase">
              Ingeniería Eléctrica Unahur
            </h1>
          </div>
          <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
          <div
            className={`${
              isMobileMenuOpen ? "flex flex-col" : "hidden"
            } md:flex md:flex-row justify-center md:my-4 items-center text-sm md:text-[18px] font-bold md:px-10`}
          >
            <div className=" w-full md:w-auto" onClick={closeMobileMenu}>
              <ul className="flex flex-col md:flex-row justify-center items-center">
                <li className="hover:underline underline-offset-4 decoration-2 decoration-green-600 py-2 rounded-lg px-2 md:px-5">
                  <Link to="/">Inicio</Link>
                </li>
                <li className="hover:underline underline-offset-4 decoration-2 decoration-green-600 py-2 rounded-lg px-2 md:px-5">
                  <Link to="/contacto">Contacto</Link>
                </li>
                {!isLoggedIn && (
                  <li className="hover:underline underline-offset-4 decoration-2 decoration-green-600 py-2 rounded-lg px-2 md:px-5">
                    <Link to="/login">Login</Link>
                  </li>
                )}
                {isLoggedIn && (
                  <li className="relative group" ref={dropdownRef}>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="inline-flex items-center justify-center w-full rounded-md py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-600 focus:ring-white"
                    >
                      <IoIosSettings className="h-6 w-6 mr-1" />
                    </button>
                    {dropdownOpen && (
                      <ul className="absolute right-0 mt-2 py-2 w-48 bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-green-600 ring-opacity-5">
                        <li>
                          <Link
                            to="/subir-noticia"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-center"
                          >
                            Subir Noticia
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={HandleLogout}
                            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-center"
                          >
                            Cerrar Sesión
                          </button>
                        </li>
                      </ul>
                    )}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
