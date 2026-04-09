import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';

const TILE_URL =
  'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png';
const TILE_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

const LOG_MIN = Math.log(9.5);
const LOG_MAX = Math.log(3421);

function markerRadius(km2) {
  const normalized = (Math.log(Math.max(km2, 9.5)) - LOG_MIN) / (LOG_MAX - LOG_MIN);
  return Math.round(10 + normalized * 32);
}

function createIcon(radius, isSelected, hasConflict) {
  const color = hasConflict ? '#f87171' : '#4ecde6';
  const size = radius * 2;
  const glowColor = hasConflict ? 'rgba(248,113,113,0.4)' : 'rgba(78,205,230,0.4)';
  const selectedStyle = isSelected
    ? `box-shadow:0 0 0 3px ${color}, 0 0 20px ${glowColor};`
    : '';

  return L.divIcon({
    html: `
      <div style="width:${size}px;height:${size}px;position:relative;display:flex;align-items:center;justify-content:center;">
        <div class="pulse-ring" style="width:${size}px;height:${size}px;border-color:${color};position:absolute;border-radius:50%;border:2px solid;opacity:0.7;"></div>
        <div style="width:${radius}px;height:${radius}px;border-radius:50%;background:${color};opacity:0.85;transition:all 0.2s;${selectedStyle}"></div>
      </div>
    `,
    className: '',
    iconSize: [size, size],
    iconAnchor: [radius, radius],
  });
}

function MarkersLayer({ provinces, selected, onSelect }) {
  const map = useMap();
  const markersRef = useRef({});

  useEffect(() => {
    // Clear existing markers
    Object.values(markersRef.current).forEach((m) => m.remove());
    markersRef.current = {};

    provinces.forEach((p) => {
      const radius = markerRadius(p.km2);
      const isSelected = selected?.id === p.id;
      const icon = createIcon(radius, isSelected, p.conflicto.active);

      const marker = L.marker(p.coords, { icon })
        .addTo(map)
        .on('click', () => onSelect(isSelected ? null : p));

      markersRef.current[p.id] = marker;
    });

    return () => {
      Object.values(markersRef.current).forEach((m) => m.remove());
    };
  }, [provinces, selected, onSelect, map]);

  // Fly to selected province
  useEffect(() => {
    if (selected) {
      map.flyTo(selected.coords, 7, { duration: 1.2 });
    } else {
      map.flyTo([-40, -68], 5, { duration: 1 });
    }
  }, [selected, map]);

  return null;
}

export default function MapView({ provinces, selected, onSelect }) {
  return (
    <MapContainer
      center={[-40, -68]}
      zoom={5}
      zoomControl={false}
      className="leaflet-map"
      attributionControl={true}
    >
      <TileLayer url={TILE_URL} attribution={TILE_ATTRIBUTION} />
      <MarkersLayer provinces={provinces} selected={selected} onSelect={onSelect} />
    </MapContainer>
  );
}
