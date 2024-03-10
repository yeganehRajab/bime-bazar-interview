import { IPostSearchLocationResponse } from '@/api/searchLocation/api.types';

export interface IFitBoundsProps {
  locations: IPostSearchLocationResponse[] | undefined;
  triggerFitBounds: boolean;
}
