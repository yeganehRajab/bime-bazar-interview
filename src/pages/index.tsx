import { getConfig, getPermissions } from "@/api/config/api";
import MapSection from "@/components/home/index/mapSection/index/mapSection";
import QueryWrapper from "@/components/ui/wrapper/queryWrapper/queryWrapper";
import { useQuery } from "react-query";

export default function Home() {
  const {
    // data: configData,
    isLoading: configDataIsLoading,
    isError: configDataIsError,
    refetch: configDataRefetch,
  } = useQuery({
    queryKey: ["config"],
    queryFn: () => getConfig(),
  });

  const {
    // data: permissionsData,
    isLoading: permissionsDataIsLoading,
    isError: permissionsDataIsError,
    refetch: permissionsDataRefetch,
  } = useQuery({
    queryKey: ["permissions"],
    queryFn: () => getPermissions(),
  });

  return (
    <QueryWrapper
      isError={permissionsDataIsError || permissionsDataIsError}
      isLoading={configDataIsLoading || permissionsDataIsLoading}
      refetch={() => {
        configDataRefetch();
        permissionsDataRefetch();
      }}
    >
      <MapSection />
    </QueryWrapper>
  );
}
