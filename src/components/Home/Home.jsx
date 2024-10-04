import React from "react";
import Cards from "../Cards/Cards";

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
      </section>
    </>
  );
};

export default Home;
