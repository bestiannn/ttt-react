import { useEffect, useState } from "react";
import { useGameStore } from "../store/gameStore";
import { usePlayerStore } from "../store/playerStore";
import Modal from "./Modal";

const Table = () => {
  const { char } = usePlayerStore();
  const { turn, toogleTurn, addWin, addLoss, addTie } = useGameStore();
  const [modalOpen, setModalOpen] = useState(false);

  const [playsInfo, setPlaysInfo] = useState([
    { id: 1, char: null },
    { id: 2, char: null },
    { id: 3, char: null },
    { id: 4, char: null },
    { id: 5, char: null },
    { id: 6, char: null },
    { id: 7, char: null },
    { id: 8, char: null },
    { id: 9, char: null },
  ]);
  const [lineWinner, setLineWinner] = useState([]);

  const handleClick = (id) => {
    if (turn !== char) return;
    if (playsInfo.find((play) => play.id === id).char) return;

    const newPlaysInfo = playsInfo.map((play) => {
      if (play.id === id) {
        return {
          ...play,
          char,
        };
      }
      return play;
    });
    setPlaysInfo(newPlaysInfo);
    toogleTurn();
  };

  const checkWinner = () => {
    for (let i = 0; i < 9; i += 3) {
      if (
        playsInfo[i].char &&
        playsInfo[i].char === playsInfo[i + 1].char &&
        playsInfo[i].char === playsInfo[i + 2].char
      ) {
        setLineWinner([i + 1, i + 2, i + 3]);
        return playsInfo[i].char;
      }
    }

    for (let i = 0; i < 3; i++) {
      if (
        playsInfo[i].char &&
        playsInfo[i].char === playsInfo[i + 3].char &&
        playsInfo[i].char === playsInfo[i + 6].char
      ) {
        setLineWinner([i + 1, i + 4, i + 7]);
        return playsInfo[i].char;
      }
    }

    if (
      playsInfo[0].char &&
      playsInfo[0].char === playsInfo[4].char &&
      playsInfo[0].char === playsInfo[8].char
    ) {
      setLineWinner([1, 5, 9]);
      return playsInfo[0].char;
    }
    if (
      playsInfo[2].char &&
      playsInfo[2].char === playsInfo[4].char &&
      playsInfo[2].char === playsInfo[6].char
    ) {
      setLineWinner([3, 5, 7]);
      return playsInfo[2].char;
    }

    return null;
  };

  const resetPlaysInfo = () => {
    setPlaysInfo([
      { id: 1, char: null },
      { id: 2, char: null },
      { id: 3, char: null },
      { id: 4, char: null },
      { id: 5, char: null },
      { id: 6, char: null },
      { id: 7, char: null },
      { id: 8, char: null },
      { id: 9, char: null },
    ]);
  };

  useEffect(() => {
    // Win or Lose
    if (checkWinner()) {
      if (checkWinner() === char) addWin();
      else addLoss();

      // resetPlaysInfo();
      // setLineWinner([]);
      setModalOpen(true);
      return;
    }

    // Tie
    if (playsInfo.every((play) => play.char !== null)) {
      addTie();

      // resetPlaysInfo();
      // setLineWinner([]);
      setModalOpen(true);
      return;
    }

    // check if there is a char in null
    const hasNull = playsInfo.some((play) => !play.char);
    let enemyPlay;
    if (!hasNull) return;
    // Enemy play
    else if (char !== turn) {
      const emptyPlay = playsInfo.find((play) => !play.char).id;

      enemyPlay = setTimeout(() => {
        setPlaysInfo((prevPlaysInfo) => {
          const newPlaysInfo = prevPlaysInfo.map((play) => {
            if (play.id === emptyPlay) {
              return {
                ...play,
                char: char === "X" ? "O" : "X",
              };
            }
            return play;
          });
          return newPlaysInfo;
        });

        toogleTurn();
      }, 1000);
    }

    return () => clearTimeout(enemyPlay);
  }, [playsInfo]);

  return (
    <div className="grid flex-1 grid-cols-3 gap-5 text-center">
      {modalOpen && (
        <Modal
          setModalOpen={setModalOpen}
          resetPlaysInfo={resetPlaysInfo}
          setLineWinner={setLineWinner}
        />
      )}

      {playsInfo.map(({ id, char }) => (
        <div
          className={`grid place-content-center rounded-xl bg-surface2 ${
            lineWinner.includes(id) && "bg-green text-base"
          }`}
          key={id}
          onClick={() => handleClick(id)}
        >
          {char}
        </div>
      ))}
    </div>
  );
};

export default Table;
