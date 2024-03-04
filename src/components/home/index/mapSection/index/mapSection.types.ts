import { Dispatch, SetStateAction } from "react";

export interface IMapSectionProps {
  locationBottomSheet: boolean;
  setLocationBottomSheet: Dispatch<SetStateAction<boolean>>;
}
