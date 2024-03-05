import { ISearchLocationFormik } from "../bottomSheets/searchLocationBottomSheet.types";
import { FormikProps } from "formik";

export interface IMapMenuProps {
  searchLocationFormFormik: FormikProps<ISearchLocationFormik>;
  setSearchLocationBottomSheet: React.Dispatch<React.SetStateAction<boolean>>;
}
