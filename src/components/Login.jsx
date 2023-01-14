import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { usePlayerStore } from "../store/playerStore";
import { useCurrentViewStore } from "../store/currentViewStore";
import { v4 as uuidv4 } from "uuid";

const Login = () => {
  const { setUsername, setId } = usePlayerStore();
  const { setCurrentView } = useCurrentViewStore();

  const [newUsername, setNewUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUsername.length > 2) {
      setUsername(newUsername);
      setId(uuidv4());
      setCurrentView("lobby");
    }
  };

  return (
    <div className="grid h-full place-content-center gap-10 text-center">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold">Login</h1>
        <h2 className="text-subtext0">Set a username</h2>
      </div>
      <form className="flex gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          className="rounded-xl px-5 text-base"
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <button type="submit" className="rounded-xl">
          <IoSend className="text-2xl" />
        </button>
      </form>
    </div>
  );
};

export default Login;
