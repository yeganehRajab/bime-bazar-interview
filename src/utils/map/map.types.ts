import { LatLngExpression, Map, ZoomPanOptions } from "leaflet";

import { RefObject } from "react";

export interface IFlyProps {
  mapRef: RefObject<Map>;
  latLng: LatLngExpression;
  zoom?: number | undefined;
  options?: ZoomPanOptions | undefined;
}
