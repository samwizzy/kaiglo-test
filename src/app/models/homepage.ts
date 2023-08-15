import { Product, Recommendations } from './product';
import { SalesObjectList } from './sales';

export interface Homepage {
  homeSliders: {
    id: string;
    image: string;
    createdAt: string;
    name: string;
    imageUrl: string;
    url: string;
  }[];
  adBanners: {
    id: string;
    image: string;
    createdAt: string;
    name: string;
    imageUrl: string;
    url: string;
  }[];
  topSellingItems?: Product[];
  flashSales?: {
    startDate: string;
    endDate: string;
    productList: Product[];
  };
  recommendations?: Recommendations;
  featuredProducts?: Product[];
  newArrivals?: Product[];
  topBrands?: {
    id: string;
    image: string;
    createdAt: string;
    name: string;
    imageUrl: string;
    url: string;
  }[];
  popularCategories?: {
    category: string;
    image: string;
  }[];
  shippingCost?: any;
  salesTemplate?: {
    salesObjectList: SalesObjectList[];
  };
}

export interface HomePageOneResponse {
  popularCategories?: {
    category: string;
    image: string;
  }[];
  recommendations?: Recommendations;
  topSellingItems?: Product[];
}

export interface NewArrivalsResponse {
  newArrivals: Product[];
}

export interface SlidersResponse {
  homeSliders: {
    id: string;
    image: string;
    createdAt: string;
    name: string;
    imageUrl: string;
    url: string;
  }[];
  adBanners: {
    id: string;
    image: string;
    createdAt: string;
    name: string;
    imageUrl: string;
    url: string;
  }[];
  topBrands?: {
    id: string;
    image: string;
    createdAt: string;
    name: string;
    imageUrl: string;
    url: string;
  }[];
}
