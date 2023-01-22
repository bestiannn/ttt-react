import { useCurrentViewStore } from "../store/currentViewStore";

const Modal = ({ setModalOpen, resetPlaysInfo, setLineWinner }) => {
  const { setCurrentView } = useCurrentViewStore();

  const reset = () => {
    setModalOpen(false);
    setLineWinner([]);
    resetPlaysInfo();
  };

  return (
    <div className="absolute top-0 left-0 grid h-full w-full place-content-center gap-7 bg-base/90">
      <h2 className="text-xl font-bold">You Win!</h2>
      <div className="flex gap-5">
        <button
          className="rounded-xl border px-5 py-2 font-bold"
          onClick={() => reset()}
        >
          Play again
        </button>
        <button
          className="rounded-xl border px-5 py-2 font-bold"
          onClick={() => setCurrentView("home")}
        >
          Exit
        </button>
      </div>
    </div>
  );
};

export default Modal;
