import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModal,
  openModalEpisodie,
} from "../../features/Modals/modalSlice";
import IconCard from "../Cards/IconCard";

const ModalOrigin = () => {
  const dispatch = useDispatch();
  const { isOpen, data } = useSelector((store) => store.modal);

  if (!isOpen) return null; //No renderiza el modal si no esta abierto

  return (
    <>
      <div className="containerModal">
        <div className="containerModal__containerInfo">
          <button
            className="containerModal__containerInfo__ButtonClose"
            onClick={() => dispatch(closeModal())}
          >
            X
          </button>
          <header className="containerModal__containerInfo__header">
            <span className="containerModal__containerInfo__header__blur"></span>
            <img src={data.image} alt="" />
            <IconCard
              status={data.status}
              species={data.species}
              gender={data.gender}
            />
          </header>
          <div className="containerModal__containerInfo__info">
            <figure>
              <img src={data.image} alt="" />
            </figure>
            <div className="containerModal__containerInfo__info__textIdent">
              <h3>{data.name}</h3>
              <h4>@{data.name}</h4>
            </div>
          </div>
          <div className="containerModal__containerInfo__infoText">
            <div className="containerModal__containerInfo__infoText__infoMas">
              <span>
                <h3>ORIGIN</h3>
              </span>
              <span>
                <p>name</p>
                <h3>{data.origin}</h3>
              </span>
            </div>
            <div className="containerModal__containerInfo__infoText__infoMas">
              <span>
                <h3>LOCATION</h3>
              </span>
              <span>
                <p>name</p>
                <h3>{data.location}</h3>
              </span>
            </div>
          </div>
          <div className="containerModal__containerInfo__Buttons">
            <button type="button" onClick={() => dispatch(closeModal())}>
              INICIO
            </button>
            <button
              type="button"
              onClick={() => {
                dispatch(closeModal());
                dispatch(
                  openModalEpisodie({
                    id: data.id,
                    name: data.name,
                    image: data.image,
                    episode: data.episode,
                  }),
                );
              }}
            >
              EPISODIES{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalOrigin;
