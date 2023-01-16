import { useCurrentViewStore } from "../store/currentViewStore";
import Game from "./Game";
import Lobby from "./Lobby";
import SelectChar from "./SelectChar";

const CurrentView = () => {
  const { currentView } = useCurrentViewStore();

  return (
    <div className="container mx-auto h-screen px-5 py-5">
      {currentView === "lobby" && <Lobby />}

      {currentView === "select-char" && <SelectChar />}

      {currentView === "game" && <Game />}
    </div>
  );
};

export default CurrentView;
