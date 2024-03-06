import { mockApi } from "../api";
import { IPostSarchLocationResponse, ISearchLocationProps } from "./api.types";

export const searchLocation = async (
  search: ISearchLocationProps
): Promise<IPostSarchLocationResponse[]> => {
  const response = await mockApi.post<IPostSarchLocationResponse[]>(
    "/search-result",
    search
  );
  return response.data;
};
