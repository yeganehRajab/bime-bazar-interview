import { ReactNode } from "react";

export interface IMenuButtonsPops {
  title?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon: ReactNode;
}

export interface IMenuButtonSxStyle {
  disabled: boolean;
}
