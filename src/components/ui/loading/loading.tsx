import { CircularProgress, Stack, Typography } from "@mui/material";
import React, { FC } from "react";
import styles from "./loading.styles";

const Loading: FC = () => {
  return (
    <Stack sx={styles.containerSx()} spacing={4}>
      <CircularProgress />
      <Typography sx={styles.textSx()} color={"primary"}>
        لطفا منتظر بمانید...
      </Typography>
    </Stack>
  );
};

export default Loading;
