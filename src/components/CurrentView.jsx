import { useCurrentViewStore } from "../store/currentViewStore";
import Game from "./Game";
import Home from "./Home";
import SelectChar from "./SelectChar";

const CurrentView = () => {
  const { currentView } = useCurrentViewStore();

  return (
    <div className="container mx-auto h-screen px-5 py-5">
      {currentView === "home" && <Home />}

      {currentView === "select-char" && <SelectChar />}

      {currentView === "game" && <Game />}
    </div>
  );
};

export default CurrentView;
