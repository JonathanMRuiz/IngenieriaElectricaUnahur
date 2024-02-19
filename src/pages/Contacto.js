import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Contacto = () => {
  return (
    <section class="text-gray-600 body-font sm:h-[85vh]">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Contacte con nosotros
          </h1>

          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-green-600 inline-flex"></div>
          </div>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-5 flex-shrink-0">
              <a
                href="https://www.instagram.com/ingenieria_electrica_unahur/"
                target="_blank"
              >
                <BsInstagram className="text-4xl" />
              </a>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                Nuestro Instagram
              </h2>
              <p class="leading-relaxed text-base">
                Podes mandarnos un mensaje a @ingenieria_electrica_unahur
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-5 flex-shrink-0">
              <a
                href="https://www.instagram.com/ingenieria_electrica_unahur/"
                target="_blank"
              >
                <FaTelegramPlane className="text-4xl" />
              </a>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                Nuestro Telegram
              </h2>
              <p class="leading-relaxed text-base">
                Tambien podes mandarnos un mensaje a
                @telegram_ingenieria_electrica_unahur
              </p>
            </div>
          </div>
          <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-5 flex-shrink-0">
              <a
                href="https://www.instagram.com/ingenieria_electrica_unahur/"
                target="_blank"
              >
                <AiOutlineMail className="text-4xl" />
              </a>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                Nuestro Correo
              </h2>
              <p class="leading-relaxed text-base">
                Nuestra casilla de correos es:
                ingenieria_electrica_unahur@unahur.com.ar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
