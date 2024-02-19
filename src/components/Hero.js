import React from "react";
import Logo from "../source/logo.png";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-5 py-24 md:py-32">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
          <img
            className="object-cover object-center rounded w-full h-auto"
            alt="hero"
            src={Logo}
          />
        </div>
        <div className="p-2 lg:w-1/2 lg:pl-12 lg:pr-24 md:pl-16 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="title-font uppercase sm:text-5xl text-3xl mb-4 font-medium text-gray-900">
            Ingeniería Eléctrica
            <br className="hidden lg:hidden" />
            Universidad de Hurlingham
          </h1>
          <p className="mb-8 p-2 leading-relaxed">
            Departamento de Tecnología e Ingeniería
            <br className="lg:hidden" />
            Ingeniería Eléctrica y Tecnicatura Universitaria en Energía
            Eléctrica
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
