import { Product } from './product';

export interface Cart {
  productId?: string;
  userId?: string;
  color: string;
  size: string;
  quantity: string | number;
  id?: string;
  price?: number;
  productUrl?: string;
  product?: Product;
  storage?: string;
  ramSize?: string;
  platform?: string;
  dateAdded?: string;
}
