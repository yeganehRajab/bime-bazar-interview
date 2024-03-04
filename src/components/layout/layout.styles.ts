import { TSxStyles } from "@/types/style.types";

const mainLayoutContainerSx: TSxStyles = () => ({
  padding: 0,
  margin: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "1000000",
});

const layoutContentSx: TSxStyles = () => ({
  bgcolor: "#eee",
  maxWidth: "500px",
  width: "100%",
  maxHeight: "calc(var(--vh, 1vh) * 100)",
  height: "100vh",
  position: "relative",
});

export const layoutStyles = { mainLayoutContainerSx, layoutContentSx };
