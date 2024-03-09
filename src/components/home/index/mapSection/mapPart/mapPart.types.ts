import { IPostSarchLocationResponse } from "@/api/searchLocation/api.types";
import L from "leaflet";

// export const myLocationMarker = new L.Icon({
//   iconUrl: "/images/mapSection/location-marker.png",
//   iconRetinaUrl: "/images/mapSection/location-marker.png",
//   iconAnchor: undefined,
//   shadowUrl: undefined,
//   shadowSize: undefined,
//   shadowAnchor: undefined,
//   iconSize: new L.Point(30, 30),
// });

export interface IMapPartProps {
  searchLocationData: IPostSarchLocationResponse[] | undefined;
  fitBoundsTrigger: boolean;
}
