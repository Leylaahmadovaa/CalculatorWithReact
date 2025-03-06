import { useState } from "react";
import MainPage from "./pages/MainPage";
import {
  Result,
  First,
  Second,
  Operationn,
  Operationnn,
} from "./store/context";
const App: React.FC = () => {
  const [result, setResult] = useState<number>(0);
  const [first, setFirst] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);
  const [operation, setOperation] = useState<string>("");
  const [operationn, setOperationn] = useState<string>("");
  return (
    <Result.Provider value={{ result, setResult }}>
      <First.Provider value={{ first, setFirst }}>
        <Second.Provider value={{ second, setSecond }}>
          <Operationn.Provider value={{ operation, setOperation }}>
            <Operationnn.Provider value={{ operationn, setOperationn }}>
              <MainPage />
            </Operationnn.Provider>
          </Operationn.Provider>
        </Second.Provider>
      </First.Provider>
    </Result.Provider>
  );
};

export default App;
