import { searchLocation } from "@/api/searchLocation/api";
import { Stack } from "@mui/material";
import { useFormik } from "formik";
import dynamic from "next/dynamic";
import { FC, useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import SearchLocationBottomSheet from "../bottomSheets/searchLocationBottomSheet";
import {
  searchLocationFormInitialValue,
  searchLocationFormValidationSchema,
} from "../bottomSheets/searchLocationBottomSheet.tools";
import MapMenu from "../mapMenue/mapMenu";

const MapPart = dynamic(() => import("../mapPart/mapPart"), {
  ssr: false,
});

const MapSection: FC = () => {
  const [locationBottomSheetIsOpen, setLocationBottomSheetIsopen] =
    useState<boolean>(false);

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

      {/* map menu */}
      <MapMenu
        searchLocationFormFormik={searchLocationFormik}
        setSearchLocationBottomSheet={setLocationBottomSheetIsopen}
      />

      {/* bottomSheets */}
      <SearchLocationBottomSheet
        formik={searchLocationFormik}
        locationBottomSheet={locationBottomSheetIsOpen}
        setLocationBottomSheet={setLocationBottomSheetIsopen}
        loading={searchLocationMutation.isLoading}
      />
    </Stack>
  );
};

export default MapSection;
