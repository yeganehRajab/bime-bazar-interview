import * as Yup from "yup";
import { ISearchLocationFormik } from "./searchLocationBottomSheet.types";

export const searchLocationFormInitialValue: ISearchLocationFormik = {
  search: "",
  period: null,
};

export const searchLocationFormValidationSchema = Yup.object({
  search: Yup.string().required("متن جستجو را وارد کنید."),
  period: Yup.object().required("مدت زمان جستجو را انتخاب کنید."),
});
