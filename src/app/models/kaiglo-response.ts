export interface KaigloResponse<T> {
  response: T;
  message: string;
}

export interface KaigloResponseSales<T> {
  content: T;
  message: string;
  first: boolean;
  last: boolean;
  number: number;
}
