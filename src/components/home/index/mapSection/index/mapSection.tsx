import dynamic from "next/dynamic";
import { FC } from "react";
import { IMapSectionProps } from "./mapSection.types";
import { Stack } from "@mui/material";
import SearchLocationBottomSheet from "../bottomSheets/searchLocationBottomSheet";
import {
  searchLocationFormInitialValue,
  searchLocationFormValidationSchema,
} from "../bottomSheets/searchLocationBottomSheet.tools";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { searchLocation } from "@/api/searchLocation/api";

const MapPart = dynamic(() => import("../mapPart/mapPart"), {
  ssr: false,
});

const MapSection: FC<IMapSectionProps> = ({
  locationBottomSheet,
  setLocationBottomSheet,
}) => {
  //search field value
  const searchLocationMutation = useMutation({
    mutationFn: searchLocation,
    onError: () => {
      toast.error("error!!");
    },
  });

  //handle search formik
  const searchLocationFormik = useFormik({
    initialValues: searchLocationFormInitialValue,
    validationSchema: searchLocationFormValidationSchema,
    onSubmit: (values) => {
      searchLocationMutation.mutate(values, {
        onSuccess: () => {
          toast.success("success!!");
          searchLocationFormik.resetForm();
        },
      });
    },
  });

  return (
    <Stack>
      <MapPart />

      {/* bottomSheets */}
      <SearchLocationBottomSheet
        formik={searchLocationFormik}
        locationBottomSheet={locationBottomSheet}
        setLocationBottomSheet={setLocationBottomSheet}
      />
    </Stack>
  );
};

export default MapSection;
