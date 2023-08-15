import { KaigloSale } from '../enums/kaiglo-sale';
import { ItemSpecification } from './item-specification';
import { KaigloStore } from './kaiglostore';
import { ProductColor } from './product-color';
import { ProductStatus } from './product-status';
import { ProductView } from './product-view';

export interface Product {
  id: string;
  name?: string;
  productUrl?: string;
  specifications?: ItemSpecification[];
  productColors: ProductColor[];
  productViews: ProductView[];
  category?: string;
  featured?: boolean;
  subCategory?: string;
  secondSubCategory?: string;
  description?: string;
  views?: number;
  sold?: number;
  isDeleted?: boolean;
  sales?: boolean;
  freeShipping?: boolean;
  productStatus?: ProductStatus;
  paused?: boolean;
  kaigloSale?: KaigloSale;
  store?: KaigloStore;
  tag?: string;
  inputTag?: string;
  createdDate?: string;
  updatedDate?: string;
  productRating?: ProductAverageRating;
}

export interface ProductAverageRating {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
}

export interface Recommendations<T = any> {
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

export interface ProductObjResponse {
  product: Product;
  recommendations: Recommendations;
}

export interface ProductFilter {
  minPrice: string;
  maxPrice: string;
  filteredStatus?: boolean;
  brands: Array<string>;
  colours: Array<string>;
  sizes: Array<string>;
}

export interface CategoryProduct {
  category: string;
  subCategory: string;
  secondSubCategory: string;
  type: string;
  sectionName: string;
  color: string;
  productList: Product[];
}
