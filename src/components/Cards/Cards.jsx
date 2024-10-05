import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataApi, personajes } from "../../data/data";
import { setPersonajes } from "../../features/cards/cardsSlice";
import CardItem from "./CardItem";

const Cards = () => {
  const dispatch = useDispatch();
  //Obtengo los datos desde el store
  const { results } = useSelector((store) => store.card);
  //Creo una referencia al contenedor para manipular el scroll
  const cardsContainerRef = useRef(null);

  //Creo la funcion para manejar el desplazamiento horizontal ************
  const handleWheel = (event) => {
    event.preventDefault();
    const scrollAmount = event.deltaY * 0.9;

    //Desplazamiento mas suave :
    requestAnimationFrame(() => {
      if (cardsContainerRef.current) {
        cardsContainerRef.current.scrollLeft += scrollAmount;
      }
    });
  };
  useEffect(() => {
    const container = cardsContainerRef.current;
    // Agregar el listener de desplazamiento
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }
    // Limpieza del listener cuando el componente se desmonte
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  //Usamos Useeffect para obtener los datos de la API *****************
  useEffect(() => {
    const cargandoPersonajes = async () => {
      await fetchDataApi();
      dispatch(setPersonajes(personajes));
    };

    cargandoPersonajes();
  }, [dispatch]);

  return (
    <>
      <div className="cardsContainer" ref={cardsContainerRef}>
        {results.map((i) => {
          return <CardItem key={i.id} {...i} />;
        })}
      </div>
    </>
  );
};
export default Cards;
