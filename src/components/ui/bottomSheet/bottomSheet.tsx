/* eslint-disable @typescript-eslint/no-empty-function */
import { FC } from "react";

import { Box, Fade, Slide, Stack } from "@mui/material";

import styles from "./bottomSheet.styles";
import { IBottomSheet } from "./bottomSheet.types";
import { useRouter } from "next/router";

const BottomSheet: FC<IBottomSheet> = ({
  onClose = () => {},
  timeout = 500,
  id = "isOpen",
  children,
}) => {
  const router = useRouter();
  const isOpen = (router.query?.[id] as string) === "true";
  console.log(router.query?.[id], isOpen);

  const handleClose = (): void => {
    // setOpen(false);
    // router.replace(id, undefined, { shallow: true });
    router.push({ query: { ...router.query, [id]: "false" } });
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
