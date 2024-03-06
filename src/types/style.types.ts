import { SxProps, Theme } from "@mui/material";

export type TInlineStyle = () => React.CSSProperties;
interface ITheme {
  theme?: Theme;
}

export type TSxStyles<T = ITheme> = (props?: T & ITheme) => SxProps<Theme>;

export interface ISelectOptions {
  label: string;
  value: number;
}
