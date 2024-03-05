import * as Yup from "yup";
import { ISearchLocationFormik } from "./searchLocationBottomSheet.types";

export const searchLocationFormInitialValue: ISearchLocationFormik = {
  search: "",
};

export const searchLocationFormValidationSchema = Yup.object({
  search: Yup.string().required("Email is required"),
});
