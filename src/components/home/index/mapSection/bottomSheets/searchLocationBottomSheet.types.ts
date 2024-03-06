import { Dispatch, SetStateAction } from "react";
import { FormikProps } from "formik";
import { ISelectOptions } from "@/types/style.types";

export interface ISearchLocationFormik {
  search: string;
  period: ISelectOptions | null;
}

export interface ISearchBottomSheetProps {
  loading: boolean;
  locationBottomSheet: boolean;
  formik: FormikProps<ISearchLocationFormik>;
  setLocationBottomSheet: Dispatch<SetStateAction<boolean>>;
}
