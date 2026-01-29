import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ClubProvider } from "./context/ClubContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClubProvider>
      <App />
    </ClubProvider>
  </StrictMode>
);

