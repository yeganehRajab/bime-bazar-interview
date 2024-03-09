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
import ShowAllLocationsButton from "../showAllLocationsButton/showAllLocationsButton";

const MapPart = dynamic(() => import("../mapPart/mapPart"), {
  ssr: false,
});

const MapSection: FC = () => {
  // location bottom sheet handler state
  const [locationBottomSheetIsOpen, setLocationBottomSheetIsOpen] =
    useState<boolean>(false);
  // bounds fitter state
  const [fitBoundsTrigger, setFitBoundsTrigger] = useState<boolean>(false);
  //handle tracking the locations
  const [isTrackingLocation, setIsTrackingLocations] = useState<boolean>(false);
  // Interval reference
  const [intervalRef, setIntervalRef] = useState<NodeJS.Timeout | null>(null);

  // Function to toggle fit bounds trigger
  const showAllLocations = () => {
    setFitBoundsTrigger((prev) => !prev);
    setIsTrackingLocations((prev) => !prev);
  };

  //search field value
  const {
    data: searchLocationData,
    mutate: searchLocationMutation,
    isLoading: searchLocationMutationIsLoading,
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
            setIsTrackingLocations(true);
            setLocationBottomSheetIsOpen(false);
          },
        }
      );
    },
  });

  //if has Tracking
  const hasTracking =
    !!searchLocationFormik.values.period?.value &&
    searchLocationFormik.values.period?.value !== 0;

  //handle refetch data in specific period
  useEffect(() => {
    if (hasTracking) {
      if (isTrackingLocation) {
        const intervalId = setInterval(
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
          convertMtoMS(searchLocationFormik.values.period?.value as number)
        );
        setIntervalRef(intervalId);
      } else {
        // Clear interval if tracking is stopped
        if (intervalRef) {
          clearInterval(intervalRef);
          setIntervalRef(null);
        }
      }
    }
  }, [searchLocationFormik.values.period, isTrackingLocation]);

  return (
    <Stack>
      {/* map */}
      <MapPart
        searchLocationData={searchLocationData}
        fitBoundsTrigger={fitBoundsTrigger}
      />

      {/* map menu */}
      <MapMenu setSearchLocationBottomSheet={setLocationBottomSheetIsOpen} />

      {/* search location bottomSheets */}
      <SearchLocationBottomSheet
        formik={searchLocationFormik}
        locationBottomSheet={locationBottomSheetIsOpen}
        setLocationBottomSheet={setLocationBottomSheetIsOpen}
        loading={searchLocationMutationIsLoading}
      />

      {/* show all locations buttons*/}
      {hasTracking && (
        <ShowAllLocationsButton
          onClick={showAllLocations}
          isTrackingLocation={isTrackingLocation}
        />
      )}
    </Stack>
  );
};

export default MapSection;
