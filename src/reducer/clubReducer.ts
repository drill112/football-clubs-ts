import type { Club } from "../types/Club";


export interface State {
  country: string;
  city: string;
  sort: "asc" | "desc" | "";
}

export type Action =
  | { type: "SET_COUNTRY"; payload: string }
  | { type: "SET_CITY"; payload: string }
  | { type: "SET_SORT"; payload: "asc" | "desc" | "" }
  | { type: "LOAD"; payload: State };

export const initialState: State = {
  country: "",
  city: "",
  sort: ""
};

export function clubReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_COUNTRY":
      return { ...state, country: action.payload };
    case "SET_CITY":
      return { ...state, city: action.payload };
    case "SET_SORT":
      return { ...state, sort: action.payload };
    case "LOAD":
      return action.payload;
    default:
      return state;
  }
}

export function filterAndSort(clubs: Club[], state: State): Club[] {
  let result = [...clubs];

  if (state.country) {
    result = result.filter(c => c.country === state.country);
  }

  if (state.city) {
    result = result.filter(c => c.city === state.city);
  }

  if (state.sort) {
    result.sort((a, b) =>
      state.sort === "asc" ? a.founded - b.founded : b.founded - a.founded
    );
  }

  return result;
}
