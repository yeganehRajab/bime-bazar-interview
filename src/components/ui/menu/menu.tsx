import { Stack, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import { menuStyles } from "./menu.styles";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import BottomSheet from "../bottomSheet/bottomSheet";
import MainInput from "../inputs/mainInput/mainInput";

const MainMenu: FC = () => {
  const [bottomSheetIsOpen, setBottomSheetIsopen] = useState<boolean>(false);

  return (
    <Stack sx={menuStyles.menuContainerSx()}>
      <Stack sx={menuStyles.contentContainerSx()}>
        <Stack
          sx={menuStyles.menuButtonSx()}
          onClick={() => setBottomSheetIsopen((prev) => !prev)}
        >
          <LocationOnRoundedIcon fontSize="inherit" />
          <Typography>location</Typography>
        </Stack>

        <Stack sx={menuStyles.menuButtonSx()}>
          <LocationOnRoundedIcon fontSize="inherit" />
          <Typography>location</Typography>
        </Stack>

        <Stack sx={menuStyles.menuButtonSx()}>
          <LocationOnRoundedIcon fontSize="inherit" />
          <Typography>location</Typography>
        </Stack>

        <Stack sx={menuStyles.menuButtonSx()}>
          <LocationOnRoundedIcon fontSize="inherit" />
          <Typography>location</Typography>
        </Stack>
      </Stack>

      <BottomSheet isOpen={bottomSheetIsOpen} setOpen={setBottomSheetIsopen}>
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
