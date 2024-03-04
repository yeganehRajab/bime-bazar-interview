import { TSxStyles } from "@/types/style.types";
import { IMenuButtonSxStyle } from "./menuButton.types";

const menuButtonSx: TSxStyles<IMenuButtonSxStyle> = (props) => ({
  alignItems: "center",
  justifyContent: "center",
  gap: 0.5,
  fontSize: "2.5rem",
  paddingX: "10px",
  color: "#4d5255",
  cursor: props?.disabled ? "not-allowed" : "pointer",
  svg: {
    color: props?.disabled ? "grey.500" : "",
  },
});

const menuStyles = { menuButtonSx };
export default menuStyles;
