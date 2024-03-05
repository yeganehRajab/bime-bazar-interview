import BottomSheet from "@/components/ui/bottomSheet/bottomSheet";
import MainInput from "@/components/ui/inputs/mainInput/mainInput";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Button, Stack } from "@mui/material";
import { FC } from "react";
import styles from "./searchLocationBottomSheet.styles";
import { ISearchBottomSheetProps } from "./searchLocationBottomSheet.types";

const SearchLocationBottomSheet: FC<ISearchBottomSheetProps> = ({
  formik,
  locationBottomSheet,
  setLocationBottomSheet,
}) => {
  return (
    <BottomSheet isOpen={locationBottomSheet} setOpen={setLocationBottomSheet}>
      <form onSubmit={formik.handleSubmit}>
        <Stack sx={styles.containerSx()} gap={1}>
          <MainInput
            id="search"
            label="Outlined"
            variant="outlined"
            sx={styles.inputSx()}
            {...formik.getFieldProps("search")}
            error={formik.touched.search && !!formik.errors.search}
            helperText={formik.touched.search && formik.errors.search}
          />

          <Button
            type="submit"
            variant="contained"
            sx={styles.searchButtonSx()}
          >
            <SearchRoundedIcon fontSize="inherit" />
          </Button>
        </Stack>
      </form>
    </BottomSheet>
  );
};

export default SearchLocationBottomSheet;
