import { IoSend } from "react-icons/io5";
import { usePlayerStore } from "../store/playerStore";
import { useCurrentViewStore } from "../store/currentViewStore";
import { useGameStore } from "../store/gameStore";

const Lobby = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="grid h-full place-content-center gap-10">
      <h2 className="text-xl font-bold">Welcome {username}</h2>

      <div className="flex justify-between">
        <button
          className="rounded-xl border px-5 py-2 font-bold"
          onClick={handleClickCPU}
        >
          VS CPU
        </button>
        <button className="cursor-not-allowed rounded-xl border px-5 py-2 font-bold">
          VS Friend
        </button>
      </div>

      <div className="flex flex-col gap-3">
        <span>Join a game</span>
        <form className="flex gap-3" onSubmit={handleSubmit}>
          <input type="text" className="rounded-xl px-5 text-base" />
          <button type="submit" className="rounded-xl">
            <IoSend className="text-2xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Lobby;
