import { createContext } from "react";
import { IBook } from "./api/base.types";

export interface AppState {
  name?: string;
  loggedIn: boolean;

  favBooks: IBook[];
}

export interface AppContextType {
  app: AppState;
  setAppState: (state: AppState) => void;
}

export const AppContext = createContext<AppContextType>({
  app: { loggedIn: false, favBooks: [] },
  setAppState: () => {},
});
