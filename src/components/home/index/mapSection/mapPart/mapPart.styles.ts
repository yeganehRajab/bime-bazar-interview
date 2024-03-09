import { TInlineStyle } from "@/types/style.types";

const containerSx: TInlineStyle = () => ({
  overflow: "hidden",
  height: "calc(calc(var(--vh, 1vh) * 100) - 80px)",
});

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

const mapSectionStyles = { containerSx, showAllButtonsSx };
export default mapSectionStyles;
