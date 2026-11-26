import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ExercisesMenu } from "./menu/ExercisesMenu.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ExercisesMenu />
  </StrictMode>,
);
