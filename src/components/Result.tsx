import { useContext } from "react";
import { Result } from "../store/context";

const Resultt: React.FC = () => {
  const context4 = useContext(Result);
  if (!context4) {
    throw new Error("Settings must be used within a FirstProvider");
  }
  const { result, setResult } = context4;

  return (
    <div className="w-[95%] h-[100px] text-white flex justify-between items-center text-[48px]">
      <span className="text-[30px]">=</span>
      <span>{result}</span>
    </div>
  );
};

export default Resultt;
