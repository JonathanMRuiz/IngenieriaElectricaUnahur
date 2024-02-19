import React from "react";

const LazyHero = React.lazy(() => import("../components/Hero"));
const LazyNoticias = React.lazy(() => import("../components/GridNoticias"));
const LazyTitulos = React.lazy(() => import("../components/Titulos"));

const Home = () => {
  return (
    <div>
      <LazyHero />
      <LazyNoticias />
      <LazyTitulos />
    </div>
  );
};

export default Home;
