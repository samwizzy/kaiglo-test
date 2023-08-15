export interface Category {
  id: string;
  name: string;
  metaTagDescription: string;
  category: SubCategory[];
  productUrl?: string;
  productCount: number;
}

export interface SubCategory {
  name: string;
  category: SubCategory[];
  metaTagDescription?: string;
  tag: string;
  inputTag: string;
  productUrl?: string;
  productCount: number;
}
