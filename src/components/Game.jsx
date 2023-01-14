import Header from "./Header";
import Score from "./Score";
import Table from "./Table";

const Game = () => {

  return (
    <div className="flex h-full flex-col gap-10">
      <Header />
      <Table />
      <Score />
    </div>
  );
};

export default Game;
