import { Dispatch, SetStateAction } from "react";
import { FormikProps } from "formik";

export interface ISearchLocationFormik {
  search: string;
}

export interface ISearchBottomSheetProps {
  formik: FormikProps<ISearchLocationFormik>;
  locationBottomSheet: boolean;
  setLocationBottomSheet: Dispatch<SetStateAction<boolean>>;
}
