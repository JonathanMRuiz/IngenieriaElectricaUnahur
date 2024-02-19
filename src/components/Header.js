import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import Logo from "../source/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
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
          {/* Mobile Menu Icon */}
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

          {/* Mobile Menu */}
          <div
            className={`${
              isMobileMenuOpen ? "flex flex-col" : "hidden"
            } md:flex md:flex-row justify-center md:my-4 items-center text-sm md:text-[18px] font-bold md:px-10`}
          >
            <div className=" w-full md:w-auto" onClick={closeMobileMenu}>
              <ul className="flex flex-col md:flex-row justify-center items-center">
                {/* Reemplaza los enlaces <a> con <Link> */}
                <li className="hover:underline underline-offset-4 decoration-2 decoration-green-600 py-2 rounded-lg px-2 md:px-5">
                  <Link to="/">Inicio</Link>
                </li>
                {/* <li className="hover:underline underline-offset-4 decoration-2 decoration-green-600 py-2 rounded-lg px-2 md:px-5">
                  <Link to="/taller">Taller de laboratorio</Link>
                </li> */}

                <li className="hover:underline underline-offset-4 decoration-2 decoration-green-600 py-2 rounded-lg px-2 md:px-5">
                  <Link to="/contacto">Contacto</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
