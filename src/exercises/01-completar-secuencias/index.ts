import type { ExerciseModule } from "../../types/exercise";
import { CompletarSecuencias } from "./CompletarSecuencias";

export const completarSecuenciasExercise: ExerciseModule = {
  id: "01-completar-secuencias",
  number: "01",
  title: "Completar secuencias",
  description:
    "Comparación entre respuestas humanas y las predicciones de un modelo de lenguaje al completar patrones.",
  Component: CompletarSecuencias,
};
