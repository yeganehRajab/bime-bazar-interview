import BottomSheet from "@/components/ui/bottomSheet/bottomSheet";
import MainInput from "@/components/ui/inputs/mainInput/mainInput";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Autocomplete, Button, Stack, Typography } from "@mui/material";
import { FC } from "react";
import styles from "./searchLocationBottomSheet.styles";
import { ISearchBottomSheetProps } from "./searchLocationBottomSheet.types";
import { useQueryClient } from "react-query";
import { IGetConfigResponse } from "@/api/config/api.types";

const SearchLocationBottomSheet: FC<ISearchBottomSheetProps> = ({
  formik,
  loading,
  locationBottomSheet,
  setLocationBottomSheet,
}) => {
  //get config from react query storage
  const config = useQueryClient().getQueryData<IGetConfigResponse>(["config"]);

  //make period items
  const periodItem = config?.periods.map((item) =>
    item.toString() === "0"
      ? { label: "بدون تکرار", value: item }
      : {
          label: `هر ${item} دقیقه یکبار`,
          value: item,
        }
  );

  return (
    <BottomSheet isOpen={locationBottomSheet} setOpen={setLocationBottomSheet}>
      <form onSubmit={formik.handleSubmit}>
        <Stack sx={styles.containerSx()} spacing={2}>
          <Autocomplete
            disablePortal
            options={periodItem ?? []}
            value={formik.values.period}
            onChange={(_event, value) => formik.setFieldValue("period", value)}
            renderInput={(params) => (
              <MainInput
                {...params}
                {...formik.getFieldProps("period")}
                helperText={formik.touched.period && formik.errors.period}
                error={formik.touched.period && !!formik.errors.period}
                label="فاصله زمانی جستجو را انتخاب کنید"
              />
            )}
            isOptionEqualToValue={(option, value) =>
              option?.value === value?.value
            }
          />

          <MainInput
            id="search"
            label="جستجو کنید"
            variant="outlined"
            disabled={loading}
            {...formik.getFieldProps("search")}
            error={formik.touched.search && !!formik.errors.search}
            helperText={formik.touched.search && formik.errors.search}
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
