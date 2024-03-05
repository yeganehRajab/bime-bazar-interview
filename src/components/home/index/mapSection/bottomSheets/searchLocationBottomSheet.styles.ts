import { TSxStyles } from "@/types/style.types";

const containerSx: TSxStyles = () => ({
  position: "relative",
  mt: "10px",
  flexDirection: "row",
  width: "100%",
  marginY: "20px",
});

const searchButtonSx: TSxStyles = () => ({
  borderRadius: "8px",
  fontSize: "2.8rem",
  height: "47.38px",
});

const inputSx: TSxStyles = () => ({
  flexGrow: "1",
});

const bottomSheetStyles = { containerSx, searchButtonSx, inputSx };
export default bottomSheetStyles;
