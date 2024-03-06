import { mockApi } from "../api";
import { IGetConfigResponse } from "./api.types";

export const getConfig = async (): Promise<IGetConfigResponse> => {
  const response = await mockApi.get<IGetConfigResponse>("/config");
  return response.data;
};

export const getPermissions = async (): Promise<string[]> => {
  const response = await mockApi.get<string[]>("/permissions");
  return response.data;
};
