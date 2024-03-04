/* eslint-disable @typescript-eslint/no-empty-function */
import { FC } from "react";

import { Box, Fade, Slide, Stack } from "@mui/material";

import styles from "./bottomSheet.styles";
import { IBottomSheet } from "./bottomSheet.types";

const BottomSheet: FC<IBottomSheet> = ({
  setOpen = () => {},
  onClose = () => {},
  isOpen = false,
  timeout = 500,
  children,
}) => {
  const handleClose = (): void => {
    setOpen(false);
    onClose();
  };

  return (
    <Slide direction="up" timeout={timeout} in={isOpen} mountOnEnter>
      <Stack sx={styles.parentSx()}>
        <Stack sx={styles.containerSx()}>
          {/* Full Screen Background*/}
          <Fade timeout={timeout} in={isOpen}>
            <Box sx={styles.bgSx()} onClick={() => handleClose()} />
          </Fade>

          {/* Content */}
          <Box sx={styles.contentSx()}>
            <Box sx={styles.dragContainerSx()}>
              <Box sx={styles.dragLineSx()} />
            </Box>
            <Box sx={styles.bodySx()}>{children}</Box>
          </Box>
        </Stack>
      </Stack>
    </Slide>
  );
};

export default BottomSheet;
