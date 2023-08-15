import { User } from './user';

export interface DebitResponse {
  active: boolean;
  amount: number;
  createdDate: string;
  id: string;
  updatedDate: string;
  user: User;
}

export interface WalletData {
  amount: number;
  channel: string;
  debitId?: string;
  description: string;
  referenceCode: string;
  tranType: string;
  userId: string;
}
