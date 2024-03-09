import { flyTo } from "@/utils/map/map";
import { Map } from "leaflet";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import MapPopup from "../mapPopup/mapPopup";
import {
  MAP_INITIAL_COORDINATE,
  MAP_INITIAL_TILE,
  MAP_INITIAL_ZOOM,
} from "./mapPart.constant";
import styles from "./mapPart.styles";
import { IMapPartProps, myLocationMarker } from "./mapPart.types";
import FitBounds from "../fitBounds/fitbounds";
import { IconButton } from "@mui/material";
import GpsFixedRoundedIcon from "@mui/icons-material/GpsFixedRounded";

const MapPart: FC<IMapPartProps> = ({ searchLocationData }) => {
  const mapRef = useRef<Map>(null);
  const [fitBoundsTrigger, setFitBoundsTrigger] = useState<boolean>(false);

  //memoize centers
  const renderedCenters = useMemo(() => {
    return searchLocationData?.map((center, index) => (
      <Marker
        key={`centers-on-map-${index}`}
        icon={myLocationMarker}
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

  // Function to toggle fit bounds trigger
  const showAllLocations = () => {
    setFitBoundsTrigger((prev) => !prev);
  };

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

      <IconButton sx={styles.showAllButtonsSx()} onClick={showAllLocations}>
        <GpsFixedRoundedIcon />
      </IconButton>
    </>
  );
};

export default MapPart;
