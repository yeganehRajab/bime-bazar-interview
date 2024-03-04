import { Stack, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import { menuStyles } from "./menu.styles";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import WhereToVoteRoundedIcon from "@mui/icons-material/WhereToVoteRounded";
import AddLocationRoundedIcon from "@mui/icons-material/AddLocationRounded";
import EditLocationRoundedIcon from "@mui/icons-material/EditLocationRounded";
import BottomSheet from "../bottomSheet/bottomSheet";
import MainInput from "../inputs/mainInput/mainInput";
import { useRouter } from "next/router";

const MainMenu: FC = () => {
  const router = useRouter();

  return (
    <Stack sx={menuStyles.menuContainerSx()}>
      <Stack sx={menuStyles.contentContainerSx()}>
        <Stack
          sx={menuStyles.menuButtonSx()}
          onClick={() =>
            router.push({
              query: { ...router.query, bottomSheetIsOpen: "true" },
            })
          }
        >
          <LocationOnRoundedIcon fontSize="inherit" />
          <Typography>location</Typography>
        </Stack>

        <Stack sx={menuStyles.menuButtonSx()}>
          <WhereToVoteRoundedIcon fontSize="inherit" />
          <Typography>location</Typography>
        </Stack>

        <Stack sx={menuStyles.menuButtonSx()}>
          <AddLocationRoundedIcon fontSize="inherit" />
          <Typography>location</Typography>
        </Stack>

        <Stack sx={menuStyles.menuButtonSx()}>
          <EditLocationRoundedIcon fontSize="inherit" />
          <Typography>location</Typography>
        </Stack>
      </Stack>

      <BottomSheet id="bottomSheetIsOpen">
        <p>hellooooo</p>
        <p>hellooooo</p>
        <p>hellooooo</p>
        <p>hellooooo</p>

        <MainInput />
      </BottomSheet>
    </Stack>
  );
};

export default MainMenu;
