import { ProductVerificationStatus } from '../enums/product-verification-status';

export interface ProductStatus {
  status: ProductVerificationStatus;
  updatedDate: any;
  approvedBy: string;
}
