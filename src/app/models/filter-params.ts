import { Category } from './category';
import { Color } from './product-color-code';
export interface FilterParams {
  brands: string[];
  category: string;
  kaigloSale?: string;
  maxPrice: number;
  minPrice: number;
  name: string;
  productColorNames: string[];
  productSales: string[];
  productShipping: string[];
  productSizes: string[];
  ramSizes: string[];
  secondSubCategory: string;
  storages: string[];
  sort: string | 'recent' | 'popular' | 'review' | 'h2l' | 'l2h';
  subCategory: string;
}

export type FilterKeys = keyof FilterParams;
export type FilterArrayKeys = Exclude<
  FilterKeys,
  | 'category'
  | 'kaigloSale'
  | 'maxPrice'
  | 'minPrice'
  | 'name'
  | 'subCategory'
  | 'secondSubCategory'
  | 'sort'
>;

export interface CategoryParams {
  productColorCode: Color[];
  categoryMeta: string[][];
  brands: string[];
  sales: string[];
  productCategory: Category;
}

export interface CategoryFilterOption {
  id: string;
  category: string;
  specification: Record<string, string[]>;
  color: Record<string, Color>;
  filterDetailOption: Record<string, string[]>;
  sales: string[];
}

export type OptionsFlags<Type> = {
  [Prop in keyof Type]: Type[Prop];
};

interface IQueryParams {
  search: string;
  scat: string;
  sscat: string;
  brands: string;
  colors: string;
  sizes: string;
  ramSizes: string;
  storages: string;
  sales: string;
}

export type Specification = {
  Condition: string[];
  Warranty: string[];
  'Battery type': string[];
  'Buckle type': string[];
  Material: string[];
  NFC: string[];
  Gender: string[];
  'Screen type': string[];
  Brand: string[];
  Type: string[];
  'Battery Capacity': string[];
  Year: string[];
  'Bluetooth enabled': string[];
  'Camera type': string[];
  Season: string[];
  Age: string[];
};
