import dynamic from "next/dynamic";
import { FC } from "react";
import { IMapSectionProps } from "./mapSection.types";
import { Stack } from "@mui/material";
import SearchLocationBottomSheet from "../bottomSheets/searchLocationBottomSheet";

const MapPart = dynamic(() => import("../mapPart/mapPart"), {
  ssr: false,
});

const MapSection: FC<IMapSectionProps> = ({
  locationBottomSheet,
  setLocationBottomSheet,
}) => {
  return (
    <Stack>
      <MapPart />

      {/* bottomSheets */}
      <SearchLocationBottomSheet
        locationBottomSheet={locationBottomSheet}
        setLocationBottomSheet={setLocationBottomSheet}
      />
    </Stack>
  );
};

export default MapSection;
