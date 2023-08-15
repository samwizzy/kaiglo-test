import { ProductColor } from './product-color';
import { ProductView } from './product-view';
import { KaigloSale } from '../enum/kaiglo-sale';

export interface PopUp {
  data?: {
    type: string;
    value?: Array<ProductColor>;
    alreadyInCart?: boolean;
    sales?: boolean;
    kaigloSales?: string;
  }[];
  actions?: Array<PopUpActionType>;
}

export interface PopUpActionType {
  type: string; // info | danger | success | warning
  label: string;
  // data?: T;
}

export enum SelectionType {
  BUY = 'BUY',
  ADDTOCART = 'ADDTOCART',
}

export interface Selection {
  action?: SelectionType;
  selectedColor?: string;
  selectedSize?: number;
  quantity?: number;
  sales?: boolean;
  price?: number;
  selectedVariantObj?: ProductColor | null;
  complexSize?: boolean;
  kaigloSales?: string;
}
