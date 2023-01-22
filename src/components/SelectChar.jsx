import { useCurrentViewStore } from "../store/currentViewStore";
import { useGameStore } from "../store/gameStore";
import { usePlayerStore } from "../store/playerStore";

const SelectChar = () => {
  const { playersInfo, setPlayer1, setPlayer2 } = useGameStore();
  const { setChar } = usePlayerStore();
  const { setCurrentView } = useCurrentViewStore();

  const handleClickX = () => {
    setPlayer1({
      ...playersInfo.player1,
      char: "X",
    });
    setChar("X");
    setPlayer2({
      ...playersInfo.player2,
      char: "O",
    });
    setCurrentView("game");
  };

  const handleClickO = () => {
    setPlayer1({
      ...playersInfo.player1,
      char: "O",
    });
    setChar("O");
    setPlayer2({
      ...playersInfo.player2,
      char: "X",
    });
    setCurrentView("game");
  };

  return (
    <div className="grid h-full place-content-center gap-10">
      <h2 className="text-xl font-bold">Select your character</h2>
      <div className="flex justify-between gap-10">
        <button
          className="rounded-xl border px-5 py-2 font-bold"
          onClick={handleClickX}
        >
          X
        </button>
        <button
          className="rounded-xl border px-5 py-2 font-bold"
          onClick={handleClickO}
        >
          O
        </button>
      </div>
    </div>
  );
};

export default SelectChar;
