import { Dispatch, SetStateAction } from "react";

export interface ISearchBottomSheetProps {
  locationBottomSheet: boolean;
  setLocationBottomSheet: Dispatch<SetStateAction<boolean>>;
}
