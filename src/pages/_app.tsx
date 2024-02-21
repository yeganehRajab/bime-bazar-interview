import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MuiWrapper from "./components/ui/wrapper/muiWrapper";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MuiWrapper>
      <Component {...pageProps} />
    </MuiWrapper>
  );
}
