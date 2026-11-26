import { useEffect, useSyncExternalStore } from "react";
import { exercises, findExerciseById } from "../exercises";
import "./ExercisesMenu.css";

const DEFAULT_TITLE = "Ingeniería de Prompts — Ejercicios";

function subscribeToHash(callback: () => void): () => void {
  window.addEventListener("hashchange", callback);
  return () => window.removeEventListener("hashchange", callback);
}

function getHashExerciseId(): string {
  return window.location.hash.replace(/^#\/?/, "");
}

export function ExercisesMenu() {
  const activeId = useSyncExternalStore(subscribeToHash, getHashExerciseId);
  const activeExercise = findExerciseById(activeId);

  useEffect(() => {
    document.title = activeExercise
      ? `${activeExercise.number} · ${activeExercise.title} | Ingeniería de Prompts`
      : DEFAULT_TITLE;
    window.scrollTo({ top: 0 });
  }, [activeExercise]);

  if (activeExercise) {
    const ActiveComponent = activeExercise.Component;

    return (
      <div className="exercise-shell">
        <header className="exercise-topbar">
          <a href="#/" className="back-to-menu-button">
            <span aria-hidden="true">←</span>
            <span>Volver al menú</span>
          </a>
          <span className="exercise-topbar__label">
            Ejercicio {activeExercise.number} · {activeExercise.title}
          </span>
        </header>

        <main className="exercise-content">
          <ActiveComponent />
        </main>
      </div>
    );
  }

  return (
    <main className="exercises-menu">
      <header className="exercises-menu__header">
        <p className="exercises-menu__eyebrow">Curso Fernando Herrera</p>
        <h1>Ingeniería de Prompts</h1>
        <p className="exercises-menu__subtitle">
          Selecciona un ejercicio para abrir su módulo.
        </p>
      </header>

      <nav className="exercises-menu__nav" aria-label="Menú de ejercicios">
        <ul className="exercises-menu__list">
          {exercises.map((exercise) => (
            <li key={exercise.id}>
              <a href={`#/${exercise.id}`} className="exercise-wide-button">
                <span className="exercise-wide-button__number">
                  {exercise.number}
                </span>
                <span className="exercise-wide-button__body">
                  <span className="exercise-wide-button__title">
                    {exercise.title}
                  </span>
                  <span className="exercise-wide-button__description">
                    {exercise.description}
                  </span>
                </span>
                <span
                  className="exercise-wide-button__arrow"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
