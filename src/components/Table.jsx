import { useEffect, useState } from "react";
import { useGameStore } from "../store/gameStore";
import { usePlayerStore } from "../store/playerStore";

const Table = () => {
  const { char } = usePlayerStore();
  const { turn, toogleTurn } = useGameStore();

  const [playsInfo, setPlaysInfo] = useState([
    [
      { id: 1, char: null },
      { id: 2, char: null },
      { id: 3, char: null },
    ],
    [
      { id: 4, char: null },
      { id: 5, char: null },
      { id: 6, char: null },
    ],
    [
      { id: 7, char: null },
      { id: 8, char: null },
      { id: 9, char: null },
    ],
  ]);

  const handleClick = (id) => {
    if (turn !== char) return;
    if (playsInfo.flat().find((play) => play.id === id).char) return;

    const newPlaysInfo = playsInfo.map((row) =>
      row.map((play) => {
        if (play.id === id) {
          return {
            ...play,
            char,
          };
        }
        return play;
      })
    );
    setPlaysInfo(newPlaysInfo);
    toogleTurn();
  };

  useEffect(() => {
    // check if there is a char in null
    const hasNull = playsInfo.flat().some((play) => !play.char);
    if (!hasNull) return;
    else if (char !== turn) {
      const emptyPlay = playsInfo.flat().find((play) => !play.char).id;

      setTimeout(() => {
        setPlaysInfo((prevPlaysInfo) => {
          const newPlaysInfo = prevPlaysInfo.map((row) =>
            row.map((play) => {
              if (play.id === emptyPlay) {
                return {
                  ...play,
                  char: char === "X" ? "O" : "X",
                };
              }
              return play;
            })
          );
          return newPlaysInfo;
        });
        toogleTurn();
      }, 2000);
    }
  }, [playsInfo]);

  return (
    <div className="grid flex-1 grid-cols-3 gap-5 text-center">
      {playsInfo.map((row) =>
        row.map(({ id, char }) => (
          <div
            className="grid place-content-center rounded-xl bg-surface2"
            key={id}
            onClick={() => handleClick(id)}
          >
            {char}
          </div>
        ))
      )}
    </div>
  );
};

export default Table;
