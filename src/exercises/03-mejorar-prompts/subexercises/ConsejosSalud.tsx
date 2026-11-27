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
        <h2>2. Respuesta inicial de la IA:</h2>

        <div className="mejorar-prompts__response-box">
          <p>
            Mantener una buena salud a los treinta y tantos se basa en construir
            hábitos sostenibles que protejan tu energía diaria y prevengan
            problemas a largo plazo. Aquí tienes cuatro pilares fundamentales:
          </p>

          <ul className="mejorar-prompts__bullets">
            <li>
              <p>
                <strong>Prioriza el entrenamiento de fuerza y la movilidad:</strong>{" "}
                A partir de los 30 años comienza una pérdida gradual de masa
                muscular y densidad ósea. Combina actividad cardiovascular (como
                caminatas rápidas o senderismo) con ejercicios de resistencia al
                menos dos o tres veces por semana para proteger tus
                articulaciones y mantener un metabolismo activo.
              </p>
            </li>
            <li>
              <p>
                <strong>Protege la calidad de tu sueño:</strong> Dormir entre 7
                y 8 horas constantes regula tus hormonas, mejora la
                concentración y acelera la recuperación física. Intenta mantener
                horarios fijos para acostarte y levantarte, y evita pantallas o
                comidas pesadas al menos una hora antes de dormir.
              </p>
            </li>
            <li>
              <p>
                <strong>Aliméntate con foco en proteína y fibra:</strong>{" "}
                Asegúrate de incluir una fuente de proteína magra, vegetales
                variados y grasas saludables en cada comida principal para
                mantener estables tus niveles de energía. Mantente bien
                hidratado durante todo el día, priorizando el agua natural sobre
                bebidas azucaradas o alcohol.
              </p>
            </li>
            <li>
              <p>
                <strong>Haz chequeos médicos preventivos:</strong> No esperes a
                sentir molestias para ir al médico. Realizarse analíticas
                anuales (perfil lipídico, glucosa, función hepática y renal) y
                controlar la presión arterial permite detectar y corregir
                desajustes a tiempo.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="mejorar-prompts__card">
        <h2>Siguiente paso (prompt mejorado):</h2>

        <div className="mejorar-prompts__pending-box">
          <p>
            Pendiente por completar. Aquí se añadirán el prompt mejorado, las
            preguntas de la IA y la respuesta definitiva.
          </p>
        </div>
      </section>
    </div>
  );
}
