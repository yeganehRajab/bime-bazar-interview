import { Dispatch, SetStateAction } from "react";
import { FormikProps } from "formik";

export interface ISearchLocationFormik {
  search: string;
}

export interface ISearchBottomSheetProps {
  loading: boolean;
  locationBottomSheet: boolean;
  formik: FormikProps<ISearchLocationFormik>;
  setLocationBottomSheet: Dispatch<SetStateAction<boolean>>;
}
