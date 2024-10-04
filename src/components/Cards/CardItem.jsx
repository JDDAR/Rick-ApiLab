import React from "react";
import PropTypes from "prop-types";

const CardItem = ({ id, name, status, species, gender, image }) => {
  return (
    <article key={id} className="cardContainer">
      <div className="cardContainer__CardTop">
        <div className="cardContainer__CardTop__img">
          <img src={image} alt={name} />
        </div>
        <div className="cardContainer__CardTop__cardIcons">
          <p>{status}</p>
          <p>{species}</p>
          <p>{gender}</p>
        </div>
      </div>
      <div className="cardContainer__buttons">
        <h3>{name}</h3>
        <a href="#">Inicio</a>
        <a href="#">Origin</a>
      </div>
    </article>
  );
};

CardItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  specie: PropTypes.string,
  gender: PropTypes.string,
};

export default CardItem;
