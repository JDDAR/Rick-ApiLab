import React from "react";
import { useSelector } from "react-redux";

const Card = () => {
  //Obtengo los datos desde el store
  const { results } = useSelector((store) => store.card);
  return (
    <>
      <ul>
        {results.map((i) => {
          return <li key={i.id}>{i.name}</li>;
        })}
      </ul>
    </>
  );
};
export default Card;
