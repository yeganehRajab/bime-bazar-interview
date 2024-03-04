import MapSection from "@/components/home/index/mapSection/index/mapSection";
import MapMenu from "@/components/home/index/mapSection/mapMenue/mapMenu";
import { Stack } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [locationBottomSheetIsOpen, setLocationBottomSheetIsopen] =
    useState<boolean>(false);

  return (
    <Stack direction={"column"} spacing={2}>
      <MapSection
        locationBottomSheet={locationBottomSheetIsOpen}
        setLocationBottomSheet={setLocationBottomSheetIsopen}
      />

      <MapMenu setSearchLocationBottomSheet={setLocationBottomSheetIsopen} />
    </Stack>
  );
}
