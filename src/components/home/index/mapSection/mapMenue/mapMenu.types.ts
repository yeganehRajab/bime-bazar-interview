import { ISearchLocationFormik } from "../bottomSheets/searchLocationBottomSheet.types";
import { FormikProps } from "formik";

export interface IMapMenuProps {
  setSearchLocationBottomSheet: React.Dispatch<React.SetStateAction<boolean>>;
}
