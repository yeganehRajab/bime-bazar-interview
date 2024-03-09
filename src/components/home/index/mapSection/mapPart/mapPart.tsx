import { flyTo } from "@/utils/map/map";
import { Map } from "leaflet";
import { FC, useEffect, useMemo, useRef } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { IMapPartProps } from "./mapPart.types";
import FitBounds from "../fitBounds/fitbounds";
import MapPopup from "../mapPopup/mapPopup";
import L from "leaflet";
import {
  MAP_INITIAL_COORDINATE,
  MAP_INITIAL_TILE,
  MAP_INITIAL_ZOOM,
} from "./mapPart.constant";
import styles from "./mapPart.styles";

const MapPart: FC<IMapPartProps> = ({
  searchLocationData,
  fitBoundsTrigger,
}) => {
  // get reference of map section
  const mapRef = useRef<Map>(null);

  //memoize rendered centers
  const renderedCenters = useMemo(() => {
    return searchLocationData?.map((center, index) => (
      <Marker
        key={`centers-on-map-${index}`}
        // icon={myLocationMarker}
        icon={L.divIcon({
          className: "pin",
          html: `<div>${index + 1}</div>`,
          iconSize: new L.Point(30, 30),
        })}
        position={[+center.lat, +center.lng]}
      >
        <MapPopup
          address={center.address}
          name={center.name}
          phoneNumber={center.phoneNumber}
        />
      </Marker>
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
    <>
      <MapContainer
        center={[MAP_INITIAL_COORDINATE.LAT, MAP_INITIAL_COORDINATE.LNG]}
        zoom={MAP_INITIAL_ZOOM.ZOOM}
        style={styles.containerSx()}
        ref={mapRef}
      >
        <TileLayer url={MAP_INITIAL_TILE.URL} />

        {renderedCenters}

        <FitBounds
          locations={searchLocationData}
          triggerFitBounds={fitBoundsTrigger}
        />
      </MapContainer>
    </>
  );
};

export default MapPart;
