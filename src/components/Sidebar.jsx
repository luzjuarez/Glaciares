import { useState } from 'react';
import { TOTAL_GLACIARES, TOTAL_KM2, VOTE_DATE, REFORMA } from '../data/glaciares';

function daysUntilVote() {
  const today = new Date();
  const vote = new Date(VOTE_DATE);
  const diff = Math.ceil((vote - today) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : 0;
}

function VoteBanner() {
  const [expanded, setExpanded] = useState(false);
  const days = daysUntilVote();

  return (
    <div className="vote-banner">
      <div className="vote-banner-top">
        <span className="vote-banner-icon">🗳</span>
        <div>
          <span className="vote-banner-title">VOTACIÓN EN DIPUTADOS · 8 ABRIL 2026</span>
          {days > 0 && (
            <span className="vote-countdown-inline">
              <span className="countdown-number">{days}</span> días
            </span>
          )}
        </div>
      </div>

      <p className="vote-banner-law">
        Reforma del Artículo 6° · Ley de Glaciares Nº 26.639
      </p>

      <div className="vote-summary">
        <p className="vote-summary-text">
          La reforma propone <strong>desproteger las zonas periglaciales</strong> (glaciares de roca,
          permafrost) y trasladar a las provincias la decisión de qué áreas se protegen.
        </p>
      </div>

      <button
        className="vote-expand-btn"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        {expanded ? '▲ Ocultar detalle' : '▼ ¿Qué se vota exactamente?'}
      </button>

      {expanded && (
        <div className="vote-detail">
          <div className="vote-detail-col">
            <div className="vote-detail-label vote-detail-label--ok">LEY VIGENTE protege:</div>
            <ul className="vote-detail-list">
              {REFORMA.ley_vigente.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="vote-detail-col">
            <div className="vote-detail-label vote-detail-label--warn">LA REFORMA propone:</div>
            <ul className="vote-detail-list vote-detail-list--warn">
              {REFORMA.reforma_propone.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="vote-detail-key">
            <span className="vote-detail-key-icon">❄</span>
            <p>{REFORMA.punto_clave}</p>
          </div>

          <div className="vote-detail-cases">
            <div className="vote-detail-cases-title">Proyectos que se habilitarían:</div>
            {REFORMA.proyectos_frenados.map((p) => (
              <div key={p.nombre} className="vote-case">
                <span className="vote-case-name">{p.nombre}</span>
                <span className="vote-case-empresa">{p.empresa} · {p.provincia}</span>
                {p.inversion && (
                  <span className="vote-case-inv">{p.inversion}</span>
                )}
                <span className="vote-case-estado">{p.estado_actual}</span>
              </div>
            ))}
          </div>
        </div>
      )}
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
