import { useGameStore } from "../store/gameStore";

const Score = () => {
  const { stats } = useGameStore();
  const { wins, losses, ties } = stats;

  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <span>x (YOU)</span>
        <strong>{wins}</strong>
      </div>
      <div className="flex flex-col">
        <span>TIES</span>
        <strong>{losses}</strong>
      </div>
      <div className="flex flex-col">
        <span>O (CPU)</span>
        <strong>{ties}</strong>
      </div>
    </div>
  );
};

export default Score;
