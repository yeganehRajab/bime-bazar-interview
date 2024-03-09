import React, { FC, useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import { IFitBoundsProps } from "./fitBound.types";

const FitBounds: FC<IFitBoundsProps> = ({ locations, triggerFitBounds }) => {
  const map = useMap();

  useEffect(() => {
    if (locations && locations.length > 0 && triggerFitBounds) {
      const bounds = L.latLngBounds(
        locations.map((loc) => [+loc.lat, +loc.lng])
      );
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [locations, map, triggerFitBounds]);

  return null;
};

export default FitBounds;
