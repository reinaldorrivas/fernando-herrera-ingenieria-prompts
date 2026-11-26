export function ConsejosSalud() {
  return (
    <div className="mejorar-prompts__sections">
      <section className="mejorar-prompts__card">
        <h2>1. Prompt inicial (genérico):</h2>

        <ul className="mejorar-prompts__list">
          <li>
            <p>Dame consejos de salud.</p>
          </li>
        </ul>
      </section>

      <section className="mejorar-prompts__card">
        <h2>Estado del ejercicio:</h2>

        <div className="mejorar-prompts__pending-box">
          <p>
            Pendiente por completar. Aquí se documentarán la respuesta genérica,
            el prompt mejorado, las preguntas de la IA y la respuesta
            definitiva.
          </p>
        </div>
      </section>
    </div>
  );
}
