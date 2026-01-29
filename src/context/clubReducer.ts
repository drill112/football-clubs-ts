import type { Club } from "../types/Club";

export type State = {
  clubs: Club[];
  favorites: number[];
  filter: "all" | "favorites";
};

export type Action =
  | { type: "TOGGLE_FAVORITE"; payload: number }
  | { type: "SET_FILTER"; payload: "all" | "favorites" };

export function clubReducer(state: State, action: Action): State {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.includes(action.payload)
          ? state.favorites.filter(id => id !== action.payload)
          : [...state.favorites, action.payload],
      };

    case "SET_FILTER":
      return { ...state, filter: action.payload };

    default:
      return state;
  }
}
