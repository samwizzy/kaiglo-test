export interface ApplyCoupon {
    coupon: string;
    price: number;
    storeId: string;
    productCoupons: ProductCoupons[];
}

export interface ProductCoupons {
    price: number;
    productId: string;
};

export interface ApplyCouponResponse {
    price: number;
    newPrice: number;
}