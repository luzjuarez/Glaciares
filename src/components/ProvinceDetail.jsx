import { TOTAL_KM2 } from '../data/glaciares';

function fmt(n) {
  return Number(n).toLocaleString('es-AR');
}

function ProtectionBar({ km2, periglacial_km2_est, desproteccion_pct_est }) {
  const total = km2 + periglacial_km2_est;
  const glaciarPct = Math.round((km2 / total) * 100);
  const periglacialPct = 100 - glaciarPct;

  return (
    <div className="prot-section">
      <div className="prot-scenario">
        <div className="prot-scenario-label prot-label--ok">
          <span className="prot-dot prot-dot--cyan" />
          Ley vigente — todo protegido
        </div>
        <div className="prot-bar-track">
          <div className="prot-bar-fill prot-bar-fill--cyan" style={{ width: '100%' }} />
        </div>
        <span className="prot-bar-value">
          {fmt(km2 + periglacial_km2_est)} km² protegidos
        </span>
      </div>

      <div className="prot-scenario">
        <div className="prot-scenario-label prot-label--warn">
          <span className="prot-dot prot-dot--red" />
          Con la reforma — solo glaciares de hielo
        </div>
        <div className="prot-bar-track">
          <div className="prot-bar-fill prot-bar-fill--cyan" style={{ width: `${glaciarPct}%` }} />
          <div className="prot-bar-fill prot-bar-fill--danger" style={{ width: `${periglacialPct}%` }} />
        </div>
        <span className="prot-bar-value prot-bar-value--warn">
          ~{desproteccion_pct_est}% del criosfera total quedaría desprotegida
        </span>
      </div>

      <p className="prot-disclaimer">
        * Zona periglacial estimada (~{fmt(periglacial_km2_est)} km²) según metodología ING/IANIGLA.
        Los glaciares de roca no son visibles como hielo pero almacenan más agua en zonas áridas.
      </p>
    </div>
  );
}

export default function ProvinceDetail({ province, onClose }) {
  const {
    name, region, glaciares, km2, pct, cuencas, notables,
    poblacion, agua_usos, periglacial_km2_est, desproteccion_pct_est,
    reforma_impacto, conflicto,
  } = province;

  return (
    <div className="province-detail" role="dialog" aria-label={`Detalle ${name}`}>
      <button className="detail-close" onClick={onClose} aria-label="Cerrar panel">✕</button>

      <div className="detail-header">
        <h2 className="detail-title">{name}</h2>
        <span className="detail-region">{region}</span>
      </div>

      {/* Stat grid */}
      <div className="detail-stats-grid">
        <div className="detail-stat">
          <span className="detail-stat-value">{fmt(glaciares)}</span>
          <span className="detail-stat-label">cuerpos de hielo</span>
        </div>
        <div className="detail-stat">
          <span className="detail-stat-value">{fmt(km2)}</span>
          <span className="detail-stat-label">km² de hielo</span>
        </div>
        <div className="detail-stat">
          <span className="detail-stat-value">{fmt(poblacion)}</span>
          <span className="detail-stat-label">habitantes (INDEC 2022)</span>
        </div>
        <div className="detail-stat">
          <span className="detail-stat-value">{pct}%</span>
          <span className="detail-stat-label">del inventario nacional</span>
        </div>
        <div className="detail-stat detail-stat--full">
          <div className="detail-bar-container">
            <div className="detail-bar-fill" style={{ width: `${Math.min(pct, 100)}%` }} />
          </div>
          <span className="detail-stat-label">
            {pct}% del total nacional ({fmt(TOTAL_KM2)} km²)
          </span>
        </div>
      </div>

      {/* Cuencas */}
      <div className="detail-section">
        <h3 className="detail-section-title">Cuencas principales</h3>
        <ul className="detail-cuencas">
          {cuencas.map((c) => <li key={c}>{c}</li>)}
        </ul>
        {notables && <p className="detail-notables">{notables}</p>}
      </div>

      {/* Usos del agua */}
      <div className="detail-section">
        <h3 className="detail-section-title">¿Para qué se usa esta agua?</h3>
        <ul className="detail-cuencas">
          {agua_usos.map((u) => <li key={u}>{u}</li>)}
        </ul>
      </div>

      {/* Impacto de la reforma */}
      <div className="detail-section">
        <h3 className="detail-section-title detail-section-title--reform">
          Impacto si avanza la reforma
        </h3>
        <ProtectionBar
          km2={km2}
          periglacial_km2_est={periglacial_km2_est}
          desproteccion_pct_est={desproteccion_pct_est}
        />
        <p className="reforma-impacto-text">{reforma_impacto}</p>
      </div>

      {/* Conflicto minero */}
      {conflicto.active && (
        <div className="detail-conflicto">
          <div className="detail-conflicto-header">
            <span className="detail-conflicto-icon">⚠</span>
            <span className="detail-conflicto-title">Conflicto minero / extractivo activo</span>
          </div>
          <p className="detail-conflicto-text">{conflicto.descripcion}</p>
        </div>
      )}
    </div>
  );
}
