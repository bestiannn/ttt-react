import { TiArrowBack } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import { BsCircle } from "react-icons/bs";
import { useCurrentViewStore } from "../store/currentViewStore";
import { useGameStore } from "../store/gameStore";

const Header = () => {
  const { setCurrentView } = useCurrentViewStore();
  const { turn } = useGameStore();

  const handleBack = () => {
    setCurrentView("lobby");
  };

  return (
    <div className="flex justify-between">
      <div onClick={handleBack} className="cursor-pointer">
        <TiArrowBack />
      </div>
      <div className="">{turn} Turn</div>
      <div className="flex gap-1">
        <AiOutlineClose /> <BsCircle />
      </div>
    </div>
  );
};

export default Header;
