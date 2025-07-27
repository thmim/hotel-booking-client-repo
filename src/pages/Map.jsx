import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const position = [21.42722, 92.00500]
const Map = () => {
    return (
        <MapContainer className='mx-auto my-10' center={position} zoom={13} style={{ height: "500px", width: "80%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <Marker position={position}>
        <Popup>
          This is Grand Vista Hotel – Cox's Bazar, !
        </Popup>
      </Marker>
    </MapContainer>
    );
};

export default Map;