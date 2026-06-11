'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const markerIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const center: [number, number] = [-6.2262, 106.8098];

export default function MapComponent() {
  return (
    <div
     className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg border border-[#C5C5D3]">
      <MapContainer 
        center={center} 
        zoom={15} 
        scrollWheelZoom={false}
        className="w-full h-full"
        style={{ height: '100%', width: '100%', zIndex: 1 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} icon={markerIcon}>
          <Popup>
            <div className="p-1 font-sans">
              <strong className="block text-[#00236F] font-semibold text-sm mb-1">
                Kantor Pusat ProService
              </strong>
              <p className="text-xs text-[#444651] leading-relaxed">
                Gedung Sudirman Lantai 42,<br />
                Sudirman Central Business District,<br />
                Jakarta Selatan
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
