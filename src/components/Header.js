import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="flex justify-center bg-green-500 text-white">
      <nav className="self-center w-full max-w-7xl">
        <div className="flex md:flex-row flex-col justify-between items-center md:items-start">
          <h1 className="py-4 text-2xl font-sans font-bold px-4 md:px-10">
            Brand
          </h1>

          {/* Mobile Menu Icon */}
          <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-white"
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
            <div
              className="bg-green-500 w-full md:w-auto"
              onClick={closeMobileMenu}
            >
              <ul className="flex flex-col md:flex-row justify-center items-center">
                <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
                  <a href="#">Inicio</a>
                </li>
                <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
                  <a href="#">Taller de laboratorio</a>
                </li>
                <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
                  <a href="#">Services</a>
                </li>
                <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-2 md:px-5">
                  <a href="#">Contacto</a>
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
