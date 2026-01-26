import { useEffect, useReducer } from "react";
import { clubs } from "./data/clubs";
import ControlPanel from "./components/ControlPanel";
import ClubList from "./components/ClubList";
import {
  clubReducer,
  filterAndSort,
  initialState
} from "./reducer/clubReducer";

function App() {
  const [state, dispatch] = useReducer(clubReducer, initialState);

  useEffect(() => {
    const saved = localStorage.getItem("filters");
    if (saved) {
      dispatch({ type: "LOAD", payload: JSON.parse(saved) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(state));
  }, [state]);

  const visibleClubs = filterAndSort(clubs, state);

  return (
    <div className="app">
      <h1>Футбольные клубы</h1>
      <ControlPanel state={state} dispatch={dispatch} />
      <ClubList clubs={visibleClubs} />
    </div>
  );
}

export default App;
