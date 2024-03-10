import { mockApi } from '../api';
import { IPostSearchLocationResponse, ISearchLocationProps } from './api.types';

export const searchLocation = async (
  search: ISearchLocationProps
): Promise<IPostSearchLocationResponse> => {
  const response = await mockApi.post<IPostSearchLocationResponse>(
    '/search-result',
    search
  );
  return response.data;
};
