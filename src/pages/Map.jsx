// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// const position = [21.42722, 92.00500]
// const Map = () => {
//     return (
//         <MapContainer className='mx-auto my-10' center={position} zoom={13} style={{ height: "500px", width: "80%" }}>
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; OpenStreetMap contributors'
//       />
//       <Marker position={position}>
//         <Popup>
//           This is Grand Vista Hotel – Cox's Bazar, !
//         </Popup>
//       </Marker>
//     </MapContainer>
//     );
// };

// export default Map;
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix missing marker icons in React Leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const position = [21.42722, 92.00500];

const Map = () => {
  return (
    <MapContainer 
      center={position} 
      zoom={13} 
      style={{ height: "500px", width: "80%" }} 
      className="mx-auto my-10"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <Marker position={position}>
        <Popup>
          This is Grand Vista Hotel – Cox's Bazar!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
