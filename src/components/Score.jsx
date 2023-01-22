import { useGameStore } from "../store/gameStore";
import { usePlayerStore } from "../store/playerStore";

const Score = () => {
  const { char, getEnemyChar } = usePlayerStore();
  const { stats } = useGameStore();
  const { wins, losses, ties } = stats;

  const enemyChar = getEnemyChar();

  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <span>{char} (YOU)</span>
        <strong>{wins}</strong>
      </div>
      <div className="flex flex-col">
        <span>TIES</span>
        <strong>{ties}</strong>
      </div>
      <div className="flex flex-col">
        <span>{enemyChar} (CPU)</span>
        <strong>{losses}</strong>
      </div>
    </div>
  );
};

export default Score;
