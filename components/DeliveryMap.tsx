"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";
import DeliveryCitiesSlider from "./Slider"; 
// 🔧 Fix default marker icon in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// 🇵🇰 Pakistan-only bounds
const pakistanBounds: [[number, number], [number, number]] = [
  [23.5, 60.5],
  [37.5, 77.5],
];

// 📍 All delivery cities (Urdu)
const deliveryCities = [
  { name: "کراچی", coords: [24.8607, 67.0011] },
  { name: "لاہور", coords: [31.5204, 74.3587] },
  { name: "گوجرانوالہ", coords: [32.1877, 74.1945] },
  { name: "وزیرآباد", coords: [32.4458, 74.1159] },
  { name: "گجرات", coords: [32.5731, 74.0789] },
  { name: "لالہ موسیٰ", coords: [32.7014, 73.9572] },
  { name: "کھاریاں", coords: [32.8161, 73.8860] },
  { name: "جہلم", coords: [32.9334, 73.7266] },
  { name: "دینہ", coords: [32.9360, 73.6583] },
  { name: "سرائے عالمگیر", coords: [32.9046, 73.7520] },
  { name: "سیالکوٹ", coords: [32.4945, 74.5229] },
  { name: "راولپنڈی", coords: [33.5651, 73.0169] },
  { name: "اسلام آباد", coords: [33.6844, 73.0479] },
  { name: "چکوال", coords: [32.9311, 72.8577] },
  { name: "جھنگ", coords: [31.2731, 72.3240] },
  { name: "سرگودھا", coords: [32.0836, 72.6711] },
  { name: "فیصل آباد", coords: [31.4504, 73.1350] },
  { name: "اوکاڑہ", coords: [30.8103, 73.4594] },
  { name: "ساہیوال", coords: [30.6682, 73.1114] },
  { name: "ملتان", coords: [30.1575, 71.5249] },
  { name: "بہاولپور", coords: [29.3956, 71.6836] },
  { name: "رحیم یار خان", coords: [28.4202, 70.2952] },
  { name: "میانوالی", coords: [32.5776, 71.5285] },
  { name: "بھکر", coords: [31.6333, 71.0667] },
  { name: "اٹک", coords: [33.7737, 72.3621] },
  { name: "ایبٹ آباد", coords: [34.1463, 73.2117] },
  { name: "مانسہرہ", coords: [34.3333, 73.2000] },
  { name: "ہری پور", coords: [33.9990, 72.9346] },
  { name: "ہٹار انڈسٹریل اسٹیٹ", coords: [33.8703, 72.7397] },
  { name: "کوئٹہ", coords: [30.1798, 66.9750] },
  { name: "میرپور (آزاد کشمیر)", coords: [33.1478, 73.7514] },
];

// 🎯 Auto-fit bounds to all cities
function FitBounds() {
  const map = useMap();

  useEffect(() => {
    const bounds = L.latLngBounds(
      deliveryCities.map((c) => c.coords as [number, number])
    );
    map.fitBounds(bounds, { padding: [40, 40] });
  }, [map]);

  return null;
}

export default function DeliveryMap() {
  return (
    <>
    <div className="w-full h-[550px] rounded-xl overflow-hidden shadow-lg z-10">
      <MapContainer
        bounds={pakistanBounds}
        minZoom={5}
        maxZoom={10}
        maxBounds={pakistanBounds}
        maxBoundsViscosity={1}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap"
        />

        <FitBounds />

        {deliveryCities.map((city, index) => (
          <Marker key={index} position={city.coords as any}>
            <Tooltip direction="top" offset={[0, -15]}>
              <span className="font-semibold">{city.name}</span>
              <br />
              ہم یہاں ڈیلیوری کرتے ہیں
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
    
    <DeliveryCitiesSlider />
    </>
  );
}
