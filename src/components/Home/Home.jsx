import React from "react";
import Card from "../Cards/Cards";

const Home = () => {
  return (
    <>
      <section className="containerHome">
        <div className="containerHome__Title">
          <h1>Rick and Morty</h1>
          <h3>Api-Lab</h3>
        </div>
        <div className="containerHome__Cards">
          <Card />
        </div>
      </section>
    </>
  );
};

export default Home;
