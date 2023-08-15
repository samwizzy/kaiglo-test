import { OrderStatus } from '../enum/orderstatus';
import { ProductPriceDetail } from './product-color';

export interface Order {
  buyer: string;
  address: string;
  appliedCoupon: any;
  createdDate: string;
  issue: any;
  orderItem: OrderItem;
  orderNumber: any;
  orderStatus: OrderStatus;
  platform: string;
  productPriceDetail: ProductPriceDetail;
  storeId: string;
  storeName: string;
  updatedDate: string;
  userId: string;
  id: string;
}

export interface OrderItem {
  url: string;
  productId: string;
  productName: string;
  price: number;
  color: string;
  quantity: string;
  totalAmt?: number;
  sales?: boolean;
  size?: string;
  freeShipping?: boolean;
}

export interface OrderLine {
  id?: string;
  appliedCoupon?: string;
  orderNumber?: string;
  storeId: string;
  storeName: string;
  userId: string;
  orderStatus: OrderStatus;
  buyer: string;
  gender?: string;
  state: string;
  address: string;
  orderItem: OrderItem;
  productPriceDetail: ProductPriceDetail;
}
