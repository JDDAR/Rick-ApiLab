import React from "react";
import PropTypes from "prop-types";
import IconCard from "./IconCard";
import { useDispatch } from "react-redux";
import { openModal, openModalEpisodie } from "../../features/Modals/modalSlice";

const CardItem = ({
  id,
  name,
  status,
  species,
  gender,
  image,
  origin = {},
  location = {},
  episode = [],
}) => {
  const dispatch = useDispatch();

  return (
    <article key={id} className="cardContainer">
      <div className="cardContainer__CardTop">
        <div className="cardContainer__CardTop__img">
          <img src={image} alt={name} />
        </div>
        <div className="containerIcon">
          <IconCard status={status} species={species} gender={gender} />
        </div>
      </div>
      <span>
        <h3>{name}</h3>
      </span>
      <div className="cardContainer__buttons">
        <button
          onClick={() =>
            dispatch(
              openModalEpisodie({
                id,
                name,
                status,
                species,
                gender,
                image,
                origin: origin.name,
                location: location.name,
                episode,
              }),
            )
          }
        >
          Episodies
        </button>
        <button
          onClick={() =>
            dispatch(
              openModal({
                id,
                name,
                status,
                species,
                gender,
                image,
                origin: origin.name,
                location: location.name,
                episode,
              }),
            )
          }
        >
          Origin
        </button>
      </div>
    </article>
  );
};

CardItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  specie: PropTypes.string,
  gender: PropTypes.string,
  image: PropTypes.string,
  origin: PropTypes.object,
  location: PropTypes.object,
  episode: PropTypes.object,
};

export default CardItem;
