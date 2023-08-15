import { Product } from './product';

export interface SalesObjectList {
  banners?: {
    mobileHome: string;
    mobileSalesPage: string;
    desktopHome: string;
    desktopHome2: string;
    desktopSalesPage: string;
    background: string;
  };
  colors?: {
    background: string;
    productCard: string;
    productName: string;
    priceContainer: string;
    priceText: string;
    slashedPriceText: string;
    itemCountBG: string;
    itemCountText: string;
  };
  description: string | null;
  imageUrl: string;
  name: string;
  endDate: string;
  startDate: string;
}

export interface SalesResponse {
  salesObjectList: SalesObjectList[];
}

export interface SaleResponse {
  content: Product[];
  pageable: {
    sort: {
      unsorted: boolean;
      sorted: boolean;
      empty: boolean;
    };
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: {
    unsorted: boolean;
    sorted: boolean;
    empty: boolean;
  };
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export enum SalesType {
  FLASH_SALES,
  EASTER,
  GROUP_BUY,
}
