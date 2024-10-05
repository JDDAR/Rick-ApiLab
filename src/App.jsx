import { useSelector } from "react-redux";
import Home from "./components/Home/Home";
import ModalEpisodies from "./components/modals/ModalEpisodies";
import ModalOrigin from "./components/modals/ModalOrigin";

import "./styles/styles.scss";

function App() {
  const { isOpen, isOpenEpisodie } = useSelector((store) => store.modal);

  return (
    <>
      {isOpen && <ModalOrigin />}
      {isOpenEpisodie && <ModalEpisodies />}
      <div className="App">
        <Home />
      </div>
    </>
  );
}

export default App;
