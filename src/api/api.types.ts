import { AxiosRequestConfig, AxiosResponse } from "axios";

export interface IApi {
  get: <T>(
    url: string,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T>>;
  post: <T>(
    url: string,
    body: unknown,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T>>;
  put: <T>(
    url: string,
    body: unknown,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T>>;
  delete: <T>(
    url: string,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T>>;
  patch: <T>(
    url: string,
    body: unknown,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T>>;
}
