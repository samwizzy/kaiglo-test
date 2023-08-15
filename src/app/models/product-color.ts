import { ProductColorCode } from './product-color-code';

export interface ProductColor {
  color: ProductColorCode;
  productPriceDetails: ProductPriceDetail[];
}

export interface ProductPriceDetail {
  id: string;
  size: string;
  quantity: string;
  price: number;
  newPrice?: number;
  ramSize?: string;
  storage?: string;
  sku?: string;
}

export type ProductDetailProps = keyof ProductPriceDetail;

export type VariantType = Exclude<ProductDetailProps, 'id' | 'sku'>;
