import { useClubContext } from "../context/ClubContext";

export default function ControlPanel() {
  const { state, dispatch } = useClubContext();

  return (
    <div>
      <select
        value={state.country}
        onChange={e =>
          dispatch({ type: "SET_COUNTRY", payload: e.target.value })
        }
      >
        <option value="">Все страны</option>
        <option value="Spain">Spain</option>
        <option value="England">England</option>
        <option value="Germany">Germany</option>
        <option value="France">France</option>
      </select>

      <select
        value={state.city}
        onChange={e =>
          dispatch({ type: "SET_CITY", payload: e.target.value })
        }
      >
        <option value="">Все города</option>
        <option value="Madrid">Madrid</option>
        <option value="Barcelona">Barcelona</option>
        <option value="Manchester">Manchester</option>
        <option value="Munich">Munich</option>
        <option value="Paris">Paris</option>
      </select>

      <select
        value={state.sort}
        onChange={e =>
          dispatch({ type: "SET_SORT", payload: e.target.value as any })
        }
      >
        <option value="">Без сортировки</option>
        <option value="asc">По возрастанию</option>
        <option value="desc">По убыванию</option>
      </select>
    </div>
  );
}
