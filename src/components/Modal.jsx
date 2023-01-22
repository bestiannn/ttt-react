import { useCurrentViewStore } from "../store/currentViewStore";
import { useGameStore } from "../store/gameStore";

const Modal = ({ setModalOpen, resetPlaysInfo, setLineWinner }) => {
  const { setCurrentView } = useCurrentViewStore();
  const { resetStats, resetTurn } = useGameStore();

  const handleReset = () => {
    setModalOpen(false);
    setLineWinner([]);
    resetPlaysInfo();
  };

  const handleExit = () => {
    handleReset();
    resetStats();
    resetTurn();
    setCurrentView("home");
  };

  return (
    <div className="absolute top-0 left-0 grid h-full w-full place-content-center gap-7 bg-base/90">
      <h2 className="text-xl font-bold">You Win!</h2>
      <div className="flex gap-5">
        <button
          className="rounded-xl border px-5 py-2 font-bold"
          onClick={() => handleReset()}
        >
          Play again
        </button>
        <button
          className="rounded-xl border px-5 py-2 font-bold"
          onClick={() => handleExit()}
        >
          Exit
        </button>
      </div>
    </div>
  );
};

export default Modal;
