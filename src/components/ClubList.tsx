import type { Club } from "../types/Club";


interface Props {
  clubs: Club[];
}

function ClubList({ clubs }: Props) {
  return (
    <ul className="list">
      {clubs.map(c => (
        <li key={c.id}>
          <b>{c.name}</b> — {c.country}, {c.city} ({c.founded})
        </li>
      ))}
    </ul>
  );
}

export default ClubList;
