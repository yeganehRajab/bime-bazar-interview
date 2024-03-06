import CachedRoundedIcon from "@mui/icons-material/CachedRounded";
import { Button, Stack, Typography } from "@mui/material";
import { FC } from "react";
import styles from "./error.styles";
import { IErrorProps } from "./error.types";

const Error: FC<IErrorProps> = ({ refetch }) => {
  return (
    <Stack sx={styles.containerSx()} spacing={2}>
      <Typography sx={styles.textSx()} color={"primary"}>
        مشکلی در دریافت اطلاعات پیش آمده است.
      </Typography>

      <Button variant="contained" onClick={refetch}>
        <Stack sx={styles.buttonContainerSx()}>
          <Typography sx={styles.buttonTextSx()} color={"primary"}>
            تلاش مجدد
          </Typography>
          <CachedRoundedIcon />
        </Stack>
      </Button>
    </Stack>
  );
};

export default Error;
