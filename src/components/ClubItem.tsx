import type { Club } from "../types/Club";
import { useClubContext } from "../context/ClubContext";

export default function ClubItem({ club }: { club: Club }) {
  const { state, dispatch } = useClubContext();

  const isFavorite = state.favorites.includes(club.id);

  return (
    <div>
      <h3>{club.name}</h3>
      <p>{club.city}, {club.country}</p>
      <p>Основан: {club.founded}</p>
      <button
        onClick={() =>
          dispatch({ type: "TOGGLE_FAVORITE", payload: club.id })
        }
      >
        {isFavorite ? "★ Убрать" : "☆ В избранное"}
      </button>
    </div>
  );
}
