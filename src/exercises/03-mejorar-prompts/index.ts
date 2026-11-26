import type { ExerciseModule } from "../../types/exercise";
import { MejorarPrompts } from "./MejorarPrompts";

export const mejorarPromptsExercise: ExerciseModule = {
  id: "03-mejorar-prompts",
  number: "03",
  title: "Tarea 3: Mejorar prompts básicos",
  description:
    "Tres ejercicios de mejora de prompts genéricos (CV, viajes y salud), comparando respuestas base contra prompts iterados.",
  Component: MejorarPrompts,
};
