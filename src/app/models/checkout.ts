import { OrderLine } from './order';

export interface CheckoutPayLoad {
  items: CheckoutObj[];
  buyerEmail: string;
  subTotal: string;
  shipping: string;
  tax: string;
  debitId?: string;
  orderTotal: string;
  platform: string;
}

export interface CheckoutObj {
  storeId: string;
  storeName: string;
  orderLines: OrderLine[];
}

export interface PaymentDetail {
  message: string;
  reference: string;
  status: string;
  trans: string;
  transaction: string;
  trxref: string;
}

export type EcommerceData = {
  transaction_id: string;
  value: number;
  currency: string;
  shipping: number;
  tax?: string;
  coupon?: string;
  items: PurchaseItem[];
};

export type PurchaseItem = {
  item_id: string;
  item_name: string;
  price: number;
  quantity?: number;
};

export type PaymentOption = string;
