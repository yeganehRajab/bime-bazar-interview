import { Stack } from "@mui/material";
import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(
  () => import("../components/home/index/mapSection/mapSection"),
  {
    ssr: false,
  }
);
export default function Home() {
  return (
    <Stack direction={"column"} spacing={2}>
      <MapWithNoSSR />
    </Stack>
  );
}
