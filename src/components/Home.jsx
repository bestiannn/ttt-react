import { usePlayerStore } from "../store/playerStore";
import { useCurrentViewStore } from "../store/currentViewStore";
import { useGameStore } from "../store/gameStore";

const Home = () => {
  const { id, username } = usePlayerStore();
  const { setCurrentView } = useCurrentViewStore();
  const { setId, setVs, setPlayer1, setPlayer2 } = useGameStore();

  const handleClickCPU = () => {
    setId("cpu");
    setVs("cpu");
    setPlayer1({
      id,
      username,
    });
    setPlayer2({
      id: "cpu",
      username: "CPU",
    });
    setCurrentView("select-char");
  };

  return (
    <div className="grid h-full place-content-center gap-10">
      <div className="flex justify-center">
        <button
          className="rounded-xl border px-5 py-2 font-bold"
          onClick={handleClickCPU}
        >
          START PLAY
        </button>
      </div>
    </div>
  );
};

export default Home;
