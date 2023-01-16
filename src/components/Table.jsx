import { useEffect, useState } from "react";
import { useGameStore } from "../store/gameStore";
import { usePlayerStore } from "../store/playerStore";

const Table = () => {
  const { char } = usePlayerStore();
  const { turn, toogleTurn, addWin, addLoss, addTie } = useGameStore();

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
  const [lineWinner, setLineWinner] = useState([]);

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

  const checkWinner = () => {
    if (
      playsInfo[0][0].char === playsInfo[0][1].char &&
      playsInfo[0][1].char === playsInfo[0][2].char &&
      playsInfo[0][0].char !== null &&
      playsInfo[0][1].char !== null &&
      playsInfo[0][2].char !== null
    ) {
      setLineWinner([
        playsInfo[0][0].id,
        playsInfo[0][1].id,
        playsInfo[0][2].id,
      ]);
      return playsInfo[0][0].char;
    }
    if (
      playsInfo[1][0].char === playsInfo[1][1].char &&
      playsInfo[1][1].char === playsInfo[1][2].char &&
      playsInfo[1][0].char !== null &&
      playsInfo[1][1].char !== null &&
      playsInfo[1][2].char !== null
    ) {
      setLineWinner([
        playsInfo[1][0].id,
        playsInfo[1][1].id,
        playsInfo[1][2].id,
      ]);
      return playsInfo[1][0].char;
    }
    if (
      playsInfo[2][0].char === playsInfo[2][1].char &&
      playsInfo[2][1].char === playsInfo[2][2].char &&
      playsInfo[2][0].char !== null &&
      playsInfo[2][1].char !== null &&
      playsInfo[2][2].char !== null
    ) {
      setLineWinner([
        playsInfo[2][0].id,
        playsInfo[2][1].id,
        playsInfo[2][2].id,
      ]);
      return playsInfo[2][0].char;
    }
    if (
      playsInfo[0][0].char === playsInfo[1][0].char &&
      playsInfo[1][0].char === playsInfo[2][0].char &&
      playsInfo[0][0].char !== null &&
      playsInfo[1][0].char !== null &&
      playsInfo[2][0].char !== null
    ) {
      setLineWinner([
        playsInfo[0][0].id,
        playsInfo[1][0].id,
        playsInfo[2][0].id,
      ]);
      return playsInfo[0][0].char;
    }
    if (
      playsInfo[0][1].char === playsInfo[1][1].char &&
      playsInfo[1][1].char === playsInfo[2][1].char &&
      playsInfo[0][1].char !== null &&
      playsInfo[1][1].char !== null &&
      playsInfo[2][1].char !== null
    ) {
      setLineWinner([
        playsInfo[0][1].id,
        playsInfo[1][1].id,
        playsInfo[2][1].id,
      ]);
      return playsInfo[0][1].char;
    }
    if (
      playsInfo[0][2].char === playsInfo[1][2].char &&
      playsInfo[1][2].char === playsInfo[2][2].char &&
      playsInfo[0][2].char !== null &&
      playsInfo[1][2].char !== null &&
      playsInfo[2][2].char !== null
    ) {
      setLineWinner([
        playsInfo[0][2].id,
        playsInfo[1][2].id,
        playsInfo[2][2].id,
      ]);
      return playsInfo[0][2].char;
    }
    if (
      playsInfo[0][0].char === playsInfo[1][1].char &&
      playsInfo[1][1].char === playsInfo[2][2].char &&
      playsInfo[0][0].char !== null &&
      playsInfo[1][1].char !== null &&
      playsInfo[2][2].char !== null
    ) {
      setLineWinner([
        playsInfo[0][0].id,
        playsInfo[1][1].id,
        playsInfo[2][2].id,
      ]);
      return playsInfo[0][0].char;
    }
    if (
      playsInfo[0][2].char === playsInfo[1][1].char &&
      playsInfo[1][1].char === playsInfo[2][0].char &&
      playsInfo[0][2].char !== null &&
      playsInfo[1][1].char !== null &&
      playsInfo[2][0].char !== null
    ) {
      setLineWinner([
        playsInfo[0][2].id,
        playsInfo[1][1].id,
        playsInfo[2][0].id,
      ]);
      return playsInfo[0][2].char;
    }

    return null;
  };

  useEffect(() => {
    if (checkWinner()) {
      if (checkWinner() === char) {
        addWin();
      } else {
        addLoss();
      }

      setPlaysInfo([
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
      setLineWinner([]);
      return;
    }
    if (playsInfo.flat().every((play) => play.char !== null)) {
      addTie();
      setPlaysInfo([
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
      setLineWinner([]);
      return;
    }

    // check if there is a char in null
    const hasNull = playsInfo.flat().some((play) => !play.char);
    let enemyPlay;
    if (!hasNull) return;
    else if (char !== turn) {
      const emptyPlay = playsInfo.flat().find((play) => !play.char).id;

      enemyPlay = setTimeout(() => {
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

    return () => clearTimeout(enemyPlay);
  }, [playsInfo]);

  return (
    <div className="grid flex-1 grid-cols-3 gap-5 text-center">
      {playsInfo.map((row) =>
        row.map(({ id, char }) => (
          <div
            className={`grid place-content-center rounded-xl bg-surface2 ${
              lineWinner.includes(id) && "bg-green text-base"
            }`}
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
