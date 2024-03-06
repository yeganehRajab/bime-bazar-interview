import { TSxStyles } from "@/types/style.types";

const containerSx: TSxStyles = () => ({
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  padding: "16px",
});

const textSx: TSxStyles = () => ({
  fontSize: "1.8rem",
  fontWeight: "500",
});

const buttonTextSx: TSxStyles = () => ({
  fontSize: "1.4rem",
  fontWeight: "500",
  color: "#fff",
});

const buttonContainerSx: TSxStyles = () => ({
  flexDirection: "row",
  alignItems: "center",
  gap: 0.5,
});

const errorStyles = { containerSx, textSx, buttonTextSx, buttonContainerSx };
export default errorStyles;
