import BottomSheet from "@/components/ui/bottomSheet/bottomSheet";
import React, { FC } from "react";
import { ISearchBottomSheetProps } from "./searchLocationBottomSheet.types";
import { Stack, Button } from "@mui/material";
import styles from "./searchLocationBottomSheet.styles";
import MainInput from "@/components/ui/inputs/mainInput/mainInput";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const SearchLocationBottomSheet: FC<ISearchBottomSheetProps> = ({
  locationBottomSheet,
  setLocationBottomSheet,
}) => {
  return (
    <BottomSheet isOpen={locationBottomSheet} setOpen={setLocationBottomSheet}>
      <Stack sx={styles.containerSx()} gap={1}>
        <MainInput
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          sx={{ flexGrow: 1 }}
        />
        <Button variant="contained" sx={styles.searchButtonSx()}>
          <SearchRoundedIcon fontSize="inherit" />
        </Button>
      </Stack>
    </BottomSheet>
  );
};

export default SearchLocationBottomSheet;
