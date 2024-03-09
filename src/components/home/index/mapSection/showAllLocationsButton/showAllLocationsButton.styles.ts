import { TInlineStyle } from "@/types/style.types";

const showAllButtonsSx: TInlineStyle = () => ({
  position: "absolute",
  top: "10px",
  left: "10px",
  zIndex: 1000,
  backgroundColor: "#fff",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
  width: "50px",
  height: "50px",
});

const buttonStyles = { showAllButtonsSx };
export default buttonStyles;
