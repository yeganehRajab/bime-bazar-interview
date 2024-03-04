import { TextField } from "@mui/material";
import React, { FC } from "react";
import styles from "./mainInput.styles";
import { TextFieldProps } from "@mui/material";

const MainInput: FC<TextFieldProps> = ({ ...params }) => {
  return <TextField sx={styles.inputSx()} {...params} />;
};

export default MainInput;
