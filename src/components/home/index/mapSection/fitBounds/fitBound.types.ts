import { IPostSarchLocationResponse } from "@/api/searchLocation/api.types";

export interface IFitBoundsProps {
  locations: IPostSarchLocationResponse[] | undefined;
  triggerFitBounds: boolean;
}
