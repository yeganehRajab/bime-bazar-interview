import { ReactNode } from "react";

export interface IQueryWrapperProps {
  isLoading: boolean;
  children: ReactNode;
  isError: boolean;
  refetch: () => void;
}
