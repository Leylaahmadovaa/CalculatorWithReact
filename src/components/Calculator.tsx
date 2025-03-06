import Operation from "./Operation";
import Resultt from "./Result";
import line from "../assets/Line 1.svg";
import Buttons from "./Buttons";

const Calculator: React.FC = () => {
  return (
    <div className="w-[400px] h-[650px] bg-[#323232] flex flex-col items-center pt-[40px] px-[50px]">
      <Operation />
      <Resultt />
      <img src={line} alt="line" />
      <Buttons />
    </div>
  );
};

export default Calculator;
