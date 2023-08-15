import { BestSellingProducts } from './best-selling-products';
import { CreateStoreDTO } from './create-store-dto';
import { RecentBuyer } from './recent-buyer';
import { StoreBankDetails } from './store-bank.details';
import { StoreRating } from './store-rating';

export interface KaigloStore extends CreateStoreDTO {
  id: string;
  advertMoney?: number;
  owner: StoreOwner;
  storeRating?: StoreRating;
  bannerImage?: string;
  profilePic: string;
  bankDetails?: StoreBankDetails;
  sales?: number;
  isFollowingStore?: boolean;
  visit?: number;
  stock?: number;
  pendingOrder?: number;
  storeSummary?: {
    followers: number;
    productCount: number;
    successfulSales: number;
  };
  bestSellingProducts?: Array<BestSellingProducts>;
  recentBuyers?: Array<RecentBuyer>;
  createdDate: string;
}

interface StoreOwner {
  id: string;
  pictureUrl: string;
}
