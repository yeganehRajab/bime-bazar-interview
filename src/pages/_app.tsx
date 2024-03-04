import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MuiWrapper from "../components/ui/wrapper/muiWrapper";
import MainLayout from "../components/layout/layout";
import "leaflet/dist/leaflet.css";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MuiWrapper>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </MuiWrapper>
    </QueryClientProvider>
  );
}
