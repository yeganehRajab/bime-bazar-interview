import MenuButton from "@/components/ui/buttons/menuButton/menuButton";
import AddLocationRoundedIcon from "@mui/icons-material/AddLocationRounded";
import EditLocationRoundedIcon from "@mui/icons-material/EditLocationRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import WhereToVoteRoundedIcon from "@mui/icons-material/WhereToVoteRounded";
import { Stack } from "@mui/material";
import { FC } from "react";
import { menuStyles } from "./mapMenu.styles";
import { IMapMenuProps } from "./mapMenu.types";
import { bottomSheetHandler } from "@/utils/bottomSheetHandler/bottomSheetHandler";

const MapMenu: FC<IMapMenuProps> = ({ setSearchLocationBottomSheet }) => {
  return (
    <Stack sx={menuStyles.menuContainerSx()}>
      <Stack sx={menuStyles.contentContainerSx()}>
        <MenuButton
          onClick={() => {
            bottomSheetHandler(setSearchLocationBottomSheet);
          }}
          icon={<LocationOnRoundedIcon fontSize="inherit" />}
        />
        <MenuButton
          icon={<WhereToVoteRoundedIcon fontSize="inherit" />}
          disabled
        />
        <MenuButton
          icon={<AddLocationRoundedIcon fontSize="inherit" />}
          disabled
        />
        <MenuButton
          icon={<EditLocationRoundedIcon fontSize="inherit" />}
          disabled
        />
      </Stack>
    </Stack>
  );
};

export default MapMenu;
