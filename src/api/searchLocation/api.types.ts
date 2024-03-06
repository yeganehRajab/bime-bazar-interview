export interface IPostSarchLocationResponse {
  name: string;
  phoneNumber: string;
  address: string;
  lat: string;
  lng: string;
}

export interface ISearchLocationProps {
  search: string;
}
