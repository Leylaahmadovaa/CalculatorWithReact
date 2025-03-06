import { createContext } from "react";

interface ResultContextType {
  result: number;
  setResult: React.Dispatch<React.SetStateAction<number>>;
}

export const Result = createContext<ResultContextType | undefined>(undefined);

interface FirstContextType {
  first: number;
  setFirst: React.Dispatch<React.SetStateAction<number>>;
}

export const First = createContext<FirstContextType | undefined>(undefined);

interface SecondContextType {
  second: number;
  setSecond: React.Dispatch<React.SetStateAction<number>>;
}

export const Second = createContext<SecondContextType | undefined>(undefined);

interface OperationContextType {
  operation: string;
  setOperation: React.Dispatch<React.SetStateAction<string>>;
}

export const Operationn = createContext<OperationContextType | undefined>(
  undefined
);

interface OperationnContextType {
  operationn: string;
  setOperationn: React.Dispatch<React.SetStateAction<string>>;
}

export const Operationnn = createContext<OperationnContextType | undefined>(
  undefined
);
