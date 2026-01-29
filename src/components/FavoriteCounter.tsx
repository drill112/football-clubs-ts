import { useClubContext } from "../context/ClubContext";

export default function FavoriteCounter() {
  const { state } = useClubContext();
  return <p>Избранные: {state.favorites.length}</p>;
}
