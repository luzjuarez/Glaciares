import { useState } from 'react';
import Sidebar from './components/Sidebar';
import MapView from './components/MapView';
import ProvinceDetail from './components/ProvinceDetail';
import { PROVINCES } from './data/glaciares';

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="app">
      <Sidebar provinces={PROVINCES} selected={selected} onSelect={setSelected} />
      <div className="map-wrapper">
        <MapView provinces={PROVINCES} selected={selected} onSelect={setSelected} />
        {selected && (
          <ProvinceDetail province={selected} onClose={() => setSelected(null)} />
        )}
      </div>
    </div>
  );
}
