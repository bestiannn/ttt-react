import React, { useState } from "react";

const Table = () => {
  const [playsInfo, setPlaysInfo] = useState([
    { id: 1, playerId: null },
    { id: 2, playerId: null },
    { id: 3, playerId: null },
    { id: 4, playerId: null },
    { id: 5, playerId: null },
    { id: 6, playerId: null },
    { id: 7, playerId: null },
    { id: 8, playerId: null },
    { id: 9, playerId: null },
  ]);

  const handleClick = (id) => {
    setPlaysInfo((prev) =>
      prev.map((play) => {
        if (play.id === id) {
          return { ...play, playerId: "X" };
        }
        return play;
      })
    );
  };

  return (
    <div className="grid flex-1 grid-cols-3 gap-5 text-center">
      {playsInfo.map((play) => (
        <div
          className="grid place-content-center rounded-xl bg-surface2"
          key={play.id}
          onClick={() => handleClick(play.id)}
        >
          {play.playerId}
        </div>
      ))}
    </div>
  );
};

export default Table;
