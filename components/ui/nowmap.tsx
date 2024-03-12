import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { Popup } from "react-leaflet";
import { useState } from "react";
export default function Map() {
  const [geoData, setGeoData] = useState({ lat: 43.4723, lng: -80.5449 });
  return (
    <MapContainer
      center={[geoData.lat, geoData.lng]}
      zoom={10}
      style={{ height: "25vh" }}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geoData.lat && geoData.lng && (
        <Marker position={[geoData.lat, geoData.lng]} />
      )}
    </MapContainer>
  );
}
