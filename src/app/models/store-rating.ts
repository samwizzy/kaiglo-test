export interface StoreRating {
  qualityRating: {
    quality: number;
    count: number;
    sum: number;
  };
  deliveryRating: {
    delivery: number;
    count: number;
    sum: number;
  };
  communicationRating: {
    communication: number;
    count: number;
    sum: number;
  };
}

export interface ProductRatingData {
  comment: string;
  communication: number;
  delivery: number;
  orderLineId: string;
  productId: string;
  productRating: number;
  quality: number;
  storeId: string;
}

export interface ProductRating {
  id: string;
  comment: string;
  userRating: number;
  fullName: string;
  profilePic: string;
  createdDate: Date;
  updatedDate: Date;
}
