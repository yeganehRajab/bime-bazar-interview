import { ZoomPanOptions } from "leaflet";

import { IFlyProps } from "./map.types";

export const flyTo = ({ mapRef, latLng, zoom, options }: IFlyProps): void => {
  const _options: ZoomPanOptions = {
    animate: true,
    duration: 0.5,
    ...options,
  };

  mapRef.current?.flyTo(latLng, zoom, _options);
};
