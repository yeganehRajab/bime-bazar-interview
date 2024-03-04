import React, { FC } from "react";
import { IMenuButtonsPops } from "./menuButton.types";
import { Stack, Typography } from "@mui/material";
import styles from "./menuButton.styles";

const MenuButton: FC<IMenuButtonsPops> = ({
  icon,
  title,
  onClick,
  disabled = false,
}) => {
  return (
    <Stack sx={styles.menuButtonSx({ disabled })} onClick={onClick}>
      {icon}
      {title && <Typography>{title}</Typography>}
    </Stack>
  );
};

export default MenuButton;
