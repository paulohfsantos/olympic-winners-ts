import { useContext } from "react";
import { WinnersContext } from "../context/winners.context";

export function useWinners() {
  return useContext(WinnersContext);
}