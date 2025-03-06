import { useContext, useEffect } from "react";
import {
  First,
  Second,
  Operationn,
  Result,
  Operationnn,
} from "../store/context";
const Operation: React.FC = () => {
  const context4 = useContext(Result);
  if (!context4) {
    throw new Error("Settings must be used within a FirstProvider");
  }
  const { result, setResult } = context4;

  const context1 = useContext(First);
  if (!context1) {
    throw new Error("Settings must be used within a FirstProvider");
  }
  const { first, setFirst } = context1;

  const context2 = useContext(Second);
  if (!context2) {
    throw new Error("Settings must be used within a FirstProvider");
  }
  const { second, setSecond } = context2;

  const context3 = useContext(Operationn);
  if (!context3) {
    throw new Error("Settings must be used within a FirstProvider");
  }
  const { operation, setOperation } = context3;

  const context5 = useContext(Operationnn);
  if (!context5) {
    throw new Error("Settings must be used within a FirstProvider");
  }
  const { operationn, setOperationn } = context5;

  return (
    <div className="w-[95%] h-[50px] text-white flex justify-end mt-[70px] text-[30px]">
      {operationn}
    </div>
  );
};

export default Operation;
