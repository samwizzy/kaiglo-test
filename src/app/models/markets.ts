import { BestSellingProducts } from "./best-selling-products";
import { Product } from "./product";
import { RecentBuyer } from "./recent-buyer";
import { StoreBankDetails } from "./store-bank.details";
import { StoreRating } from "./store-rating";
import { User } from "./user";

export interface Market {
    id: string;
    name: string;
    markets: Array<string>
}
export interface Market3 {
    id: string;
    state: string;
    markets: {
        marketName: string;
        storeCount: number;
    }[]
}
export interface Store {
    storeName?: string;
    storeUrl?: string;
    location?: string;
    closestMarket?: string;
    phoneNumber?: string;
    category?: string;
    description?: string;
    id?: string;
    advertMoney?: number;
    owner?: User;
    storeRating?: StoreRating;
    bannerImage?: string;
    profilePic?: string;
    bankDetails?: StoreBankDetails;
    sales?: number;
    visit?: number;
    stock?: number;
    pendingOrder?: number;
    storeSummary?: {
        followers: number;
        productCount: number;
        successfulSales: number;
    },
    bestSellingProducts?: Array<BestSellingProducts>,
    recentBuyers?: Array<RecentBuyer>,
    products?: Array<Product>
}