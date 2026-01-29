import type { Club } from "../types/Club";
import { clubs as initialClubs } from "../data/clubs";

export type State = {
  clubs: Club[];
  favorites: number[];
  country: string;
  city: string;
  sort: "" | "asc" | "desc";
};

export type Action =
  | { type: "TOGGLE_FAVORITE"; payload: number }
  | { type: "SET_COUNTRY"; payload: string }
  | { type: "SET_CITY"; payload: string }
  | { type: "SET_SORT"; payload: "" | "asc" | "desc" };

export const initialState: State = {
  clubs: initialClubs,
  favorites: [],
  country: "",
  city: "",
  sort: "",
};

export function clubReducer(state: State, action: Action): State {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.includes(action.payload)
          ? state.favorites.filter(id => id !== action.payload)
          : [...state.favorites, action.payload],
      };

    case "SET_COUNTRY":
      return { ...state, country: action.payload };

    case "SET_CITY":
      return { ...state, city: action.payload };

    case "SET_SORT":
      return { ...state, sort: action.payload };

    default:
      return state;
  }
}
