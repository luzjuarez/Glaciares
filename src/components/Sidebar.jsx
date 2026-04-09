import { TOTAL_GLACIARES, TOTAL_KM2 } from '../data/glaciares';

function VoteBanner() {
  return (
    <div className="vote-banner">
      <div className="vote-banner-top">
        <span className="vote-banner-icon">⚖️</span>
        <div>
          <span className="vote-banner-title">APROBADA · 9 ABRIL 2026</span>
        </div>
      </div>

      <p className="vote-banner-law">
        Reforma de la Ley de Glaciares Nº 26.639
      </p>

      <p className="vote-result-tally">
        137 votos a favor · 111 en contra · 3 abstenciones
      </p>

      <div className="vote-summary">
        <p className="vote-summary-text">
          La reforma fue sancionada por el Congreso tras la aprobación en Diputados. Modifica los criterios
          de protección del ambiente periglacial y otorga a las provincias la potestad de definir qué áreas
          se protegen mediante estudios técnicos propios.
        </p>
        <p className="vote-summary-text vote-summary-text--secondary">
          La oposición anticipó que la norma será judicializada por inconstitucional y regresiva en materia
          ambiental.
        </p>
      </div>

      <a
        className="vote-result-link"
        href="https://www.infobae.com/politica/2026/04/09/uno-por-uno-como-voto-cada-diputado-a-la-reforma-de-la-ley-de-glaciares/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver cómo votó cada diputado →
      </a>
    </div>
  );
}

export default function Sidebar({ provinces, selected, onSelect }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 24 L10 14 L14 18 L19 8 L24 16 L28 12 L28 24 Z"
                fill="#4ecde6"
                opacity="0.9"
              />
              <path
                d="M4 24 L10 14 L14 18 L19 8 L24 16 L28 12 L28 24 Z"
                fill="none"
                stroke="#4ecde6"
                strokeWidth="1"
              />
            </svg>
          </div>
          <div>
            <h1 className="sidebar-title">Glaciares Argentinos</h1>
            <p className="sidebar-subtitle">
              Inventario Nacional de Glaciares
              <br />
              IANIGLA / CONICET · 2018
            </p>
          </div>
        </div>

        <div className="stat-cards">
          <div className="stat-card">
            <span className="stat-value">{TOTAL_GLACIARES.toLocaleString('es-AR')}</span>
            <span className="stat-label">cuerpos de hielo</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">{TOTAL_KM2.toLocaleString('es-AR')}</span>
            <span className="stat-label">km² superficie total</span>
          </div>
        </div>

        <VoteBanner />
      </div>

      <div className="province-list-header">
        <span>12 provincias con glaciares</span>
        <span className="province-list-hint">Seleccioná para ver impacto</span>
      </div>

      <ul className="province-list">
        {provinces.map((p) => {
          const isSelected = selected?.id === p.id;
          return (
            <li key={p.id}>
              <button
                className={`province-item ${isSelected ? 'province-item--selected' : ''} ${p.conflicto.active ? 'province-item--conflict' : ''}`}
                onClick={() => onSelect(isSelected ? null : p)}
              >
                <div className="province-item-main">
                  <div className="province-item-name-row">
                    <span className="province-item-name">{p.name}</span>
                    {p.conflicto.active && (
                      <span className="conflict-badge" title="Conflicto minero/extractivo">⚠</span>
                    )}
                  </div>
                  <span className="province-item-region">{p.region}</span>
                </div>
                <div className="province-item-stats">
                  <span className="province-item-km2">{p.km2.toLocaleString('es-AR')} km²</span>
                  <span className="province-item-pct">{p.pct}%</span>
                </div>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="sidebar-footer">
        Fuente: IANIGLA/CONICET · ING 2018 · Población: INDEC Censo 2022
      </div>
    </aside>
  );
}
