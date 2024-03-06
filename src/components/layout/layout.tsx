import { Stack } from "@mui/material";
import React, { FC, useMemo } from "react";
import { layoutStyles } from "./layout.styles";
import { IMainLayout } from "./layout.types";
import { useQuery } from "react-query";
import { getConfig, getPermissions } from "@/api/config/api";
import QueryWrapper from "../ui/wrapper/queryWrapper/queryWrapper";

const MainLayout: FC<IMainLayout> = ({ children }) => {
  const {
    isLoading: configDataIsLoading,
    isError: configDataIsError,
    refetch: configDataRefetch,
  } = useQuery({
    queryKey: ["config"],
    queryFn: () => getConfig(),
  });

  const {
    isLoading: permissionsDataIsLoading,
    isError: permissionsDataIsError,
    refetch: permissionsDataRefetch,
  } = useQuery({
    queryKey: ["permissions"],
    queryFn: () => getPermissions(),
  });

  return (
    <Stack sx={layoutStyles.mainLayoutContainerSx()}>
      <Stack sx={layoutStyles.layoutContentSx()}>
        <QueryWrapper
          isError={permissionsDataIsError || configDataIsError}
          isLoading={configDataIsLoading || permissionsDataIsLoading}
          refetch={() => {
            configDataRefetch();
            permissionsDataRefetch();
          }}
        >
          {children}
        </QueryWrapper>
      </Stack>
    </Stack>
  );
};

export default MainLayout;
