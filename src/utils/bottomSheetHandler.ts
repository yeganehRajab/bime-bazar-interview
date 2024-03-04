import { Dispatch, SetStateAction } from "react";

export const bottomSheetHandler = (
  setBottomSheetIsopen: Dispatch<React.SetStateAction<boolean>>
): void => setBottomSheetIsopen((prev) => !prev);
