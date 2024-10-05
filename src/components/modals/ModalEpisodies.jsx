import { useDispatch, useSelector } from "react-redux";
import {
  closeModal,
  closeModalEpisodie,
  openModal,
} from "../../features/Modals/modalSlice";

const ModalEpisodies = () => {
  const dispatch = useDispatch();
  const { isOpenEpisodie, dataEpisodie } = useSelector((store) => store.modal);

  if (!isOpenEpisodie) return null; // no rendereizar el modal si no  está abierto
  return (
    <>
      <div className="containerModal">
        <div className="containerModal__containerInfo">
          <button
            className="containerModal__containerInfo__ButtonClose"
            onClick={() => dispatch(closeModalEpisodie())}
          >
            X
          </button>
          <header className="containerModal__containerInfo__headerEpisode">
            <div>
              <figure>
                <img src={dataEpisodie.image} alt="" />
              </figure>
              <h3>{dataEpisodie.name}</h3>
            </div>
            <h3>EPISODE</h3>
          </header>
          <div className="containerModal__containerInfo__episodeContainer">
            {dataEpisodie.episode.map((episode) => {
              // Obtengo el numero final de la url
              const episodeNum = episode.split("/").pop();
              return (
                <>
                  <span key={episode.id}>{episodeNum}</span>
                </>
              );
            })}
          </div>

          <div className="containerModal__containerInfo__Buttons">
            <button
              type="button"
              onClick={() => dispatch(closeModalEpisodie())}
            >
              {" "}
              INICIO{" "}
            </button>
            <button
              type="button"
              onClick={() => {
                dispatch(closeModalEpisodie());
                dispatch(closeModal());
                dispatch(
                  openModal({
                    id: dataEpisodie.id,
                    name: dataEpisodie.name,
                    status: dataEpisodie.status,
                    species: dataEpisodie.species,
                    gender: dataEpisodie.gender,
                    image: dataEpisodie.image,
                    origin: dataEpisodie.origin,
                    location: dataEpisodie.location,
                    episode: dataEpisodie.episode,
                  }),
                );
              }}
            >
              ORIGIN
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModalEpisodies;
