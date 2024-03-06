import { flyTo } from "@/utils/map/map";
import { Map } from "leaflet";
import { FC, useEffect, useMemo, useRef } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { mapSectionStyles } from "./mapPart.styles";
import { IMapPartProps, myLocationMarker } from "./mapPart.types";
import {
  MAP_INITIAL_COORDINATE,
  MAP_INITIAL_TILE,
  MAP_INITIAL_ZOOM,
} from "./mapPart.constant";

const MapPart: FC<IMapPartProps> = ({ searchLocationData }) => {
  const mapRef = useRef<Map>(null);

  //memoize centers
  const renderedCenters = useMemo(() => {
    return searchLocationData?.map((center, index) => (
      <Marker
        key={`centers-on-map-${index}`}
        icon={myLocationMarker}
        position={[+center.lat, +center.lng]}
      />
    ));
  }, [searchLocationData]);

  // Trigger fly to when location changes
  useEffect(() => {
    if (searchLocationData) {
      const lastDataLength = searchLocationData.length - 1;
      flyTo({
        latLng: [
          +searchLocationData[lastDataLength].lat,
          +searchLocationData[lastDataLength].lng,
        ],
        mapRef,
      });
    }
  }, [searchLocationData]);

  return (
    <MapContainer
      center={[MAP_INITIAL_COORDINATE.LAT, MAP_INITIAL_COORDINATE.LNG]}
      zoom={MAP_INITIAL_ZOOM.ZOOM}
      style={mapSectionStyles.containerSx()}
      ref={mapRef}
    >
      <TileLayer url={MAP_INITIAL_TILE.URL} />

      {renderedCenters}
    </MapContainer>
  );
};

export default MapPart;
