import React from "react";
import { useSelector } from "react-redux";
import CardItem from "./CardItem";

const Cards = () => {
  //Obtengo los datos desde el store
  const { results } = useSelector((store) => store.card);
  return (
    <>
      <div className="cardsContainer">
        {results.map((i) => {
          return <CardItem key={i.id} {...i} />;
        })}
      </div>
    </>
  );
};
export default Cards;
