import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { mapSectionStyles } from "./mapSection.styles";

const MapSection = () => {
  const zoom = 13;

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={zoom}
      style={mapSectionStyles.containerSx()}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[51.505, -0.09]}>
        <Popup></Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapSection;
