import { createContext, useContext, useReducer } from "react";
import { clubReducer, initialState } from "../reducer/clubReducer";
import type { State, Action } from "../reducer/clubReducer";

type ContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const ClubContext = createContext<ContextType | null>(null);

export function ClubProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(clubReducer, initialState);

  return (
    <ClubContext.Provider value={{ state, dispatch }}>
      {children}
    </ClubContext.Provider>
  );
}

export function useClubContext() {
  const context = useContext(ClubContext);
  if (!context) {
    throw new Error("useClubContext must be used inside ClubProvider");
  }
  return context;
}
