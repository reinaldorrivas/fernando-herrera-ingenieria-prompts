import "./CompletarSecuencias.css";

export function CompletarSecuencias() {
  return (
    <article className="completar-secuencias">
      <header className="completar-secuencias__header">
        <h1>Completar secuencias</h1>
        <p className="completar-secuencias__intro">
          Comparación entre las respuestas humanas y las predicciones generadas
          por la IA al completar patrones.
        </p>
      </header>

      <div className="completar-secuencias__sections">
        <section className="exercise-card">
          <h2>Completa lo que sigue:</h2>

          <ul className="exercise-list">
            <li>
              <p>Agua, aire, fuego, ___.</p>
            </li>
            <li>
              <p>Líquido, sólido, gaseoso, ___.</p>
            </li>
            <li>
              <p>Rojo, anaranjado, verde, azul, índigo, ___.</p>
            </li>
            <li>
              <p>Manzana, pera, banana, ___.</p>
            </li>
            <li>
              <p>Pichu, Pikachu, ___.</p>
            </li>
          </ul>
        </section>

        <section className="exercise-card">
          <h2>Mis respuestas:</h2>

          <ul className="exercise-list">
            <li>
              <p>Agua, aire, fuego, tierra.</p>
            </li>
            <li>
              <p>Líquido, sólido, gaseoso, plasma.</p>
            </li>
            <li>
              <p>Rojo, anaranjado, verde, azul, índigo, morado.</p>
            </li>
            <li>
              <p>Manzana, pera, banana, piña.</p>
            </li>
            <li>
              <p>Pichu, Pikachu, Raichu.</p>
            </li>
          </ul>
        </section>

        <section className="exercise-card">
          <h2>Respuesta de la IA:</h2>

          <ul className="exercise-list">
            <li>
              <p>Agua, aire, fuego, tierra (los cuatro elementos clásicos).</p>
            </li>
            <li>
              <p>
                Líquido, sólido, gaseoso, plasmático / plasma (los cuatro
                estados fundamentales de la materia).
              </p>
            </li>
            <li>
              <p>
                Rojo, anaranjado, verde, azul, índigo, violeta (los colores del
                arcoíris en orden; aunque en la secuencia también faltaría el
                amarillo entre el anaranjado y el verde).
              </p>
            </li>
            <li>
              <p>
                Manzana, pera, banana, naranja (o cualquier otra fruta común como
                uva, fresa o durazno).
              </p>
            </li>
            <li>
              <p>Pichu, Pikachu, Raichu (la línea evolutiva de este Pokémon).</p>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
