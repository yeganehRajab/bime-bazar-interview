import { TInlineStyle, TSxStyles } from "@/types/style.types";

const containerSx: TInlineStyle = () => ({
  overflow: "hidden",
  height: "calc(calc(var(--vh, 1vh) * 100) - 80px)",
});

export const mapSectionStyles = { containerSx };
