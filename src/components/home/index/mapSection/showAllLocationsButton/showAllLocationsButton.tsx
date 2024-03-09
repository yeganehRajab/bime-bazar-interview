import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { IconButton } from "@mui/material";
import { FC } from "react";
import styles from "./showAllLocationsButton.styles";
import { IShowAllLocationsButtonProps } from "./showAllLocationsButton.types";

const ShowAllLocationsButton: FC<IShowAllLocationsButtonProps> = ({
  onClick,
  isTrackingLocation = false,
}) => {
  return (
    <IconButton sx={styles.showAllButtonsSx()} onClick={onClick}>
      {isTrackingLocation ? <PauseRoundedIcon /> : <PlayArrowRoundedIcon />}
    </IconButton>
  );
};

export default ShowAllLocationsButton;
