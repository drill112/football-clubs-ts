import { useClubContext } from "../context/ClubContext";
import ClubItem from "./ClubItem";

export default function ClubList() {
  const { state } = useClubContext();

  let list = [...state.clubs];

  if (state.country) {
    list = list.filter(c => c.country === state.country);
  }

  if (state.city) {
    list = list.filter(c => c.city === state.city);
  }

  if (state.sort === "asc") {
    list.sort((a, b) => a.founded - b.founded);
  }

  if (state.sort === "desc") {
    list.sort((a, b) => b.founded - a.founded);
  }

  return (
    <div>
      {list.map(club => (
        <ClubItem key={club.id} club={club} />
      ))}
    </div>
  );
}
