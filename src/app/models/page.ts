export interface Page<T = any> {
  content: T;
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: {
    offset: 0;
    pageNumber: 0;
    pageSize: 10;
    paged: true;
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    };
    unpaged: false;
  };
  size: number;
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
  totalElements: number;
  totalPages: number;
}
