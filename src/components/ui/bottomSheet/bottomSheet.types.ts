import { ReactNode } from "react";

import { SxProps, Theme } from "@mui/material";

export interface IBottomSheet {
  id: string;
  onClose?: () => void;
  children: ReactNode;
  timeout?: number;
}
