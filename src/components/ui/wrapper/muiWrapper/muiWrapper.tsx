import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "@mui/material";
import mainTheme from "@/styles/theme/mainTheme";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";

const MuiWrapper: FC<PropsWithChildren> = ({ children }) => {
  // Create rtl cache
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
    </CacheProvider>
  );
};

export default MuiWrapper;
