import { ReactNode } from "react";

import { SxProps, Theme } from "@mui/material";

export interface IBottomSheet {
  setOpen?: (state: boolean) => void;
  onClose?: () => void;
  children: ReactNode;
  isOpen?: boolean;
  timeout?: number;
}
