import React from "react";

const PaperBanner = ({ backgroundImage, title, description }) => {
  return (
    <div
      className="relative bg-cover bg-center h-80 md:h-96 flex justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
      <div className="absolute z-10 text-white text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl">{description}</p>
      </div>
    </div>
  );
};

export default PaperBanner;
