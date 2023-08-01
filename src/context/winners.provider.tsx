import { useEffect, useState } from "react";
import type { FC, PropsWithChildren } from "react";
import { WinnersContext } from "./winners.context";
import { Winner } from "../types/winner";
import { WinnerService } from "../service/winners";
import { ResponseException } from "../Exceptions/responseException";

const initialState: Winner[] = [];
const winnerService = new WinnerService();
const winnerException = new ResponseException();

export const WinnersProvider: FC<PropsWithChildren> = ({ children }) => {
  const [winners, setWinners] = useState<Winner[]>(initialState);

  const fetchWinners = async () => {
    try {
      const res = await winnerService.getWinners();
      setWinners(res);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      winnerException.handleResponse(error.response.status);
    }
  };

  const value = {
    winners,
    setWinners,
  };

  useEffect(() => {
    fetchWinners();
  }, []);

  return (
    <WinnersContext.Provider value={value}>{children}</WinnersContext.Provider>
  );
};
