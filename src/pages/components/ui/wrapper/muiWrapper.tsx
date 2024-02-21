import { FC, PropsWithChildren } from "react";

import { ThemeProvider } from "@mui/material";
import mainTheme from "@/styles/theme/mainTheme";

const MuiWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div dir={mainTheme.direction}>
      <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
    </div>
  );
};

export default MuiWrapper;
