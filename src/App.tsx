import ControlPanel from "./components/ControlPanel";
import Filter from "./components/Filter";
import FavoriteCounter from "./components/FavoriteCounter";
import ClubList from "./components/ClubList";
import { ClubProvider } from "./context/ClubContext";

function App() {
  return (
    <ClubProvider>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
        <h1 style={{ textAlign: "center" }}>Футбольные клубы</h1>

        <FavoriteCounter />
        <ControlPanel />
        <Filter />
        <ClubList />
      </div>
    </ClubProvider>
  );
}

export default App;

