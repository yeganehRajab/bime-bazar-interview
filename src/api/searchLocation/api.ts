import { mockApi } from "../api";

export const searchLocation = async ({
  search,
}: {
  search: string;
}): Promise<any> => {
  const response = await mockApi.post<any>("/", search);
  return response.data;
};
