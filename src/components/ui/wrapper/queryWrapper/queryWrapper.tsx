import React, { FC } from "react";
import { IQueryWrapperProps } from "./queryWrapper.types";
import { CircularProgress, Stack } from "@mui/material";
import style from "./queryWrapper.styles";
import Loading from "../../loading/loading";
import Error from "../../error/error";

const QueryWrapper: FC<IQueryWrapperProps> = ({
  children,
  isError,
  isLoading,
  refetch,
}) => {
  return (
    <Stack sx={style.containerSx()}>
      {isLoading && <Loading />}
      {isError && <Error refetch={refetch} />}
      {!isLoading && !isError && children}
    </Stack>
  );
};

export default QueryWrapper;
