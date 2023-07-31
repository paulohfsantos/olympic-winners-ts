import { createContext, Dispatch, SetStateAction } from "react";
import type { Winner } from "../types/winner";

type WinnersContextType = {
  winners: Winner[];
  setWinners: Dispatch<SetStateAction<Winner[]>>;
};

export const initialState = {
  winners: [],
  setWinners: () => {},
};

export const WinnersContext = createContext<WinnersContextType>(initialState);