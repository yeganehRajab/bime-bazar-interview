import { mockApi } from "../api";
import { IPostSarchLocationResponse } from "./api.types";

export const searchLocation = async ({
  search,
}: {
  search: string;
}): Promise<IPostSarchLocationResponse> => {
  const response = await mockApi.post<IPostSarchLocationResponse>(
    "/search-result",
    search
  );
  return response.data;
};
