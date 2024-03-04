import { TSxStyles } from "@/types/style.types";

const menuContainerSx: TSxStyles = () => ({
  position: "absolute",
  bottom: "0",
  width: "100%",
  height: "80px",
  bgcolor: "#fff",
  borderRadius: "20px 20px 0 0",
  boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
});

const contentContainerSx: TSxStyles = () => ({
  padding: "10px",
  height: "100%",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

const menuButtonSx: TSxStyles = () => ({
  alignItems: "center",
  justifyContent: "center",
  gap: 0.5,
  fontSize: "2.5rem",
  paddingX: "10px",
  color: "#4d5255",
});

export const menuStyles = { menuButtonSx, menuContainerSx, contentContainerSx };
