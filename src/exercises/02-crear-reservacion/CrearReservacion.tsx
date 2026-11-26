import "./CrearReservacion.css";

export function CrearReservacion() {
  return (
    <article className="crear-reservacion">
      <header className="crear-reservacion__header">
        <h1>Crear reservación</h1>
        <p className="crear-reservacion__intro">
          Evolución de un correo de reservación para el restaurante &ldquo;La
          Cevichería&rdquo;: de un prompt genérico a un resultado completo al
          pedirle a la IA que haga preguntas pertinentes.
        </p>
      </header>

      <div className="crear-reservacion__sections">
        <section className="crear-reservacion__card">
          <h2>1. Prompt inicial (genérico):</h2>

          <ul className="crear-reservacion__list">
            <li>
              <p>
                Créame un correo para hacer una reservación en el restaurante
                &ldquo;La Cevichería&rdquo;.
              </p>
            </li>
          </ul>
        </section>

        <section className="crear-reservacion__card">
          <h2>2. Borrador inicial de la IA:</h2>

          <p className="crear-reservacion__lead">He redactado esto para ti.</p>

          <div className="crear-reservacion__email">
            <div className="crear-reservacion__email-meta">
              <p>
                <strong>Para:</strong>{" "}
                <span className="crear-reservacion__muted">
                  (sin especificar)
                </span>
              </p>
              <p>
                <strong>Asunto:</strong> Solicitud de reservación - Rene Rivas
              </p>
            </div>

            <div className="crear-reservacion__email-body">
              <p>Estimados señores de La Cevichería,</p>
              <p>
                Quisiera solicitar una reservación a nombre de Rene Rivas con
                los siguientes detalles:
              </p>
              <div className="crear-reservacion__email-details">
                <p>Fecha: [Fecha]</p>
                <p>Hora: [Hora]</p>
                <p>Número de personas: [Cantidad de personas]</p>
                <p>Teléfono de contacto: [Tu número de teléfono]</p>
              </div>
              <p>
                Agradecería mucho que me pudieran confirmar la disponibilidad.
              </p>
              <p>
                Saludos cordiales,
                <br />
                Rene Rivas
              </p>
            </div>
          </div>
        </section>

        <section className="crear-reservacion__card">
          <h2>3. Prompt mejorado:</h2>

          <ul className="crear-reservacion__list">
            <li>
              <p>
                Créame un correo para hacer una reservación en el restaurante
                &ldquo;La Cevichería&rdquo;. Hazme todas las preguntas
                pertinentes para crear una reservación más completa y no tan
                genérica.
              </p>
            </li>
          </ul>
        </section>

        <section className="crear-reservacion__card">
          <h2>4. Preguntas de la IA:</h2>

          <p className="crear-reservacion__lead">
            ¡Claro! Para que el correo de reservación quede completo y adaptado
            exactamente a lo que necesitas, respóndeme estas preguntas y lo
            ajusto de inmediato:
          </p>

          <ol className="crear-reservacion__list crear-reservacion__list--ordered">
            <li>
              <p>
                <strong>Correo electrónico del restaurante:</strong> ¿Tienes la
                dirección de correo de &ldquo;La Cevichería&rdquo; o de alguna
                sede en específico?
              </p>
            </li>
            <li>
              <p>
                <strong>Fecha y hora:</strong> ¿Para qué día y a qué hora te
                gustaría reservar?{" "}
                <em>
                  (Por ejemplo, esta noche, el viernes o el fin de semana).
                </em>
              </p>
            </li>
            <li>
              <p>
                <strong>Número de personas:</strong> ¿Para cuántos comensales
                será la mesa?{" "}
                <em>
                  (También avísame si va algún niño y requieren silla alta).
                </em>
              </p>
            </li>
            <li>
              <p>
                <strong>Preferencia de ubicación:</strong> ¿Prefieres mesa en
                terraza/exterior, salón interior, barra o cerca de la música si
                tienen en vivo?
              </p>
            </li>
            <li>
              <p>
                <strong>Motivo o requerimiento especial:</strong> ¿Celebran
                alguna ocasión especial (cumpleaños, aniversario, reunión) o hay
                alguna alergia alimentaria, restricción o solicitud particular?
              </p>
            </li>
            <li>
              <p>
                <strong>Teléfono de contacto:</strong> ¿Qué número quieres
                incluir por si el restaurante necesita confirmar por llamada o
                WhatsApp?
              </p>
            </li>
          </ol>

          <p className="crear-reservacion__outro">
            En cuanto me des esos datos, actualizo el borrador por ti.
          </p>
        </section>

        <section className="crear-reservacion__card">
          <h2>5. Mis respuestas:</h2>

          <ul className="crear-reservacion__list">
            <li>
              <p>lacevicheria@correo.com</p>
            </li>
            <li>
              <p>Hoy, 8:00 PM</p>
            </li>
            <li>
              <p>4 personas</p>
            </li>
            <li>
              <p>
                Salón interior con una mesa lejos de las cornetas para poder
                conversar cómodamente.
              </p>
            </li>
            <li>
              <p>
                Motivo: reunión. Sin alergias alimentarias; nos gustaría contar
                con disponibilidad de ceviche picante y tizana con sangría.
              </p>
            </li>
            <li>
              <p>Teléfono de contacto: 0424-0000000</p>
            </li>
          </ul>
        </section>

        <section className="crear-reservacion__card">
          <h2>6. Correo final generado por la IA:</h2>

          <p className="crear-reservacion__lead">He redactado esto para ti.</p>

          <div className="crear-reservacion__email">
            <div className="crear-reservacion__email-meta">
              <p>
                <strong>Para:</strong> lacevicheria@correo.com
              </p>
              <p>
                <strong>Asunto:</strong> Solicitud de reservación - 4 personas -
                8:00 PM
              </p>
            </div>

            <div className="crear-reservacion__email-body">
              <p>Estimado equipo de La Cevichería,</p>
              <p>
                Les escribo para solicitar una reservación con los siguientes
                detalles:
              </p>
              <div className="crear-reservacion__email-details">
                <p>Fecha: Hoy, miércoles 25 de noviembre de 2026</p>
                <p>Hora: 8:00 PM</p>
                <p>Personas: 4 comensales</p>
                <p>
                  Ubicación preferida: Salón interior, en una mesa alejada de
                  las cornetas para poder conversar cómodamente.
                </p>
                <p>Motivo: Reunión.</p>
                <p>
                  Solicitudes especiales: Sin alergias alimentarias. Nos
                  gustaría contar con disponibilidad de ceviche picante y tizana
                  con sangría.
                </p>
              </div>
              <div className="crear-reservacion__email-details">
                <p>Nombre: Rene Rivas</p>
                <p>Teléfono de contacto: 0424-0000000</p>
              </div>
              <p>Agradezco de antemano su confirmación.</p>
              <p>
                Saludos cordiales,
                <br />
                Rene Rivas
              </p>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
