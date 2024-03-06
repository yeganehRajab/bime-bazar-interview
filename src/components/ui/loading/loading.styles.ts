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

const LoadingStyles = { containerSx, textSx };
export default LoadingStyles;
