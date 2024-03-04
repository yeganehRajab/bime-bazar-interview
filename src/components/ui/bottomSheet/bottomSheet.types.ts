import { ReactNode } from "react";

import { SxProps, Theme } from "@mui/material";

export interface IBottomSheet {
  setOpen?: (state: boolean) => void;
  onClose?: () => void;
  children: ReactNode;
  transparent?: boolean;
  isOpen?: boolean;
  sx?: SxProps<Theme>;
  sxContent?: SxProps<Theme>;
  timeout?: number;
  hasContainer?: boolean;
}
