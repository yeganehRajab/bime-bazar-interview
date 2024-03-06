import { TSxStyles } from "@/types/style.types";

const containerSx: TSxStyles = () => ({
  position: "relative",
  mt: "10px",
  // flexDirection: "row",
  width: "100%",
  marginY: "20px",
});

const searchButtonSx: TSxStyles = () => ({
  borderRadius: "8px",
  fontSize: "2.8rem",
  height: "47.38px",
  gap: 1,
});

const searchButtonTextSx: TSxStyles = () => ({
  fontSize: "1.8rem",
});

const bottomSheetStyles = {
  containerSx,
  searchButtonSx,
  searchButtonTextSx,
};
export default bottomSheetStyles;
