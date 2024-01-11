import React from 'react'
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
      <footer className="text-gray-600 body-font">
          <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">                  
                  <span className="ml-3 text-xl">JMR</span>
              </a>
              <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 JMR 
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                  <a className="ml-3 text-gray-500 hover:text-green-500 cursor-pointer text-xl">
                      <FaInstagram />
                  </a>
                  <a className="ml-3 text-gray-500 hover:text-green-500 cursor-pointer text-xl">
                      <FaTelegramPlane/>
                  </a>
                  
              </span>
          </div>
      </footer>
  )
}

export default Footer