import { TSxStyles } from "@/types/style.types";
import { alpha } from "@mui/material";

const staticSx: TSxStyles = () => ({
  boxShadow: "0px -6px 31px 0px #00000036",
  borderRadius: "12px 12px 0 0",
});

const containerSx: TSxStyles = () => ({
  position: "relative",
  maxHeight: "calc(var(--vh, 1vh) * 85)",
  justifyContent: "flex-end",
});

const parentSx: TSxStyles = () => ({
  zIndex: "1200",
  position: "fixed",
  inset: 0,
  right: "0",
  bottom: "0",
  width: "100%",
  maxWidth: "500px",
  margin: "0 auto",
  justifyContent: "flex-end",
});

const contentSx: TSxStyles = () => ({
  bgcolor: "#fff",
  borderRadius: "12px 12px 0 0",
  overflow: "auto",
  overflowX: "hidden",
  position: "relative",
  transition: "0.5s",
  maxHeight: "calc(var(--vh, 1vh) * 100)",
  zIndex: 5,
  pb: 4,
});

const bodySx: TSxStyles = () => ({
  overflow: "auto",
  px: "10px ",
});

const bgSx: TSxStyles = () => ({
  position: "absolute",
  inset: 0,
  top: "-100vh",
  bgcolor: alpha("#eee", 0.4),
});

const dragLineSx: TSxStyles<boolean> = () => ({
  zIndex: 15,
  height: "5px",
  width: "180px",
  bgcolor: "grey.400",
  borderRadius: "4px",
});

const dragContainerSx: TSxStyles = () => ({
  py: "15px",
  position: "sticky",
  top: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 10,
});

const bottomSheetStyles = {
  containerSx,
  staticSx,
  parentSx,
  bgSx,
  contentSx,
  dragLineSx,
  bodySx,
  dragContainerSx,
};

export default bottomSheetStyles;
