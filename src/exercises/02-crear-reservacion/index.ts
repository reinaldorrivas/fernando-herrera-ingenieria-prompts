import type { ExerciseModule } from "../../types/exercise";
import { CrearReservacion } from "./CrearReservacion";

export const crearReservacionExercise: ExerciseModule = {
  id: "02-crear-reservacion",
  number: "02",
  title: "Crear reservación",
  description:
    "Comparación entre un prompt genérico y un prompt interactivo que solicita preguntas pertinentes para redactar un correo de reservación completo.",
  Component: CrearReservacion,
};
