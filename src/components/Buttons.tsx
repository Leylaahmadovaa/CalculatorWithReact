import { useEffect, useState } from "react";
import { useContext } from "react";
import {
  First,
  Second,
  Operationn,
  Result,
  Operationnn,
} from "../store/context";
const Buttons: React.FC = () => {
  const [digits, setDigits] = useState<number[]>([7, 8, 9, 4, 5, 6, 1, 2, 3]);
  const [firstNumber, setFirstNumber] = useState<string>("");
  const [secondNumber, setSecondNumber] = useState<string>("");
  const [operatio, setOperatio] = useState<string>("");

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

  const context4 = useContext(Result);
  if (!context4) {
    throw new Error("Settings must be used within a FirstProvider");
  }
  const { result, setResult } = context4;

  const context5 = useContext(Operationnn);
  if (!context5) {
    throw new Error("Settings must be used within a FirstProvider");
  }
  const { operationn, setOperationn } = context5;

  useEffect(() => {
    if (result) {
      setFirst(result);
      setSecond(0);
    } else {
      setFirst(
        firstNumber.endsWith(".")
          ? parseFloat(firstNumber)
          : Number(firstNumber) || 0
      );
      setSecond(
        secondNumber.endsWith(".")
          ? parseFloat(secondNumber)
          : Number(secondNumber) || 0
      );
    }
    setOperationn(
      `${firstNumber} ${operation} ${secondNumber == "0" ? "" : secondNumber}`
    );
  }, [operation, firstNumber, secondNumber, first, second, result]);

  return (
    <div className="grid grid-cols-2 mt-[20px] translate-x-[12px]">
      <div>
        <div className="grid grid-cols-3 gap-x-[75px] gap-y-[25px] mb-[20px]">
          <div
            onClick={() => {
              setFirstNumber("");
              setFirst(0);
              setSecond(0);
              setSecondNumber("");
              setOperation("");
              setResult(0);
            }}
            className="bg-[#74EBD5] w-[50px] h-[50px] text-center rounded-full text-[30px] text-white"
          >
            C
          </div>
          <div
            onClick={() => {
              if (result) {
                setOperation("/");
                setSecondNumber("");
                setFirstNumber(String(result));
                setResult(0);
              } else {
                setOperation("/");
              }
            }}
            className="bg-[#74EBD5] w-[50px] h-[50px] text-center rounded-full text-[30px] text-white"
          >
            /
          </div>
          <div
            onClick={() => {
              if (result) {
                setOperation("%");
                setSecondNumber("");
                setFirstNumber(String(result));
                setResult(0);
              } else {
                setOperation("%");
              }
            }}
            className="bg-[#74EBD5] w-[50px] h-[50px] text-center rounded-full text-[30px] text-white"
          >
            %
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-[60px] gap-y-[20px]">
          {digits.map((digit, index) => (
            <div
              onClick={() => {
                if (result) {
                  setFirstNumber(String(result));
                  setOperation("");
                  setResult(0);
                  setSecondNumber("");
                }

                if (!operation) {
                  setFirstNumber((prev) =>
                    prev === "0" ? String(digit) : prev + String(digit)
                  );
                } else {
                  setSecondNumber((prev) =>
                    prev === "0" ? String(digit) : prev + String(digit)
                  );
                }
              }}
              key={index}
              className="w-[50px] h-[50px] text-center bg-[#F8F8F8] rounded-full text-[30px]"
            >
              {digit}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-x-[65px] gap-y-[25px] mb-[20px] mt-[20px]">
          <div
            onClick={() => {
              if (result) {
                setFirstNumber(String(result));
                setSecondNumber("");
                setOperation("");
                setResult(0);

                if (!String(result).includes(".")) {
                  setFirstNumber(
                    String(result) === "" ? "0." : String(result) + "."
                  );
                }
              } else {
                if (operation) {
                  if (!secondNumber.includes(".")) {
                    setSecondNumber(
                      secondNumber === "" ? "0." : secondNumber + "."
                    );
                  }
                } else {
                  if (!firstNumber.includes(".")) {
                    setFirstNumber(
                      firstNumber === "" ? "0." : firstNumber + "."
                    );
                  }
                }
              }
            }}
            className="w-[50px] h-[50px] text-center bg-[#F8F8F8] rounded-full text-[30px]"
          >
            .
          </div>
          <div
            onClick={() => {
              if (result) {
                setFirstNumber(String(result));
                setOperation("");
                setResult(0);
                setSecondNumber("");
              }

              if (!operation) {
                setFirstNumber((prev) =>
                  prev === "0" ? String("0") : prev + String("0")
                );
              } else {
                setSecondNumber((prev) =>
                  prev === "0" ? String("0") : prev + String("0")
                );
              }
            }}
            className="w-[50px] h-[50px] text-center bg-[#F8F8F8] rounded-full text-[30px]"
          >
            0
          </div>
          <div
            onClick={() => {
              if (secondNumber) {
                setSecondNumber((prev) => prev.slice(0, -1));
              } else if (operation) {
                setOperation("");
              } else if (firstNumber) {
                setFirstNumber((prev) => prev.slice(0, -1));
              }
            }}
            className="bg-[#74EBD5] w-[50px] h-[50px] text-center rounded-full text-[30px] text-white"
          >
            &larr;
          </div>
        </div>
      </div>
      <div className="translate-x-[70px] flex flex-col gap-[20px]">
        <div
          onClick={() => {
            if (result) {
              setOperation("*");
              setSecondNumber("");
              setFirstNumber(String(result));
              setResult(0);
            } else {
              setOperation("*");
            }
          }}
          className="bg-[#74EBD5] w-[50px] h-[50px] text-center rounded-full text-[30px] text-white"
        >
          X
        </div>
        <div
          onClick={() => {
            if (result) {
              setFirstNumber(String(result * (-1)));
              setOperation("");
              setSecondNumber("");
              setResult(0);
            } else {
              // setOperatio("+-");
              if (operation) {
                setSecondNumber(String(Number(secondNumber) * -1));
              } else {
                setFirstNumber(String(Number(firstNumber) * -1));
              }
            }
          }}
          className="bg-[#74EBD5] w-[50px] h-[50px] text-center rounded-full text-[30px] text-white flex flex-col"
        >
          <span>+</span>
          <span className="translate-y-[-45px]">_</span>
        </div>
        <div
          onClick={() => {
            if (result) {
              setOperation("-");
              setSecondNumber("");
              setFirstNumber(String(result));
              setResult(0);
            } else {
              setOperation("-");
            }
          }}
          className="bg-[#74EBD5] w-[50px] h-[50px] text-center rounded-full text-[30px] text-white"
        >
          -
        </div>
        <div
          onClick={() => {
            if (result) {
              setOperation("+");
              setSecondNumber("");
              setFirstNumber(String(result));
              setResult(0);
            } else {
              setOperation("+");
            }
          }}
          className="bg-[#74EBD5] w-[50px] h-[50px] text-center rounded-full text-[30px] text-white"
        >
          +
        </div>
        <div
          onClick={() => {
            if (operation == "+") {
              setResult(first + second);
            }
            if (operation == "-") {
              setResult(first - second);
            }
            if (operation == "*") {
              setResult(first * second);
            }
            if (operation == "/") {
              setResult(first / second);
            }
            if (operation == "%") {
              setResult((first * second) / 100);
            }
            if (!operation) {
              setResult(first);
            }
          }}
          className="bg-[#74EBD5] w-[50px] h-[50px] text-center rounded-full text-[30px] text-white"
        >
          =
        </div>
      </div>
    </div>
  );
};

export default Buttons;
