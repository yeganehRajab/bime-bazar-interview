import { searchLocation } from "@/api/searchLocation/api";
import { convertMtoMS } from "@/utils/time/convertMtoMS";
import { Stack } from "@mui/material";
import { useFormik } from "formik";
import dynamic from "next/dynamic";
import { FC, useEffect, useState } from "react";
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
  const [locationBottomSheetIsOpen, setLocationBottomSheetIsOpen] =
    useState<boolean>(false);

  //search field value
  const {
    data: searchLocationData,
    mutate: searchLocationMutation,
    isLoading: searchLocationMutationiIsLoading,
  } = useMutation({
    mutationKey: ["searchedLocation"],
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
      searchLocationMutation(
        { search: values.search },
        {
          onSuccess: () => {
            toast.success("success!!");
            setLocationBottomSheetIsOpen(false);
          },
        }
      );
    },
  });

  //handle refetch data in specific period
  useEffect(() => {
    if (
      !!searchLocationFormik.values.period?.value &&
      searchLocationFormik.values.period?.value !== 0
    ) {
      setInterval(
        () =>
          searchLocationMutation(
            { search: searchLocationFormik.values.search ?? "" },
            {
              onSuccess: () => {
                //mut fly to new lat and lang
                //TODO:if need --- check with real api
              },
            }
          ),
        convertMtoMS(searchLocationFormik.values.period?.value)
      );
    }
  }, [searchLocationFormik.values.period]);

  return (
    <Stack>
      <MapPart searchLocationData={searchLocationData} />

      {/* map menu */}
      <MapMenu setSearchLocationBottomSheet={setLocationBottomSheetIsOpen} />

      {/* bottomSheets */}
      <SearchLocationBottomSheet
        formik={searchLocationFormik}
        locationBottomSheet={locationBottomSheetIsOpen}
        setLocationBottomSheet={setLocationBottomSheetIsOpen}
        loading={searchLocationMutationiIsLoading}
      />
    </Stack>
  );
};

export default MapSection;
