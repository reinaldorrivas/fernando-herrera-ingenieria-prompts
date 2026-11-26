import type { ExerciseModule } from "../types/exercise";
import { completarSecuenciasExercise } from "./01-completar-secuencias";

export const exercises: readonly ExerciseModule[] = [
  completarSecuenciasExercise,
];

export function findExerciseById(id: string): ExerciseModule | undefined {
  return exercises.find((exercise) => exercise.id === id);
}
