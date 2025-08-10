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
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix marker icon bug in Vite/React Leaflet
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Component to fix map size rendering issues
const ResizeMap = () => {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 0);
  }, [map]);
  return null;
};

const position = [21.42722, 92.00500];

const Map = () => {
  return (
    <div className="flex justify-center w-11/12 mx-auto my-10">
      <MapContainer 
        center={position} 
        zoom={13} 
        className="shadow-lg rounded-lg" 
        style={{ height: "500px", width: "80%" }}
      >
        <ResizeMap />
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
    </div>
  );
};

export default Map;
