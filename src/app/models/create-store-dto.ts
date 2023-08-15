export interface CreateStoreDTO {
  storeName?: string;
  storeUrl?: string;
  location?: string;
  closestMarket?: string;
  phoneNumber?: string;
  category?: string;
  description?: string;
}

export interface UpdateStoreDTO {
  bannerImage: string;
  description: string;
  name: string;
  phoneNumber: string;
  profilePic: string;
}
