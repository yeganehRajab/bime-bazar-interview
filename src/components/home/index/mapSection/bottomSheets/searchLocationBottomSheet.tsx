import BottomSheet from "@/components/ui/bottomSheet/bottomSheet";
import MainInput from "@/components/ui/inputs/mainInput/mainInput";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Autocomplete, Button, Stack, Typography } from "@mui/material";
import { FC } from "react";
import styles from "./searchLocationBottomSheet.styles";
import { ISearchBottomSheetProps } from "./searchLocationBottomSheet.types";

const SearchLocationBottomSheet: FC<ISearchBottomSheetProps> = ({
  formik,
  loading,
  locationBottomSheet,
  setLocationBottomSheet,
}) => {
  return (
    <BottomSheet isOpen={locationBottomSheet} setOpen={setLocationBottomSheet}>
      <form onSubmit={formik.handleSubmit}>
        <Stack sx={styles.containerSx()} spacing={2}>
          <MainInput
            id="search"
            label="Outlined"
            variant="outlined"
            disabled={loading}
            {...formik.getFieldProps("search")}
            error={formik.touched.search && !!formik.errors.search}
            helperText={formik.touched.search && formik.errors.search}
          />

          <Autocomplete
            disablePortal
            options={[{ label: "hi", value: 1 }]}
            renderInput={(params) => <MainInput {...params} label="period" />}
          />

          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            sx={styles.searchButtonSx()}
          >
            <Typography variant="subtitle1">جستجو</Typography>
            <SearchRoundedIcon fontSize="inherit" />
          </Button>
        </Stack>
      </form>
    </BottomSheet>
  );
};

export default SearchLocationBottomSheet;
