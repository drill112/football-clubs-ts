import { useClubContext } from "../context/ClubContext";

export default function Filter() {
  const { state, dispatch } = useClubContext();

  return (
    <div>
      <button onClick={() => dispatch({ type: "SET_SORT", payload: "asc" })}>
        ↑ По возрастанию
      </button>

      <button onClick={() => dispatch({ type: "SET_SORT", payload: "desc" })}>
        ↓ По убыванию
      </button>

      <button onClick={() => dispatch({ type: "SET_SORT", payload: "" })}>
        Сбросить сортировку
      </button>
    </div>
  );
}

