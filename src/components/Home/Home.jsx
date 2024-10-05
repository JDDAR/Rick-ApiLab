import React from "react";
import Cards from "../Cards/Cards";
import imgBG from "../../imagenes/BG-RICK.png";

const Home = () => {
  return (
    <>
      <section className="containerHome">
        <div className="containerHome__Title">
          <h1>Rick and Morty</h1>
          <h3>Api-Lab</h3>
        </div>
        <div className="containerHome__Cards">
          <Cards />
        </div>
        <figure className="containerHome__BG">
          <img src={imgBG} alt="imagen de rick y morty" />
        </figure>
      </section>
    </>
  );
};

export default Home;
