import { type ComponentType, useState } from "react";
import { AyudaCv } from "./subexercises/AyudaCv";
import { ConsejosSalud } from "./subexercises/ConsejosSalud";
import { ViajesAvila } from "./subexercises/ViajesAvila";
import "./MejorarPrompts.css";

interface SubExerciseTab {
  readonly id: string;
  readonly label: string;
  readonly status: "completed" | "pending";
  readonly Component: ComponentType;
}

const SUB_EXERCISES: readonly SubExerciseTab[] = [
  {
    id: "cv",
    label: "1. Ayúdame con mi CV",
    status: "pending",
    Component: AyudaCv,
  },
  {
    id: "viajes",
    label: "2. Escribe algo sobre viajes",
    status: "completed",
    Component: ViajesAvila,
  },
  {
    id: "salud",
    label: "3. Dame consejos de salud",
    status: "pending",
    Component: ConsejosSalud,
  },
];

export function MejorarPrompts() {
  const [activeTabId, setActiveTabId] = useState<string>("viajes");

  const activeTab =
    SUB_EXERCISES.find((tab) => tab.id === activeTabId) ?? SUB_EXERCISES[1];
  const ActiveComponent = activeTab.Component;

  return (
    <article className="mejorar-prompts">
      <header className="mejorar-prompts__header">
        <h1>Tarea 3: Mejorar prompts básicos</h1>
        <p className="mejorar-prompts__intro">
          Partiendo de tres prompts genéricos, probamos su respuesta base y los
          iteramos con contexto, restricciones y preguntas aclaratorias para
          obtener resultados mucho más útiles.
        </p>
      </header>

      <div
        className="mejorar-prompts__tabs"
        role="tablist"
        aria-label="Ejercicios de la Tarea 3"
      >
        {SUB_EXERCISES.map((tab) => {
          const isSelected = tab.id === activeTab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-${tab.id}`}
              className={`mejorar-prompts__tab${
                isSelected ? " mejorar-prompts__tab--active" : ""
              }`}
              onClick={() => setActiveTabId(tab.id)}
            >
              <span className="mejorar-prompts__tab-label">{tab.label}</span>
              <span
                className={`mejorar-prompts__status mejorar-prompts__status--${tab.status}`}
              >
                {tab.status === "completed" ? "Completado" : "Pendiente"}
              </span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${activeTab.id}`}
        aria-labelledby={`tab-${activeTab.id}`}
      >
        <ActiveComponent />
      </div>
    </article>
  );
}
