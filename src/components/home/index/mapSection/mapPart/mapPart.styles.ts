import { TInlineStyle } from "@/types/style.types";

const containerSx: TInlineStyle = () => ({
  overflow: "hidden",
  height: "calc(calc(var(--vh, 1vh) * 100) - 80px)",
});

const mapSectionStyles = { containerSx };
export default mapSectionStyles;
