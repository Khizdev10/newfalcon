"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker icon issue in Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function LocationMap() {
  return (
    <section className="w-full h-screen">
      <MapContainer
        center={[30.3753, 69.3451]} // Pakistan center
        zoom={6}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        {/* Dark Theme Map */}
        <TileLayer
          attribution="© OpenStreetMap"
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {/* Business Location Marker */}
        <Marker position={[33.6844, 73.0479]}> {/* Example: Islamabad */}
          <Popup>
            <strong>New Falcon Hazara</strong>
            <br />
            Nationwide Transport Services
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}
