import React, { FC } from "react";
import { IMapPopupProps } from "./mapPopup.types";
import { Popup } from "react-leaflet";
import { Stack, Typography } from "@mui/material";
import styles from "./mapPopup.styles";

const MapPopup: FC<IMapPopupProps> = ({ address, name, phoneNumber }) => {
  return (
    <Popup>
      <Stack sx={styles.popupContainerSx()} spacing={0.5}>
        <Typography variant="body2">{name}</Typography>
        <Typography variant="body2">{phoneNumber}</Typography>
        <Typography variant="body2">{address}</Typography>
      </Stack>
    </Popup>
  );
};

export default MapPopup;
