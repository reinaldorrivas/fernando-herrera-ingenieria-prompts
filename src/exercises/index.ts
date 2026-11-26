import type { ExerciseModule } from "../types/exercise";
import { completarSecuenciasExercise } from "./01-completar-secuencias";
import { crearReservacionExercise } from "./02-crear-reservacion";

export const exercises: readonly ExerciseModule[] = [
  completarSecuenciasExercise,
  crearReservacionExercise,
];

export function findExerciseById(id: string): ExerciseModule | undefined {
  return exercises.find((exercise) => exercise.id === id);
}
