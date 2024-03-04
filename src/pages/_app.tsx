import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MuiWrapper from "../components/ui/wrapper/muiWrapper";
import MainLayout from "../components/layout/layout";
import "leaflet/dist/leaflet.css";
import { QueryClientProvider, QueryClient } from "react-query";
import Head from "next/head";

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>مهسان</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
      </Head>
      <QueryClientProvider client={queryClient}>
        <MuiWrapper>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </MuiWrapper>
      </QueryClientProvider>
    </>
  );
}
